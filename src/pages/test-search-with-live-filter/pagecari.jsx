import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "src/redux/actions/setProductsAction";
import { useSearchParams } from "react-router-dom";
import Layout from "src/components/Layout";
import Wrapper from "src/components/Wrapper";
import axios from "axios";

const PageCari = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checkedPriceAsc, setCheckedPriceAsc] = useState(false);
  const [checkedPriceDesc, setCheckedPriceDesc] = useState(false);
  const [checkedDateNewest, setCheckedDateNewest] = useState(false);
  const [checkedDateOldest, setCheckedDateOldest] = useState(false);

  useEffect(() => {
    const searchTerm = searchParams.get('search');
    const queryParams = new URLSearchParams();

    if (searchTerm) {
      queryParams.append('search', searchTerm);
    }
    if (categories.length > 0) {
      queryParams.append('filterByCategory', categories.join(','));
    }
    if (checkedPriceAsc) {
      queryParams.append('sortByPrice', 'asc');
    } else if (checkedPriceDesc) {
      queryParams.append('sortByPrice', 'desc');
    }
    if (checkedDateNewest) {
      queryParams.append('sortByDate', 'newest');
    } else if (checkedDateOldest) {
      queryParams.append('sortByDate', 'oldest');
    }

    const searchParamsString = queryParams.toString();
    setSearchParams(searchParamsString, { replace: true });

    fetch(`http://localhost:8000/api/products?${searchParamsString}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching search results:', error));
  }, [searchParams, categories, checkedPriceAsc, checkedPriceDesc, checkedDateNewest, checkedDateOldest]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  const handlePriceChecked = (e) => {
    const { checked, value } = e.target;
    const queryParams = new URLSearchParams(searchParams.toString());
  
    // Remove any existing sortByPrice or sortByDate parameters
    queryParams.delete('sortByPrice');
    queryParams.delete('sortByDate');
  
    if (checked) {
      queryParams.set('sortByPrice', value);
      setCheckedPriceAsc(value === 'asc');
      setCheckedPriceDesc(value === 'desc');
    } else {
      setCheckedPriceAsc(false);
      setCheckedPriceDesc(false);
    }
  
    setSearchParams(queryParams.toString(), { replace: true });
  };
  
  const handleDateChecked = (e) => {
    const { checked, value } = e.target;
    const queryParams = new URLSearchParams(searchParams.toString());
  
    // Remove any existing sortByPrice or sortByDate parameters
    queryParams.delete('sortByPrice');
    queryParams.delete('sortByDate');
  
    if (checked) {
      queryParams.set('sortByDate', value);
      setCheckedDateNewest(value === 'newest');
      setCheckedDateOldest(value === 'oldest');
    } else {
      setCheckedDateNewest(false);
      setCheckedDateOldest(false);
    }
  
    setSearchParams(queryParams.toString(), { replace: true });
  };
  return (
    <>
      <Layout>
        <Wrapper>
          <section className="bg-white text-gray-700">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-2 lg:grid-cols-4 lg:gap-4">
                        <div>
          <h3>Categories</h3>
          <div>
            <input type="checkbox" className="checkbox checkbox-sm" value="Hat" checked={categories.includes('Hat')} onChange={handleCategoryChange} />
            <span className="pl-2">Hat</span>
          </div>
          <div>
            <input type="checkbox" className="checkbox checkbox-sm" value="Shoes" checked={categories.includes('Shoes')} onChange={handleCategoryChange} />
            <span className="pl-2">Shoes</span>
          </div>
          <div>
            <input type="checkbox" className="checkbox checkbox-sm" value="Shirt" checked={categories.includes('Shirt')} onChange={handleCategoryChange} />
            <span className="pl-2">Shirt</span>
          </div>
          <div>
            <input type="checkbox" className="checkbox checkbox-sm" value="Pants" checked={categories.includes('Pants')} onChange={handleCategoryChange} />
            <span className="pl-2">Pants</span>
          </div>
        </div>
        <div>
          <h3>Sort by Price</h3>
          <div>
            <input type="checkbox" className="checkbox checkbox-sm" value="asc" checked={checkedPriceAsc} onChange={handlePriceChecked} />
            <span className="pl-2">Ascending</span>
          </div>
          <div>
            <input type="checkbox" className="checkbox checkbox-sm" value="desc" checked={checkedPriceDesc} onChange={handlePriceChecked} />
            <span className="pl-2">Descending</span>
          </div>
        </div>
        <div>
          <h3>Sort by Date</h3>
          <div>
            <input type="checkbox" className="checkbox checkbox-sm" value="newest" checked={checkedDateNewest} onChange={handleDateChecked} />
            <span className="pl-2">Newest</span>
          </div>
          <div>
            <input type="checkbox" className="checkbox checkbox-sm" value="oldest" checked={checkedDateOldest} onChange={handleDateChecked} />
            <span className="pl-2">Oldest</span>
          </div>
        </div>
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

export default PageCari;
