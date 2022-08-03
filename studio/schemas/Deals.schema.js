export const Deals = {
  name: "deals",
  title: "Deals",
  type: "document",
  fields: [
    {
      name: "item",
      title: "Item",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "product",
            },
          ],
        },
      ],
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "deal_banner",
      title: "Deal Banner",
      type: "image",
    },
  ],
};
