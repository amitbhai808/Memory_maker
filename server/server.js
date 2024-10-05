import express from "express";
const app = express()
const port = 4000

// Sample route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

// About route
app.get('/about', (req, res) => {
    res.send('About Us page with information about our company');
});

// Services route
app.get('/services', (req, res) => {
    res.send('List of services we offer');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('Contact us via this page');
});

// Login route
app.post('/login', (req, res) => {
    // Implement login functionality here
    res.send('Login endpoint');
});

// Signup route
app.post('/signup', (req, res) => {
    // Implement signup functionality here
    res.send('Signup endpoint');
});

// 404 route for unmatched URLs
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))