const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KFG5eSBjSw1UXqUJZ8bgPyD3iGC3q2jM6H1gZmLgrb1m1BfxuFBycAyhgdIFPE0vseFFAvuioMP8G06KISQm14h00IoZ7jRAp"
);
// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received BOOM!!! for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });

  // 201 is for OK - Created
});

// - Listen Command
exports.api = functions.https.onRequest(app);
