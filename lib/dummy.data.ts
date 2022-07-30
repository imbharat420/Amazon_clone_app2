export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  brand: string;
  productImage: string[];
  star: number;
  no_of_reviews: number;
  About: string[];
}

export const dummy_HotDeals: Product[] = [
  {
    id: 1,
    name: "Air pods pro",
    price: 209,
    description: "New Apple AirPods Pro with MagSafe Charging Case",
    image: "http://assets.stickpng.com/images/60b79e8771a1fd000411f6be.png",
    category: "Category 1",
    brand: "Apple",
    productImage: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634652000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634643000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634662000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV4_GEO_US?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1604112691000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV5_GEO_US?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634793000",
    ],
    star: 4.9,
    no_of_reviews: 10000,
    About: [
      "Active noise cancellation for immersive sound",
      "Transparency mode for hearing and connecting with the world around you",
      "Three sizes of soft, tapered silicone tips for a customisable fit",
      "The wireless charging case delivers more than 24 hours of battery life",
      "Easy setup for all Smarphones and Apple devices",
    ],
  },
  {
    id: 2,
    name: "I phone 12 pro ",
    price: 700,
    description: "This is product 1",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144418",
    category: "Category 1",
    brand: "Apple",
    productImage: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-model-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1654897043425",
      "https://m.media-amazon.com/images/I/81woDMsj8DL._SX679_.jpg",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-model-unselect-gallery-2-202207_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1654890228745",
      "https://m.media-amazon.com/images/I/81DzfVDR-lL._SX679_.jpg",
    ],
    About: [
      "17 cm (6.7-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel",
      "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
      "Pro camera system with new 12MP Telephoto, Wide and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording",
      "ProMotion accelerometers and gyroscopes for a more precise, more accurate motion",
    ],
    star: 4.5,
    no_of_reviews: 4200,
  },
  {
    id: 3,
    name: "Macbook pro",
    price: 1000,
    description: "This is product 1",
    image:
      "https://cdn.sanity.io/images/7azvzymu/production/935aef3ebbca1d58913421cbd2fa0cd4bc9cbf61-500x500.png",
    category: "Category 1",
    brand: "Apple",
    productImage: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634652000",
    ],
    star: 4.8,
    no_of_reviews: 5300,
    About: [
      "17 cm (6.7-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel",
      "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
      "Pro camera system with new 12MP Telephoto, Wide and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording",
      "ProMotion accelerometers and gyroscopes for a more precise, more accurate motion",
    ],
  },
  {
    id: 4,
    name: "Jabra 45",
    price: 300,
    description: "This is product 1",
    image:
      "https://www.jabra.in/-/media/Images/Products/Jabra-Elite-45h/Product/elite_45e_copperblack_1.png?la=en-IN&hash=FD23FBD342318936C564A1BFF5953730FCEF60E3",
    category: "Category 1",
    brand: "Jabra",
    productImage: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634652000",
    ],
    star: 4.5,
    no_of_reviews: 130,
    About: [
      "17 cm (6.7-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel",
      "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
      "Pro camera system with new 12MP Telephoto, Wide and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording",
      "ProMotion accelerometers and gyroscopes for a more precise, more accurate motion",
    ],
  },
];

export const dummy_category = [
  {
    name: "Computer & Laptop",
    Icon: "laptop",
  },
  {
    name: "Consoles & Games",
    Icon: "game-controller",
  },
  {
    name: "Heath",
    Icon: "leaf",
  },
];

export const bannerImages = [
  "https://wallpaperaccess.com/full/1170322.jpg",
  "https://cdn.mos.cms.futurecdn.net/h5NgQEGTcUwAyBzyNJwPue.jpg",
  "https://images.unsplash.com/photo-1617331647771-3df3a9ca3e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1588796460718-f457ad1e1a1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];
