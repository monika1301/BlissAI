import React from "react";
import { Search } from "lucide-react";




function SearchSection({ onSearchInput }: any) {
  return (
    <div
      className="p-10  bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 
    flex flex-col justify-center items-center text-white"
    >
      <h2 className=" text-3xl font-bold">Browse all Templates</h2>
      <p>What would you like to create?</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[40%]">
          <Search className="text-purple-500" />
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent w-full outline-none text-black"  />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
