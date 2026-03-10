import styles from "./banner.module.css"
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      
      <Image src={'/img/banner.jpg'} 
      alt='banner' 
      fill={true}
      priority
      style={{ objectFit: "cover" }}/>

      <div className={styles.bannerText}>
        <h1>where every event finds its venue</h1>
        <h3>
          Discover the perfect venue for weddings, parties,
          meetings and special celebrations.
        </h3>
      </div>

    </div>
  )
}