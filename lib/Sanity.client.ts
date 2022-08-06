import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "rqu7qvo4",
  dataset: "production",
  apiVersion: "v1",
  useCdn: false,
  token: process.env.APP_SANITY_CLIENT,
  // token: "your token here",
});
