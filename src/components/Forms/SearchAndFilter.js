import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchAndFilter = ({
  checkedPriceAsc,
  checkedPriceDesc,
  handlePriceChecked,
  checkedDateNewest,
  checkedDateOldest,
  handleDateChecked,
  getCategories,
  handleCategoryChange,
  resetFilters
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      router(`/products?search=${searchTerm}`);
    }
  };
  return (
    <>
      <div className="m-10 w-screen max-w-screen-xl mx-auto">
        <div className="flex flex-col">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
            <form className="">
              <div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
                <svg
                  className="absolute left-2 block h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" className=""></circle>
                  <line
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                    className=""
                  ></line>
                </svg>
                <input
                  type="name"
                  name="search"
                  onKeyDown={handleSearch}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder="Search by name, description, etc"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-stone-600"
                  >
                    Category
                  </label>
                  <div className="space-y-2 px-2 py-5 grid grid-cols-2">
                    {getCategories.map((c) => (
                      <div className="flex items-center" key={c.id}>
                        <input
                          id={c.name}
                          type="checkbox"
                          value={c.name}
                          onChange={handleCategoryChange}
                          className="h-5 w-5 rounded border-gray-300"
                        />

                        <label
                          htmlFor={c.name}
                          className="ml-3 text-sm font-medium"
                        >
                          {" "}
                          {c.name}{" "}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="manufacturer"
                    className="text-sm font-medium text-stone-600"
                  >
                    Price
                  </label>

                  <div className="space-y-2 px-2 py-5 grid grid-cols-2">
                    <div className="flex items-center">
                      <input
                        id="Highest"
                        type="checkbox"
                        value="asc"
                        checked={checkedPriceAsc}
                        onChange={handlePriceChecked}
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <label
                        htmlFor="Highest"
                        className="ml-3 text-sm font-medium"
                      >
                        {" "}
                        Highest{" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="Lowest"
                        type="checkbox"
                        value="desc"
                        checked={checkedPriceDesc}
                        onChange={handlePriceChecked}
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <label
                        htmlFor="Lowest"
                        className="ml-3 text-sm font-medium"
                      >
                        {" "}
                        Lowest{" "}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="date"
                    className="text-sm font-medium text-stone-600"
                  >
                    Date
                  </label>
                  <div className="space-y-2 px-2 py-5 grid grid-cols-2">
                    <div className="flex items-center">
                      <input
                        id="Newest"
                        type="checkbox"
                        value="newest"
                        checked={checkedDateNewest}
                        onChange={handleDateChecked}
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <label
                        htmlFor="Newest"
                        className="ml-3 text-sm font-medium"
                      >
                        {" "}
                        Newest{" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="Oldest"
                        type="checkbox"
                        value="oldest"
                        checked={checkedDateOldest}
                        onChange={handleDateChecked}
                        className="h-5 w-5 rounded border-gray-300"
                      />

                      <label
                        htmlFor="Oldest"
                        className="ml-3 text-sm font-medium"
                      >
                        {" "}
                        Oldest{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                <button
                  className="rounded-lg bg-red-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
                  onClick={resetFilters}
                >
                  Reset
                </button>
                <button
                  className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchAndFilter;
