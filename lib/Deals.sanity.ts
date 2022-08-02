import { ProductProps } from "./dummy.data";
import { client } from "./Sanity.client";

export const fetchCurrentDeals = async () => {
  const query = `
   *[_type =='deals']{
 
  Deal_day,
  
  products[]->{
    name,
    price,
    description,
   "image": image.asset->url,
    _id,
     "productImage":product_Images[].asset->url,
     features,
         'star':ratings,
    'no_of_reviews':noOfRatings
  }
}`;

  const result: {
    products: ProductProps;
    Deal_date: string;
  } = await client.fetch(query);
  return result;
};
