import React from "react";
import grocery from "../../assets/grocery2.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <div className=" min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35  ">
        {/* hero Content */}
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
            Export Fresh and Best Quality...
          </span>
          <h1 className="text-7xl/20 text-5xl/14font-bold">
            Fresh  Tasty Organic{" "}
            <span className="text-orange-500">Fruits </span> &{" "}
            <span className="text-orange-500">Vegetables </span>
            Delivered Daily
          </h1>
          <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10">
            Experience farm-fresh groceries with premium quality fruits,
            vegetables, and healthy baskets inspired by modern grocery brands.
          </p>
          <Button content="Shop Now"></Button>
        </div>

        {/*Hero image */}
        <div className="flex-1">
          <img src={grocery} alt="main image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
