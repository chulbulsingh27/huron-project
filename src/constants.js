//import faker from "faker";
// export const products = [...Array(20)].map(() => ({
//   id: faker.datatype.uuid(),
//   name: faker.commerce.productName(),
//   price: faker.commerce.price(),
//   image: faker.random.image(),
//   inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
//   fastDelivery: faker.datatype.boolean(),
//   ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
// }));


export const getProducts = async () => {
  const response = await fetch('http://localhost:5046/api/Products');
  const data = await response.json();
  return data.map(item => ({
    id: item.productId,
    name: item.modelName,
    price: item.price,
    image: '', // Add image property if available in your data
    discount: item.offersAndDiscounts,
    fastDelivery: item.deliveryDate,
    ratings: item.customerCareSupport, // Modify as per your requirement
  }));
};
