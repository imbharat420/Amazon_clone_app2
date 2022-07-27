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
    image:
      "https://o.remove.bg/downloads/4e9ec3f2-f83f-4bc6-911e-67dd1358028b/image-removebg-preview.png",
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
      "https://o.remove.bg/downloads/7de4a307-646a-49dc-9120-6a971b29efad/image-removebg-preview.png",
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
