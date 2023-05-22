import DetailsProduct from "@/assets/components/product/DetailsProduct";
import SlideProducts from "@/assets/components/product/SlideProducts";

const MainProduct = () => {
    return (
        <main className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
            <SlideProducts />
            <DetailsProduct />
        </main>


    );
};

export default MainProduct;