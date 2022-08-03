// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import User from "./User.schema";
import Product from "./Product.schema";
import { CategorySchema } from "./category.schema";
import { brandSchema } from "./brand.schema";
import { Deals } from "./Deals.schema";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    CategorySchema,
    Product,
    User,
    brandSchema,
    Deals,
  ]),
});
