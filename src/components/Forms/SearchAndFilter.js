import React from "react";

const SearchAndFilter = () => {
  return (
    <>
      <div className="m-10 w-screen max-w-screen-md mx-auto">
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" class=""></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
                </svg>
                <input
                  type="name"
                  name="search"
                  class="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder="Search by name, type, manufacturer, etc"
                />
              </div>

              <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="flex flex-col">
                  <label for="name" class="text-sm font-medium text-stone-600">
                    Category
                  </label>
                  <div class="space-y-2 px-2 py-5">
                    <div class="flex items-center">
                      <input
                        id="Used"
                        type="checkbox"
                        name="type[Used]"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <label for="Used" class="ml-3 text-sm font-medium">
                        {" "}
                        Used{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="Branded"
                        type="checkbox"
                        name="type[Branded]"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <label for="Branded" class="ml-3 text-sm font-medium">
                        {" "}
                        Branded{" "}
                      </label>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col">
                  <label
                    for="manufacturer"
                    class="text-sm font-medium text-stone-600"
                  >
                    Price
                  </label>

                  <div class="space-y-2 px-2 py-5">
                    <div class="flex items-center">
                      <input
                        id="Highest"
                        type="checkbox"
                        name="type[Highest]"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <label for="Highest" class="ml-3 text-sm font-medium">
                        {" "}
                        Highest{" "}
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="Lowest"
                        type="checkbox"
                        name="type[Lowest]"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <label for="Lowest" class="ml-3 text-sm font-medium">
                        {" "}
                        Lowest{" "}
                      </label>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col">
                  <label for="date" class="text-sm font-medium text-stone-600">
                    Date
                  </label>
                  <div class="space-y-2 px-2 py-5">
                    <div class="flex items-center">
                      <input
                        id="Newest"
                        type="checkbox"
                        name="type[Newest]"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <label for="Newest" class="ml-3 text-sm font-medium">
                        {" "}
                        Newest{" "}
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="Oldest"
                        type="checkbox"
                        name="type[Oldest]"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <label for="Oldest" class="ml-3 text-sm font-medium">
                        {" "}
                        Oldest{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                <button class="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">
                  Reset
                </button>
                <button class="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
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
