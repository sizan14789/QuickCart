"use client";

import { ChangeEventHandler } from "react";

interface filterInterface {
  minMax: number[];
  handleRangeChange: ChangeEventHandler;
  handleSorting: ChangeEventHandler;
}

const Filter = ({
  minMax,
  handleRangeChange,
  handleSorting,
}: filterInterface) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <div className="flex-1 flex gap-8 items-center">
          <input
            type="number"
            placeholder="min"
            className="w-20 sm:w-28 outline-0 px-4 py-2 bg-white rounded-md border-1 border-gray-300 focus:border-orange-600 focus:brightness-90 "
            name="0"
            value={minMax[0]}
            onFocus={(e) => e.target.select()}
            onChange={handleRangeChange}
          />
          <p>to</p>
          <input
            type="number"
            placeholder="max"
            className="w-20 sm:w-28 outline-0 px-4 py-2 bg-white rounded-md border-1 border-gray-300 focus:border-orange-600 focus:brightness-90 "
            name="1"
            value={minMax[1]}
            onFocus={(e) => e.target.select()}
            onChange={handleRangeChange}
          />
        </div>

        <div className="flex-1 flex">
          <select
            className="border-1 border-gray-300 focus:border-orange-600 px-4 text-sm py-3 rounded-md md:ml-auto "
            onChange={(e) => handleSorting(e)}
          >
            <option value="none">Most relevant</option>
            <option value="asc">Low to high</option>
            <option value="des">High to low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
