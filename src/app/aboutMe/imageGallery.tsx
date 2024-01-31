import Image from "next/image";
import style from "./imageGallery.module.css";

export default function ImageGallery() {
  const imageList = [
    { src: "/Bella.jpg", alt: "Bella" },
    { src: "/Books.jpg", alt: "My Books" },
    { src: "/Chicago.jpg", alt: "Chicago" },
    { src: "/Dallas Sky.jpg", alt: "Dallas Sky" },
    { src: "/Grad Day.jpg", alt: "Grad Day" },
    { src: "/Plano.jpg", alt: "Plano" },
    { src: "/NYC.jpg", alt: "NYC" },
    { src: "/NY+Me.jpg", alt: "NY+Me" },
    { src: "/POTO.jpg", alt: "Phanton of the Opera" },
    { src: "/Bella Again.jpg", alt: "Bella Again" },
    { src: "/Sky Full Of Stars.jpg", alt: "Sky Full Of Stars" },
    { src: "/Lights.jpg", alt: "Lights" },
  ];
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {imageList.map((image, index) => (
        <ImageCard key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

const ImageCard = ({ src, alt }) => {
  return (
    <div className={style.imageCard}>
      <Image width={150} height={200} src={src} alt={alt} />
    </div>
  );
};
