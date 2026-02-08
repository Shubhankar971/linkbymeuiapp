import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const { items, orderId } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: items.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.website },
        unit_amount: item.price * 100
      },
      quantity: 1
    })),
    success_url: `${process.env.APP_URL}/dashboard/orders/${orderId}`,
    cancel_url: `${process.env.APP_URL}/dashboard/cart`
  });

  return Response.json({ url: session.url });
}
