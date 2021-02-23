const fetch = require('node-fetch');

module.exports = () => {
  async function getProducts() {
    const result = await fetch(
      'https://moral-gnat-75.hasura.app/v1/graphql',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query MyQuery {
              products {
                amount
                currency
                description
                id
                image
                name
              }
            }
          `,
          variables: {},
        }),
      }
    ).then((res) => res.json());

    return result.data.products;
  }

  return getProducts();
};
