import fetch from "node-fetch";

export default async function handleFormSubmit(e) {
  e.preventDefault();

  const form = new FormData(e.target);
  console.log(form);

  const data = {
    id: form.get('id'),
    quantity: form.get('quantity')
  };

  console.log(data);

  const response = await fetch('/.netlify/functions/create-checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

  console.log(response);

  // const stripe = Stripe(response.publishableKey);
  // const { error } = await stripe.redirectToCheckout({
  //   sessionId: response.sessionId,
  // });

  // if (error) {
  //   console.error(error);
  // }
}