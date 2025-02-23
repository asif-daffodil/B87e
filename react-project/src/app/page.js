export const metadata = {
  title: "Home",
  description: "This is the home page",
}

import Hero from "@/components/home/Hero";
import ProductList from "@/components/ProductList";

const page = () => {
  return (
    <>
      <Hero />
      <ProductList />
    </>
  );
}

export default page;
