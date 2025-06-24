// src/images/getImage.js

const CDN_BASE = "https://starwars-db-images.netlify.app";

export function getImage(entity, id) {
  return `${CDN_BASE}/${entity}/${id}.webp`;
} 