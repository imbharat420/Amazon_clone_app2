import { AddIcon } from "@sanity/icons";

export const CategorySchema = {
  name: "category",
  title: "Category",
  type: "document",
  icon: AddIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
  ],
};
