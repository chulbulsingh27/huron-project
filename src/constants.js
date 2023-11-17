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

import sonyImage from '../src/components/assets/sony.png'
import asusImage from '../src/components/assets/asus.png'
import googleImage from '../src/components/assets/google.png'
import htc1Image from '../src/components/assets/htc1.png'
import htc2Image from '../src/components/assets/htc2.png'
import huaweiImage from '../src/components/assets/huawei.png'
import iphone15 from '../src/components/assets/iphone15.png'
import pixel2Image from '../src/components/assets/pixel2.png'
import samsungImage from '../src/components/assets/samsung.png'
import samsung3Image from '../src/components/assets/samsung.png'
import samsung4Image from '../src/components/assets/samsung4.png'
export const getProducts = async () => {
  const response = await fetch('http://localhost:5046/api/Products');
  const data = await response.json();
  //const images = Array.from({ length: 20 }, (_, i) => `src/components/Footer/image${i + 1}.jpg`);
  const images = [
    'https://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-Background.png',
    sonyImage,
    asusImage,
    googleImage,
    htc1Image,
    htc2Image ,
    huaweiImage,
    iphone15 ,
    pixel2Image,
    samsungImage ,
    samsung3Image ,
    samsung4Image
  ]
  return data.map((item,index )=> ({
    id: item.productId,
    name: item.modelName,
    price: item.price,
    image: images[index % images.length], 
    discount: item.offersAndDiscounts,
    fastDelivery: item.deliveryDate,
    ratings: item.customerCareSupport, // Modify as per your requirement
  }));
};


//src\components\Footer\image1.png




// export const getProducts = async () => {
//   const response = await fetch('http://localhost:5046/api/Products');
//   const data = await response.json();

//   // Array of image paths
//   const images = [
//     'path/to/your/image1.jpg',
//     'path/to/your/image2.jpg',
//     'path/to/your/image3.jpg',
//     // ... add paths for all 20 images
//   ];

//   return data.map((item, index) => ({
//     id: item.productId,
//     name: item.modelName,
//     price: item.price,
//     image: images[index % images.length], // Use the image path from the array
//     discount: item.offersAndDiscounts,
//     fastDelivery: item.deliveryDate,
//     ratings: item.customerCareSupport, // Modify as per your requirement
//   }));
// };

