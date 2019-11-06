export const getOrders = async () => {
  const url = 'http://localhost:3001/api/v1/orders';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error getting all orders');
  }
  return response.json();
};

export const createOrder = async newOrder => {
  const url = 'http://localhost:3001/api/v1/orders';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newOrder)
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Error creating new order');
  }
  return response.json();
};

export const deleteOrder = async completedOrder => {
  const url = `http://localhost:3001/api/v1/orders/:order_id`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Could not remove order.');
  }
};
