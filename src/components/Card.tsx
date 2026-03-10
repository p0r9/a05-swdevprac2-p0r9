import styles from "./card.module.css"
import Image from "next/image";
import InteractiveCard from './InteractiveCard'

export default function Card({venueName,imgSrc}:{venueName:string,imgSrc:string}) {
  return (
      <InteractiveCard contentName={venueName}>
      <div className="w-full h-[70%] relative rounded-t-lg overflow-hidden">
        <Image src={imgSrc}
          alt="venue image"
          fill
          className="object-cover rounded-t-lg"/>
      </div>

      <div className="w-full h-[30%] p-2 text-black">{venueName}</div>
     </InteractiveCard>
  );
}