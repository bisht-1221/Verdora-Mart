import React from "react";
import basket from "../../assets/basket-full-vegetables.png";

import {
  FaLeaf,
  FaTruck,
  FaShieldAlt,
  FaCrown,
} from "react-icons/fa";

const value = [
  {
    id: 1,
    icon: <FaLeaf />,
    title: "Fresh Products",
    description:
      "We provide farm fresh fruits and vegetables every day.",
  },
  {
    id: 2,
    icon: <FaTruck />,
    title: "Fast Delivery",
    description:
      "Quick and reliable delivery service at your doorstep.",
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Secure Payment",
    description:
      "100% safe and secure online payment experience.",
  },
  {
    id: 4,
    icon: <FaCrown />,
    title: "Premium Quality",
    description:
      "High-quality grocery products with freshness guarantee.",
  },
];

const Values = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* HEADING */}
        <div className="text-center mb-24">
          <h2
            className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            text-zinc-800
            relative
            inline-block
          "
          >
            Our Values

            {/* UNDERLINE */}
            <span
              className="
              absolute
              left-0
              -bottom-4
              w-full
              h-[5px]
              rounded-full
              bg-gradient-to-r
              from-orange-400
              to-orange-600
            "
            ></span>
          </h2>
        </div>

        {/* MAIN SECTION */}
        <div
          className="
          relative
          flex
          flex-col
          md:flex-row
          justify-center
          items-center
          gap-8
          md:gap-14
          lg:min-h-[750px]
        "
        >

          {/* LEFT SIDE */}
          <div
            className="
            flex
            flex-col
            gap-8
            w-full
            md:w-1/2
            lg:w-auto
            lg:absolute
            lg:left-0
            lg:top-1/2
            lg:-translate-y-1/2
          "
          >

            {/* FIRST CARD */}
            <div
              className="
              group
              bg-white
              p-7
              rounded-[30px]
              shadow-xl
              border border-zinc-100
              hover:shadow-2xl
              hover:scale-[1.02]
              transition-all
              duration-700
              ease-in-out
              lg:w-[340px]
              lg:-translate-y-32
            "
            >
              <div className="flex md:flex-row-reverse items-center gap-5">

                {/* ICON */}
                <span
                  className="
                  w-16
                  h-16
                  min-w-[64px]
                  flex
                  justify-center
                  items-center
                  rounded-full
                  text-white
                  text-2xl
                  bg-gradient-to-b
                  from-orange-400
                  to-orange-600
                  shadow-lg
                  group-hover:scale-110
                  transition-all
                  duration-700
                  ease-in-out
                "
                >
                  {value[0].icon}
                </span>

                {/* TEXT */}
                <div className="md:text-right">
                  <h4 className="text-2xl font-bold text-zinc-800">
                    {value[0].title}
                  </h4>

                  <p className="text-zinc-600 mt-2 leading-relaxed">
                    {value[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* SECOND CARD */}
            <div
              className="
              group
              bg-white
              p-7
              rounded-[30px]
              shadow-xl
              border border-zinc-100
              hover:shadow-2xl
              hover:scale-[1.02]
              transition-all
              duration-700
              ease-in-out
              lg:w-[340px]
              lg:translate-y-32
            "
            >
              <div className="flex md:flex-row-reverse items-center gap-5">

                {/* ICON */}
                <span
                  className="
                  w-16
                  h-16
                  min-w-[64px]
                  flex
                  justify-center
                  items-center
                  rounded-full
                  text-white
                  text-2xl
                  bg-gradient-to-b
                  from-orange-400
                  to-orange-600
                  shadow-lg
                  group-hover:scale-110
                  transition-all
                  duration-700
                  ease-in-out
                "
                >
                  {value[1].icon}
                </span>

                {/* TEXT */}
                <div className="md:text-right">
                  <h4 className="text-2xl font-bold text-zinc-800">
                    {value[1].title}
                  </h4>

                  <p className="text-zinc-600 mt-2 leading-relaxed">
                    {value[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="hidden md:flex justify-center items-center z-10">

            <img
              src={basket}
              alt="Vegetable Basket"
              className="
              w-[340px]
              md:w-[420px]
              lg:w-[520px]
              object-contain
              drop-shadow-2xl
              hover:scale-105
              transition-all
              duration-700
              ease-in-out
              animate-[float_4s_ease-in-out_infinite]
            "
            />
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
            flex
            flex-col
            gap-8
            w-full
            md:w-1/2
            lg:w-auto
            lg:absolute
            lg:right-0
            lg:top-1/2
            lg:-translate-y-1/2
          "
          >

            {/* THIRD CARD */}
            <div
              className="
              group
              bg-white
              p-7
              rounded-[30px]
              shadow-xl
              border border-zinc-100
              hover:shadow-2xl
              hover:scale-[1.02]
              transition-all
              duration-700
              ease-in-out
              lg:w-[340px]
              lg:-translate-y-32
            "
            >
              <div className="flex items-center gap-5">

                {/* ICON */}
                <span
                  className="
                  w-16
                  h-16
                  min-w-[64px]
                  flex
                  justify-center
                  items-center
                  rounded-full
                  text-white
                  text-2xl
                  bg-gradient-to-b
                  from-orange-400
                  to-orange-600
                  shadow-lg
                  group-hover:scale-110
                  transition-all
                  duration-700
                  ease-in-out
                "
                >
                  {value[2].icon}
                </span>

                {/* TEXT */}
                <div>
                  <h4 className="text-2xl font-bold text-zinc-800">
                    {value[2].title}
                  </h4>

                  <p className="text-zinc-600 mt-2 leading-relaxed">
                    {value[2].description}
                  </p>
                </div>
              </div>
            </div>

            {/* FOURTH CARD */}
            <div
              className="
              group
              bg-white
              p-7
              rounded-[30px]
              shadow-xl
              border border-zinc-100
              hover:shadow-2xl
              hover:scale-[1.02]
              transition-all
              duration-700
              ease-in-out
              lg:w-[340px]
              lg:translate-y-32
            "
            >
              <div className="flex items-center gap-5">

                {/* ICON */}
                <span
                  className="
                  w-16
                  h-16
                  min-w-[64px]
                  flex
                  justify-center
                  items-center
                  rounded-full
                  text-white
                  text-2xl
                  bg-gradient-to-b
                  from-orange-400
                  to-orange-600
                  shadow-lg
                  group-hover:scale-110
                  transition-all
                  duration-700
                  ease-in-out
                "
                >
                  {value[3].icon}
                </span>

                {/* TEXT */}
                <div>
                  <h4 className="text-2xl font-bold text-zinc-800">
                    {value[3].title}
                  </h4>

                  <p className="text-zinc-600 mt-2 leading-relaxed">
                    {value[3].description}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;