// This is your test secret API key.
const stripe = require("stripe")();
const express = require("express");
const app = express();
app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:4242";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: `price_1N3pmpF3hZdgARAED47j7ih9`,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on port 4242"));
