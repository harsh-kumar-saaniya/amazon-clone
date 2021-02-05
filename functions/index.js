const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { request } = require('express');
const stripe = require("stripe")("sk_test_51HyPDxLZ3nWO85aLVYa12ijGD9598GyUXEJ2ny4ZXwHd8CjUh1TNC34RjmaearO484XxWvrJjmgjzUoxNlSQtOMP00iSF4i2y3")

// App

// - App Config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());


// - API Routes
app.get('/', (request, response) => response.status(200).send("hello world"))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received for this amount >>> ", total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total, // subunit of the currency
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.clientSecret,
    })


})


// - Listen Cammand
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-e9c9f/us-central1/api