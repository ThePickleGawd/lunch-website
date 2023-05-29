import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import Image from "next/image";

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        Work in progress...
        <div className="mt-16">
          <Image
            src={"/img/product/Case3D.jpg"}
            alt="lunctrak image"
            width={500}
            height={500}
          />
          <Image
            src={"/img/product/SilverTag.jpg"}
            alt="lunctrak image"
            width={500}
            height={500}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
