'use client';
import Image from "next/image";
import styles from "./page.module.css";

export default function page({ images }) {
  if (!images || images.length === 0) {
    return <p>No placement images available for this course.</p>;
  }

  // Duplicate images multiple times for smooth infinite scrolling beyond viewport width
  const repeatedImages = images.concat(images).concat(images).concat(images);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselImages}>
        {repeatedImages.map((student, index) => (
          <div key={index} className={styles.carouselImage}>
            <Image
              src={student.image}
              alt={`Student ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 250px"
              style={{ objectFit: "cover", borderRadius: "15px" }}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
