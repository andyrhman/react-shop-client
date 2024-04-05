import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CariSubmit = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
  const [sortByDate, setSortByDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();

    if (searchTerm.trim()) {
      searchParams.append("search", searchTerm);
    }
    if (category) {
      searchParams.append("filterByCategory", category);
    }
    if (sortByPrice) {
      searchParams.append("sortByPrice", sortByPrice);
    }
    if (sortByDate) {
      searchParams.append("sortByDate", sortByDate);
    }

    navigate(`/pagecarisubmit?${searchParams.toString()}`);
    setSearchTerm("");
    setCategory("");
    setSortByPrice("");
    setSortByDate("");
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Hat">Hat</option>
          <option value="Shoes">Shoes</option>
          <option value="Shirt">Shirt</option>
          <option value="Pants">Pants</option>
        </select>
        <select
          value={sortByPrice}
          onChange={(e) => setSortByPrice(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select
          value={sortByDate}
          onChange={(e) => setSortByDate(e.target.value)}
        >
          <option value="">Sort by Date</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default CariSubmit;
