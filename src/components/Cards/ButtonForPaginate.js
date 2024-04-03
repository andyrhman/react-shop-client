// import React, { useState } from 'react'
// import axios from 'axios';

// const ButtonForPaginate = () => {
//     const [page, setPage] = useState(1);
//     const perPage = 9;
//     const loadMore = async () => {
//         if (page < lastPage) {
//             try {
//                 const { data: productsData } = await axios.get('products');
//                 const newProducts = productsData.slice(page * perPage, (page + 1) * perPage);
//                 setProducts([...products, ...newProducts], lastPage);
//                 setPage(page + 1);
//             } catch (error) {
//                 if (error.response && [401, 403, 404].includes(error.response.status)) {
//                     console.log(error)
//                 }
//             }
//         }
//     }
//     return (
//         <>
//             {page < lastPage &&
//                 <div className="flex flex-col justify-center pb-14">
//                     <div className="w-full px-4 flex justify-center items-center">
//                         <div className='relative'>
//                             <button className='btn btn-primary btn-sm' onClick={loadMore}>Load More</button>
//                         </div>
//                     </div>
//                 </div>
//             }
//         </>

//     )
// }

// export default ButtonForPaginate;