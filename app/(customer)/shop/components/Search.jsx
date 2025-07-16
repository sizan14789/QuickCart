"use client"

import { CiSearch } from "react-icons/ci";

const Search = ({handleSearch}) => {

  const handleSearchFormSubmit = async (e)=>{
    e.preventDefault();
    const search = e.target[0].value;
    handleSearch(search);
  }

  return (
    <form className={`bg-white duration-150 flex`} 
    onSubmit={handleSearchFormSubmit}
    >
      <input type="search" placeholder="search.." name="search" className="py-2 px-6 rounded-l-md border-1 border-r-transparent border-gray-300 outline-0 focus:border-orange-600 focus:border-r-transparent peer" />

      <button className="cursor-pointer px-4 bg-amber-600 text-white border-1 rounded-r-md hover:brightness-95 border-gray-300 peer-focus:border-orange-600" >
        <CiSearch className="text-xl font-extrabold "/>
      </button>
    </form>
  )
}

export default Search;
