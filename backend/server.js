const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./model/User');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;
const crypto = require('crypto');
const Shop = require('./model/Shop');
const Item = require('./model/Item');
const fs = require('fs');
const { promisify } = require('util');

app.use(express.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Routes
app.post('/register', async (req, res) => {
    try {
        const { name, email, password, phoneNumber, type } = req.body; 
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Create new user
        const newUser = new User({ name, email, password, phoneNumber, type }); 
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});



app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
        res.status(200).json({ token ,user});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    // Check and strip 'Bearer ' prefix from token
    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Invalid token format' });
    }

    const authToken = tokenParts[1];

    jwt.verify(authToken, 'your-secret-key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.userId = decoded.userId;
        next();
    });
};


// Route to fetch user data
app.get('/data', verifyToken, async (req, res) => {
    try {
        // Fetch user data based on userId from token
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return user data
        res.status(200).json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
const multer = require('multer');
const path = require('path');

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Specify the directory where images will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

function generateShopId() {
    // Generate a random string as the input for hashing
    const randomString = Math.random().toString(36).substring(2);
    
    // Create a hash using SHA-256
    const hash = crypto.createHash('sha256').update(randomString).digest('hex');
    
    // Extract the first 6 characters of the hash
    const shopId = hash.substring(0, 6);
  
    return shopId;
  }
  
  app.post('/shop', upload.single('shopImage'), async (req, res) => {
    try {
        const { shopName, shopkeeperName, address } = req.body;
        
        // Generate unique shopId using the generateShopId function
        const shopId = generateShopId();

        // Get the path of the uploaded image
        const shopImagePath = req.file.path;

        const newShop = new Shop({ shopName, shopkeeperName, shopId, address, img_path: shopImagePath });
        await newShop.save();
        res.status(201).json({ message: 'Shop created successfully', shop: newShop });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Endpoint for creating a new item with image upload
app.post('/item', upload.single('itemImage'), async (req, res) => {
    try {
        const { shopId, itemName, itemType, rate, brand, description } = req.body;

        // Get the path of the uploaded image
        const itemImagePath = req.file.path;

        const newItem = new Item({ shopId, itemName, itemType, rate, brand, description, img_path: itemImagePath });
        await newItem.save();
        res.status(201).json({ message: 'Item created successfully', item: newItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.get('/allItems' , async(req,res) =>{
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({message : "Server error"})
    }
})

app.get('/allshops' , async(req, res) =>{
    try {
        const shops = await Shop.find();
        res.json(shops);
    } catch (error) {
        res.status(500).json({message : "server Error"})    }
})

app.get('/uploads/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, 'uploads', filename);
    const stat = fs.statSync(filePath);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(filePath, { start, end });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'image/jpeg',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'image/jpeg',
        };
        res.writeHead(200, head);
        fs.createReadStream(filePath).pipe(res);
    }
});

let wishlist = [
    { id: 1, name: 'Product 1', price: '$20', rating: 4.5 },
    { id: 2, name: 'Product 2', price: '$25', rating: 4.2 },
    { id: 3, name: 'Product 3', price: '$30', rating: 4.8 }
  ];
  
  // Get all wishlist items
  app.get('/wishlist', (req, res) => {
    res.json(wishlist);
  });
  
  // Add an item to the wishlist
  app.post('/', (req, res) => {
    const newItem = req.body;
    wishlist.push(newItem);
    res.status(201).json(newItem);
  });
  
  // Delete a wishlist item by ID
  app.delete('/:id', (req, res) => {
    const { id } = req.params;
    wishlist = wishlist.filter(item => item.id !== parseInt(id));
    res.json({ message: 'Item deleted' });
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
