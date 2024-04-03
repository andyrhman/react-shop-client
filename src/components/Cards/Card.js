// * Infinite scroll code reference
// ? https://claude.ai/chat/13fbce39-78af-4997-bf6c-70329fed9a51

import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";
import InfiniteScroll from "react-infinite-scroll-component";

const Card = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const perPage = 10;
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("products");
      setAllProducts(data);
      setProducts(data.slice(0, perPage));
      setHasMore(data.length > perPage);
    } catch (error) {
      if (error.response && [401, 403, 404].includes(error.response.status)) {
        console.log(error);
      }
    }
  };

  const loadMoreProducts = () => {
    const startIndex = page * perPage;
    const endIndex = startIndex + perPage;
    const nextProducts = allProducts.slice(startIndex, endIndex);
    setProducts((prevProducts) => [...prevProducts, ...nextProducts]);
    setPage((prevPage) => prevPage + 1);
    setHasMore(allProducts.length > endIndex);
  };
  return (
    <section className="bg-white text-gray-700">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <InfiniteScroll
          dataLength={products.length}
          next={loadMoreProducts}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-2 lg:grid-cols-4 lg:gap-4">
            {products?.map((p, index) => (
              <article className="relative" key={index + 1}>
                <div className="aspect-square overflow-hidden">
                  <img
                    className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
                    src={p.image}
                    alt={p.slug}
                  />
                </div>
                {/* Loop this */}
                <div className="py-4 flex items-start justify-between">
                  <div className="">
                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                      <a
                        href={`/products/${p.slug}`}
                        title=""
                        className="cursor-pointer"
                      >
                        {p.title}
                        <span className="absolute" aria-hidden="true"></span>
                      </a>
                    </h3>
                    <div className="mt-2 flex items-center">
                      <StarRatings
                        rating={p.averageRating}
                        starDimension="18px"
                        starSpacing="2px"
                        starRatedColor="gold"
                        starEmptyColor="gray"
                        numberOfStars={5}
                        name="rating"
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-normal sm:text-sm md:text-base">
                      Rp{new Intl.NumberFormat("id-ID").format(p.price)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default Card;
