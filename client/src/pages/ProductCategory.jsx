import React from 'react'
import { useAppContext } from '../context/Appcontext'
import { useParams } from 'react-router-dom';
import { categories } from '../assets/assets';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const ProductCategory = () => {
    const {products} = useAppContext();
    const {category} = useParams();

    const searchCategory = categories.find((item)=> item.path.toLowerCase()=== category)

    const filteredProducts = products.filter((product)=>product.category.toLowerCase()=== category)

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-1 mt-16 flex flex-col'>
        {searchCategory && (
          <div className='flex flex-col items-end w-max'>
              <p className='text-2xl font-medium' >{searchCategory.text.toUpperCase()}</p>
              <div className='w-16 h-0.5 bg-green-200 rounded-full'>

              </div>
          </div>
        )}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
          {filteredProducts.filter((product)=>product.inStock).map((product, index)=>(
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductCategory
