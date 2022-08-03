import { ClockIcon } from "@sanity/icons";

export default {
  name: "product",
  title: "Product",
  type: "document",
  icon: ClockIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "category",
            },
          ],
        },
      ],
    },
    {
      name: "brand",
      title: "Brand",
      type: "reference",
      to: [
        {
          type: "brand",
        },
      ],
    },

    {
      name: "ratings",
      title: "Ratings",
      type: "number",
      options: {
        min: 0,
        max: 5,
      },
    },
    {
      name: "noOfRatings",
      title: "No of Ratings",
      type: "number",
      options: {
        min: 0,
      },
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "product_Images",
      title: "Product_Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
