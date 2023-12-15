import { createContext, useEffect, useState } from "react";

const Cart = createContext();

// children from --> main.jsx
const Context = ({ children }) => {
  const jsonData = `{
    "products": [
      {
        "id": 1,
        "name": "Airpods",
        "price": 250,
        "image": "/airpods.jpg",
        "inStock": false,
        "fastDelivery": true,
        "ratings": 4
      },
      {
        "id": 2,
        "name": "Airpods MAx",
        "price": 550,
        "image": "/airpods.jpg",
        "inStock": true,
        "fastDelivery": true,
        "ratings": 5
      },
      {
        "id": 3,
        "name": "Data 3",
        "price": 20,
        "image": "/airpods.jpg",
        "inStock": false,
        "fastDelivery": true,
        "ratings": 4
      },
      {
        "id": 4,
        "name": "Mixer",
        "price": 200,
        "image": "/airpods.jpg",
        "inStock": true,
        "fastDelivery": false,
        "ratings": 2
      },
      {
        "id": 5,
        "name": "iPhone",
        "price": 1000,
        "image": "/airpods.jpg",
        "inStock": true,
        "fastDelivery": false,
        "ratings": 2
      }
    ]
  }
  `;
  const parsedData = JSON.parse(jsonData);
  const products = parsedData.products;

  return <Cart.Provider value={{ products }}> {children} </Cart.Provider>;
};

export default Context;
