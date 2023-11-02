import noImage from "../assets/no-image-placeholder.webp";

function cropImage(url: string) {
  if (!url) return noImage;

  const target = "media/";
  if (url.indexOf(target) < 0) return url;

  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default cropImage;
