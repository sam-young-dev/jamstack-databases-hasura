import fetch from "node-fetch";

export async function handleFormSubmit(e) {
  e.preventDefault();

  const form = new FormData(e.target);

  const data = {
    id: form.get('id'),
    quantity: form.get('quantity')
  };

  const response = await fetch('/.netlify/functions/create-checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

  const stripe = Stripe(response.publishableKey);
  const { error } = await Stripe.redirectToCheckout({
    sessionId: response.sessionId,
  });

  if (error) {
    console.error(error);
  }
}