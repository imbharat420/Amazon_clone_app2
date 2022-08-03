import { client } from "./Sanity.client";
export const fetchPostByCategory = async (category: string) => {
  console.log("category", category);
  const query = `*[_type == "product" && category->name=="${category}"]{
   name,
    price,
    description,
   "image": image.asset->url,
    _id,
     "productImage":product_Images[].asset->url,
     features,
         'star':ratings,
    'no_of_reviews':noOfRatings,

}`;
  const res = await client.fetch(query).then((res) => res);
  return await res;
};
