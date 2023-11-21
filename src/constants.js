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

  const descriptions = [
    'The iPhone 14, powered by Apple’s A15 Bionic chip, features a 6.1-inch Super Retina XDR OLED display. It has a dual-camera system with a 12 MP main and ultra-wide camera, and a 12 MP front camera. Available in 128 GB, 256 GB, or 512 GB storage options, it runs on iOS 16, upgradable to iOS 17.1. The iPhone 14’s design includes a glass front and back with an aluminum frame, and it’s equipped with a 3279 mAh battery. It’s also IP68 dust/water resistant.',

    ' Released in 2019, this model is powered by Qualcomm’s Snapdragon 855 chipset and comes with 6GB of RAM. It features a 6.5-inch OLED display with a resolution of 1644 x 3840 pixels. The phone has a triple camera setup on the back with a 12 MP main camera, a 12 MP telephoto camera, and a 12 MP ultra-wide camera2.',

    'This model features a 6.78-inch display with a resolution of 2448x1080 pixels. It’s powered by the Snapdragon 8 Gen 2 processor and comes with 16GB of RAM. The phone has a 32MP front camera and a rear camera setup with 50MP, 13MP, and 8MP sensors. It offers 512GB of storage and a 6000mAh battery capacity1.',

    'Released in 2023, this model features a 6.2-inch display with a resolution of 1080x2400 pixels. It’s powered by the Google Tensor G3 processor and comes with 8GB of RAM. The phone has a dual camera setup with a 50MP main camera and a 12MP ultra-wide camera2.',

    'This model, released in 2020, is powered by a Qualcomm Snapdragon 765G processor and comes with 8GB of RAM. It features a 6.8-inch touchscreen display offering a resolution of 1080x2400 pixels1.',

    ' HTC’s latest mobile launch as of May 2023. The phone comes with a 6.70-inch touchscreen display with a resolution of 2400 pixels by 1080 pixels. It is powered by an octa-core Qualcomm Snapdragon 7 Gen 1 processor and it comes with 8GB of RAM. The phone packs 256GB of internal storage2.',

    'Huawei mobile phones are known for their advanced features and sleek designs. The Huawei Mate 50, for instance, boasts a 6.7 inch OLED display, IP68 water and dust resistance, a 4460 mAh battery, and 66 W wired HUAWEI Super Charge1. It also features a F1.4 ultra-large aperture and RYYB sensor1. Huawei phones are highly rated by users for their good processors, clarity, sound, and storage2. They come with a 1-year brand warranty for the mobile, and 6 months for the battery2.',

    'The iPhone 15 is a highly anticipated smartphone from Apple. It features a 6.1-inch OLED display with a 60Hz refresh rate1. The device is powered by the Apple A16 Bionic chipset with 6GB of RAM and offers up to 512GB of storage1. It has a dual 12 MP camera setup on the back and a 12 MP selfie camera on the front1. The battery capacity is speculated to be between 3500 mAh and 4200 mAh1. The iPhone 15 comes in four models: the 6.1-inch iPhone 15, 6.7-inch iPhone 15 Plus, 6.1-inch iPhone 15 Pro, and 6.7-inch iPhone 15 Pro Max2. The device is available in multiple colors3 and supports 5G network technology4.',

    'This model, released in 2016, is powered by a 1.6GHz quad-core Qualcomm Snapdragon 821 processor and comes with 4GB of RAM. It features a 5.00-inch touchscreen display offering a resolution of 1080x1920 pixels1.',
    // ...add more descriptions...
  ];
  //const images = Array.from({ length: 20 }, (_, i) => `src/components/Footer/image${i + 1}.jpg`);
  const images = [
    iphone15 ,
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
    description: descriptions[index % descriptions.length],
    discount: item.offersAndDiscounts,
    fastDelivery: item.deliveryDate,
    ratings: item.customerCareSupport, 
  }));
};





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

