import React from 'react'

const Sidebar = ({
    checkedPriceAsc,
    checkedPriceDesc,
    handlePriceChecked,
    checkedDateNewest,
    checkedDateOldest,
    handleDateChecked,
    getCategories,
    handleCategoryChange,
}) => {
    return (
        <div className="mx-auto p-4 bg-white shadow md:h-full">
            {/* Price */}
            <div className="mb-4">
                <article className="prose">
                    <h4>Select Price</h4>
                </article>
                <div className='grid grid-cols-3 justify-between md:flex md:flex-col'>
                    <div className='join'>
                        <input
                            type="checkbox"
                            className="checkbox checkbox-sm"
                            value="asc"
                            checked={checkedPriceAsc}
                            onChange={handlePriceChecked}
                        />
                        <span className='pl-2'>Highest</span>
                    </div>
                    <div className='join'>
                        <input
                            type="checkbox"
                            className="checkbox checkbox-sm"
                            value="desc"
                            checked={checkedPriceDesc}
                            onChange={handlePriceChecked}
                        />
                        <span className='pl-2'>Lowest</span>
                    </div>
                </div>
            </div>

            {/* Date */}
            <div className="mb-4">
                <article className="prose">
                    <h4>Select Date</h4>
                </article>
                <div className='grid grid-cols-3 justify-between md:flex md:flex-col'>
                    <div className='join'>
                        <input
                            type="checkbox"
                            className="checkbox checkbox-sm"
                            value="newest"
                            checked={checkedDateNewest}
                            onChange={handleDateChecked}
                        />
                        <span className='pl-2'>Newest</span>
                    </div>
                    <div className='join'>
                        <input
                            type="checkbox"
                            className="checkbox checkbox-sm"
                            value="oldest"
                            checked={checkedDateOldest}
                            onChange={handleDateChecked}
                        />
                        <span className='pl-2'>Oldest</span>
                    </div>
                </div>
            </div>
            {/* Category */}
            <div className="mb-4">
                <article className="prose">
                    <h4>Select Category</h4>
                </article>
                <div className='grid grid-cols-3 justify-between md:flex md:flex-col'>
                    {getCategories.map((c) => (
                        <div className='join' key={c.id}>
                            <input type="checkbox" className="checkbox checkbox-sm" value={c.name} onChange={handleCategoryChange} />
                            <span className='pl-2'>{c.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar