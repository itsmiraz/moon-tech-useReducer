import React from "react";
import ProductCard from "../components/ProductCard";
import LoadingAnimation from "../Context/LoadingAnimation";
import { useProducts } from "../Context/PrductProvider";

const Home = () => {

  const { state: { products, loading, error } } = useProducts()
 
  let displayContent
  if (loading) {
    displayContent= <LoadingAnimation></LoadingAnimation>
  }
  if (error) {
    displayContent = <p>Something Went Wrong</p>
  }
  if (!loading && !error && products.length === 0) {
    displayContent = <p>Nothing To Show</p>
  }
  if (!loading && !error && products.length !== 0) {

    displayContent = products.map((product,i) => <ProductCard key={i}  product={product}></ProductCard>)
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>


      {
        displayContent
      }



    </div>
  );
};

export default Home;
