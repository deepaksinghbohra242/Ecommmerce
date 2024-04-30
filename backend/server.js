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

app.post('/shop', async (req, res) => {
    try {
        const { shopName, shopkeeperName, address } = req.body;
        const shopId = generateShopId(); // This line is causing the error

        // Generate unique shopId using the generateShopId function
        const uniqueShopId = generateShopId(shopId);

        const newShop = new Shop({ shopName, shopkeeperName, shopId: uniqueShopId, address }); // Use uniqueShopId here
        await newShop.save();
        res.status(201).json({ message: 'Shop created successfully', shop: newShop });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

function generateShopId(shopId) { // Add shopId as parameter here
    const salt = 'your_salt_here'; 
    const hashedId = crypto.createHash('sha256').update(shopId + salt).digest('hex');
    return hashedId.slice(0, 10);
}

app.post('/item', async (req, res) => {
    try {
        const { shopId, itemName, itemType, rate, brand, description } = req.body;
        const newItem = new Item({ shopId, itemName, itemType, rate, brand, description });
        await newItem.save();
        res.status(201).json({ message: 'Item created successfully', item: newItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
