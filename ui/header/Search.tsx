"use client"

import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

const Search = ({on}:{on:boolean}) => {
  const router = useRouter()

  const handleSearchFormSubmit = async (e:any)=>{
    e.preventDefault();
    if(e.target[0].value==="") return;
    router.push(`/shop?search=${e.target[0].value}`)
    window.location.reload();
    e.target[0].value="";
  }

  return (
    <form className={`absolute top-[2.75rem] right-0 sm:right-[6rem] z-50 bg-white duration-150 ${on? "block" : "hidden" } flex`} 
    onSubmit={handleSearchFormSubmit}
    >

      <input type="search" placeholder="search.." name="search" className="py-3 px-6 rounded-l-md border-1 border-r-transparent border-gray-300 outline-0 focus:border-orange-600 focus:border-r-transparent peer" />

      <button className="cursor-pointer px-4 bg-amber-600 text-white border-1 rounded-r-md hover:brightness-95 border-gray-300 peer-focus:border-orange-600" >
        <CiSearch className="text-xl font-extrabold "/>
      </button>
    </form>
  )
}

export default Search