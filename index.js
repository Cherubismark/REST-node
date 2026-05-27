const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());

// Temporary in-memory storage
const tshirts = [];

// Start server
app.listen(PORT, () => 
    console.log(`Its alive on http://localhost:${PORT}`)
);


// Home route
app.get('/', (req, res) => {

    res.send({
        message: 'Welcome to T-Shirt API'
    });

});


// Get all tshirts
app.get('/tshirt', (req, res) => {

    res.status(200).send({
        tshirts
    });

});


// Create a new tshirt
app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params;

    const { logo, size, color } = req.body;

    // Validation
    if (!logo || !size || !color) {

        return res.status(400).send({
            message: 'Logo, size and color are required'
        });
    }

    // Create tshirt object
    const newTshirt = {
        id,
        logo,
        size,
        color,
        createdAt: new Date()
    };

    // Store tshirt
    tshirts.push(newTshirt);

    // Response
    res.status(201).send({
        message: 'Tshirt created successfully',
        tshirt: newTshirt
    });

});


// Update tshirt
app.put('/tshirt/:id', (req, res) => {

    const { id } = req.params;

    const { logo } = req.body;

    const tshirt = tshirts.find(t => t.id === id);

    if (!tshirt) {

        return res.status(404).send({
            message: 'Tshirt not found'
        });
    }

    tshirt.logo = logo || tshirt.logo;

    res.send({
        message: 'Tshirt updated',
        tshirt
    });

});


// Delete tshirt
app.delete('/tshirt/:id', (req, res) => {

    const { id } = req.params;

    const index = tshirts.findIndex(t => t.id === id);

    if (index === -1) {

        return res.status(404).send({
            message: 'Tshirt not found'
        });
    }

    tshirts.splice(index, 1);

    res.send({
        message: `Tshirt with ID ${id} deleted`
    });

});