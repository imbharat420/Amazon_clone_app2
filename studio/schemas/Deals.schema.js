export const DealsSchema = {
  name: "deals",
  title: "Deals",
  type: "document",

  fields: [
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "product",
          },
        },
      ],
    },
    {
      name: "Deal_day",
      title: "Deal day",
      type: "datetime",
    },
  ],
};
