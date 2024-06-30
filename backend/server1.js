const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Define Mongoose schema and models
const ItemSchema = new mongoose.Schema({
    itemName: String,
    itemType: String,
    rate: Number,
    brand: String,
    description: String,
    img_path: String // Store image path in database
});

const Item = mongoose.model('Item', ItemSchema);

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Destination folder for storing uploads
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`); // File naming convention
    },
});

const upload = multer({ storage: storage });

// Upload route
app.post('/api/upload1', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Construct the image URL
        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

        // Save imageUrl (or img_path) in MongoDB
        const newItem = new Item({
            itemName: req.body.itemName,
            itemType: req.body.itemType,
            rate: req.body.rate,
            brand: req.body.brand,
            description: req.body.description,
            img_path: imageUrl // Save the image URL in the database
        });
        await newItem.save();

        res.status(201).json({ message: 'Image uploaded successfully', imageUrl: imageUrl });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete route
app.delete('/api/upload1/:filename', async (req, res) => {
    try {
        const { filename } = req.params;
        const filePath = path.join(__dirname, 'uploads', filename);

        // Check if the file exists
        fs.access(filePath, fs.constants.F_OK, async (err) => {
            if (err) {
                return res.status(404).json({ message: 'File not found' });
            }

            // Delete the file from the uploads directory
            await promisify(fs.unlink)(filePath);

            // Optionally, update the database to remove img_path associated with the deleted file
            // Example: await Item.findOneAndUpdate({ img_path: imageUrl }, { $unset: { img_path: 1 } });

            res.json({ message: 'File deleted successfully' });
        });
    } catch (error) {
        console.error('Error deleting file:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
