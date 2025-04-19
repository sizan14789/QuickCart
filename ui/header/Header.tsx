import Image from "next/image"
import {assets} from "@/assets/assets"

export const Header = ()=>{
  return(
    <header className="">
      <div>
        <figure>
          <Image src={assets.logo} width={112} height={30} alt="QuickCartLogo"/>
        </figure>
        <ul>
          
        </ul>
      </div>
    </header>
  )
}