stripe.transfers.create({
  amount: amount * 100,
  currency: "usd",
  destination: publisherStripeAccountId
});
