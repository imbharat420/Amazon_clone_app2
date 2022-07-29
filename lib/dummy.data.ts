export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  brand: string;
}

export const dummy_HotDeals: Product[] = [
  {
    id: 1,
    name: "Air pods pro",
    price: 209,
    description: "This is product 1",
    image: "http://assets.stickpng.com/images/60b79e8771a1fd000411f6be.png",
    category: "Category 1",
    brand: "Apple",
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
