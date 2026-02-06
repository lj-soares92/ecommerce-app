import { useState } from 'react';

const PRODUCTS_PER_PAGE = 6;

const MOCK_PRODUCTS = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  productName: 'productName',
  numberUnits: 'numberUnits',
  price: 'price',
}));

function ProductCarousel() {
  const totalPages = Math.ceil(MOCK_PRODUCTS.length / PRODUCTS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);

  const start = currentPage * PRODUCTS_PER_PAGE;
  const visibleProducts = MOCK_PRODUCTS.slice(start, start + PRODUCTS_PER_PAGE);

  const goPrev = () =>
    setCurrentPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const goNext = () =>
    setCurrentPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  return (
    <section className="bg-white py-6">
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header: title left, dots right */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">
            Inspired by the last seen
          </h2>
          <div className="flex gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentPage(i)}
                className="h-2 w-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-amber-500"
                style={{
                  backgroundColor: i === currentPage ? '#1f2937' : '#e5e7eb',
                }}
                aria-label={`Page ${i + 1}`}
                aria-current={i === currentPage ? 'true' : undefined}
              />
            ))}
          </div>
        </div>

        {/* Product grid: 6 cards */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {visibleProducts.map((product) => (
              <article
                key={product.id}
                className="flex flex-col rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
              >
                <div className="mb-2 flex aspect-square items-center justify-center rounded-md bg-gray-100">
                  <span className="text-xs text-gray-400">Product</span>
                </div>
                <p className="mb-0.5 truncate text-sm text-gray-800">
                  {product.productName}
                </p>
                <p className="mb-1 text-xs text-gray-600">
                  {product.numberUnits}
                </p>
                <p className="font-semibold text-gray-900">{product.price}</p>
              </article>
            ))}
          </div>

          {/* Right arrow */}
          <button
            type="button"
            onClick={goNext}
            className="absolute -right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-gray-100 shadow-md hover:bg-gray-200"
            aria-label="Next page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-gray-700"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Left arrow */}
          <button
            type="button"
            onClick={goPrev}
            className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-gray-100 shadow-md hover:bg-gray-200"
            aria-label="Previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-gray-700"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductCarousel;
