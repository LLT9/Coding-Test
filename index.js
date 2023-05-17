import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import Keyv from 'keyv';
import redis from 'redis';
import moment from 'moment';

// Can use process.env, secret management tools or other ways instead in actual production
const CONFIG = {
    PORT: 3000,
    ID: 1,
    USERNAME: 'admin',
    PASSWORD: 'Admin&8181',
    EXPIRATION_TIME: 10, // Token expiration time is set to 10 seconds for demostration purpose
    EXPIRATION_UNIT: 'second',
    ACCESSTOKEN_STRING_RADIX: 36,
    ACCESSTOKEN_SUBSTRING_START_INDEX: 2,
};

// Middleware for JSON parsing and Passport initialization
const app = express();
app.use(session({
    secret: 'SECRET',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());


const redisClient = redis.createClient(); // Assume Redis is running on default settings
await redisClient.connect();

const keyv = new Keyv({
    store: redisClient,
});
keyv.on('error', (err) => {
    console.error('Error connecting to Keyv store:', err);
});

// Define serialization and deserialization functions for passport
passport.serializeUser((username, done) => {
    done(null, { username });
});
passport.deserializeUser((username, done) => {
    done(null, { username });
});

// Strategy for /login endpoint
passport.use('login', new LocalStrategy(
    (username, password, done) => {
        if (username === CONFIG.USERNAME && password === CONFIG.PASSWORD) {
            return done(null, username);
        } else {
            // Invalid credentials, return Unauthorized by default
            return done(null, false);
        }
    }
));

// a. GET method /hello
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

// b. POST method /sortnum
app.post('/sortnum', (req, res) => {
    const { numbers } = req.body;
    if (!Array.isArray(numbers)) {
        res.status(400).json({ error: 'Invalid input. Expected an array of numbers.' });
        return;
    }
    const sortedNumbers = numbers.sort((a, b) => a - b);
    res.json({ sortedNumbers });
});

// c. POST method /login
app.post('/login', passport.authenticate('login'), (req, res) => {
    const token = Math.random().toString(CONFIG.ACCESSTOKEN_STRING_RADIX).substring(CONFIG.ACCESSTOKEN_SUBSTRING_START_INDEX); // Replace with actual token generation package like JWT
    const expiryDate = moment().add(CONFIG.EXPIRATION_TIME, CONFIG.EXPIRATION_UNIT).unix(); // Assuming access token expires in 1 hour
    // Save token in the session
    keyv.set(token, expiryDate);
    res.json({ token });
});

const middleware = async (req, res, next) => {
    const token = req.rawHeaders[1].split(' ')[1]
    if (await keyv.get(token) < moment().unix()) {
        res.status(400).json({ error: "Token is expired" });
    }
    next();
}
// d. GET method /is_auth
app.get('/is_auth', middleware, (req, res) => {
    res.json({ isAuthenticated: true });
});


// Start the server:
app.listen(CONFIG.PORT, () => {
    console.log(`Server listening on port ${CONFIG.PORT}`);
});

