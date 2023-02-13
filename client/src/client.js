import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "xg109h56",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sktgOzbRI7j5UyBFBHJRFZyaOsuT7nAs7Xs7RRcPZLjdjj4ThbaTv1oFzqeoAAKVEXN1KrvHJw7SwEmh8mhzP8v4vR75fkzztwI3opLsmut02e1aAqPw3qtZmdWG9pW2m3DwUo46CLzmm86RZFqEDQ20UlgvlWHHaRJXUM0KF6ZqOgauMFx7",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
