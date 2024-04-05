import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "src/redux/actions/setProductsAction";
import { useSearchParams } from "react-router-dom";
import Layout from "src/components/Layout";
import Wrapper from "src/components/Wrapper";
import axios from "axios";

const PageCariSubmit = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const searchTerm = searchParams.get("search");
    const category = searchParams.get("filterByCategory");
    const sortByPrice = searchParams.get("sortByPrice");
    const sortByDate = searchParams.get("sortByDate");

    const queryParams = new URLSearchParams();

    if (searchTerm) {
      queryParams.append("search", searchTerm);
    }
    if (category) {
      queryParams.append("filterByCategory", category);
    }
    if (sortByPrice) {
      queryParams.append("sortByPrice", sortByPrice);
    }
    if (sortByDate) {
      queryParams.append("sortByDate", sortByDate);
    }

    fetch(`http://localhost:8000/api/products?${queryParams.toString()}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching search results:", error));
  }, [searchParams]);

  return (
    <>
      <Layout>
        <Wrapper>
          <section className="bg-white text-gray-700">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-2 lg:grid-cols-4 lg:gap-4">
                {products.map((p, index) => (
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
                            <span
                              className="absolute"
                              aria-hidden="true"
                            ></span>
                          </a>
                        </h3>
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
            </div>
          </section>
        </Wrapper>
      </Layout>
    </>
  );
};

export default PageCariSubmit;
