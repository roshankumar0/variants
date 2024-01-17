import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

const productDetails = {
  price: "Rs. 8,663.76",
  code: "JANFLASH",
  colors: ["Cream,Gray", "Cream,Black", "Black,Cream", "Cream,Navy"],
  sizes: [
    "4' Round",
    "4 X 6",
    "5 X 8",
    "8 X 10",
    "3 X 5",
    "2 X 8",
    "2 X 20",
    "2 X 14",
    "12 X 15",
    "6' Round",
    "9' Round",
    "6' Square",
    "9' Square",
    "5' Square",
    "10 X 13",
    "3' Round",
    "10 X 14",
    "4' Round",
    "5' Round",
    "12 X 18",
    "7' Round",
    "2 X 10",
    "3' Square",
    "4' Square",
    "9 X 12",
    "8' Round",
    "8' Sqaure",
  ],
};

const Landingpage = () => {
  const initialSelected = localStorage.getItem("selectedColor");
  const [selected, setSelected] = useState(
    initialSelected !== null ? parseInt(initialSelected, 10) : 0
  );
  const [quantity, setQuantity] = useState(1);
  if (selected === null) {
    setSelected(0);
  }
  const initialSize = localStorage.getItem("Size");

  const [sizeCurrent, setSizeCurrent] = useState(
    initialSize !== null ? parseInt(initialSize, 10) : 0
  );
  const [size, setSize] = useState(null);
  const smallImages = [
    "https://pier1.com/cdn/shop/products/f1b80d8c-fb9b-4c93-a1c5-6ee34b293527_1296x1296.jpg?v=1703954046",
    "https://pier1.com/cdn/shop/products/afc1d10f-e0cf-43bb-a667-306cac28272f_590x590.jpg?v=1703954062",
    "https://pier1.com/cdn/shop/products/aeda9397-0c2e-4d37-baa7-5bd50112f75d_590x590.jpg?v=1703954052",

    "https://pier1.com/cdn/shop/products/f1b80d8c-fb9b-4c93-a1c5-6ee34b293527_1296x1296.jpg?v=1703954046",
    "https://pier1.com/cdn/shop/products/afc1d10f-e0cf-43bb-a667-306cac28272f_590x590.jpg?v=1703954062",
    "https://pier1.com/cdn/shop/products/aeda9397-0c2e-4d37-baa7-5bd50112f75d_590x590.jpg?v=1703954052",

    "https://pier1.com/cdn/shop/products/f1b80d8c-fb9b-4c93-a1c5-6ee34b293527_1296x1296.jpg?v=1703954046",
    "https://pier1.com/cdn/shop/products/afc1d10f-e0cf-43bb-a667-306cac28272f_590x590.jpg?v=1703954062",
    "https://pier1.com/cdn/shop/products/aeda9397-0c2e-4d37-baa7-5bd50112f75d_590x590.jpg?v=1703954052",

    "https://pier1.com/cdn/shop/products/f1b80d8c-fb9b-4c93-a1c5-6ee34b293527_1296x1296.jpg?v=1703954046",
    "https://pier1.com/cdn/shop/products/afc1d10f-e0cf-43bb-a667-306cac28272f_590x590.jpg?v=1703954062",
    "https://pier1.com/cdn/shop/products/aeda9397-0c2e-4d37-baa7-5bd50112f75d_590x590.jpg?v=1703954052",

    "https://pier1.com/cdn/shop/products/f1b80d8c-fb9b-4c93-a1c5-6ee34b293527_1296x1296.jpg?v=1703954046",
    "https://pier1.com/cdn/shop/products/afc1d10f-e0cf-43bb-a667-306cac28272f_590x590.jpg?v=1703954062",
    "https://pier1.com/cdn/shop/products/aeda9397-0c2e-4d37-baa7-5bd50112f75d_590x590.jpg?v=1703954052",

    "https://pier1.com/cdn/shop/products/f1b80d8c-fb9b-4c93-a1c5-6ee34b293527_1296x1296.jpg?v=1703954046",
    "https://pier1.com/cdn/shop/products/afc1d10f-e0cf-43bb-a667-306cac28272f_590x590.jpg?v=1703954062",
    "https://pier1.com/cdn/shop/products/aeda9397-0c2e-4d37-baa7-5bd50112f75d_590x590.jpg?v=1703954052",
  ];

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const addToCart = () => {
    console.log(
      `Added to cart: ${quantity} ${productDetails.colors[selected]} item(s) ${size}`
    );
  };
  useEffect(() => {
    localStorage.setItem("selectedColor", selected.toString());
  }, [selected]);
  useEffect(() => {
    localStorage.setItem("Size", sizeCurrent.toString());
  }, [sizeCurrent]);

  const preImg = localStorage.getItem("preImage");
  const [selectImage, setSelectedImage] = useState(
    preImg !== null ? preImg : smallImages[0]
  );

  useEffect(() => {
    localStorage.setItem("preImage", selectImage);
  }, [selectImage]);

  return (
    <div className="md:flex p-[30px] max-w-[95%] m-auto">
      <div className="md:w-1/2 flex-col flex">
        <div className="w-[100%] h-full relative">
          <img
            className="w-[100%] object-cover h-full"
            src={selectImage}
            alt=""
          />
          <h2 className="absolute top-[10px] right-[10px] bg-[#F2F4F8] rounded-[5px] px-[8px] py-[5px] font-semibold font-Inter text-[#2d5194]">
            Extra 20% Off With Code
          </h2>
        </div>
        <div className="flex gap-[15px] overflow-x-scroll whitespace-nowrap pb-[10px]">
          {smallImages &&
            smallImages.map((item, index) => {
              return (
                <img
                  key={index}
                  onClick={() => setSelectedImage(item)}
                  src={item}
                  alt=""
                  height={60}
                  width={60}
                  className="cursor-pointer pl-[10px] pt-[10px] aspect-square"
                />
              );
            })}
        </div>
      </div>
      <div className="md:w-1/2 pl-[30px] mt-[10px]">
        <h1 className="text-[24.375px] font-poppins mt-[10px] font-bold">
          Aisha Moroccan Triangle Geometric Area Rug
        </h1>
        <p className="text-[16px] font-normal">SKU: 111776</p>
        <h3 className="text-[#2b5193] text-[30px] font-poppins font-[600]">
          {/* Rs. 8,663.76 */}
          <span className="text-[30px]"> {productDetails.price}</span>
        </h3>
        <div className="my-[20px] font-[600] ">
          <p className=" text-[#2b5194] p-[10px] text-[13px] font-semibold font-Inter bg-[#F2F4F8] max-w-[max-content]">
            Code: {productDetails.code}
          </p>
        </div>
        <div className="mt-[25px] mb-[10px]">
          <div>
            <div className="mt-[20px]">
              <p className=" text-[16px] my-[20px] font-normal font-Inter">
                {selected !== null && (
                  <label htmlFor="color">
                    <span>Color: </span>
                    <span>{productDetails.colors[selected]}</span>
                  </label>
                )}
              </p>
              <div className="flex flex-wrap lg:flex-nowrap px-[10px] py-[12px]">
                {productDetails.colors.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center flex-1 mt-[10px] mr-[5px]"
                    >
                      <label
                        htmlFor={`color-${index}`}
                        className={` text-center text-[16px] w-full cursor-pointer border-[1px] border-[#313335]  text-[#313335]  rounded-[40px] px-[20px] py-[10px]
                        ${
                          selected === index ? "bg-[#2b5193] text-[#fff]" : ""
                        }`}
                        onClick={() => setSelected(index)}
                      >
                        {item}
                      </label>
                      <input type="text" className="hidden " />
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h3>
                <span>Size: </span>
                <span>{productDetails.sizes[sizeCurrent]}</span>
              </h3>
              <div className="flex flex-wrap ">
                {productDetails.sizes.map((item, index) => {
                  const isSizeAvailable =
                    item === "10 X 13" || item === "2 X 14";

                  return (
                    <div
                      key={index}
                      className="flex  relative items-center justify-center mt-[10px] mr-[5px]"
                    >
                      <button
                        disabled={isSizeAvailable}
                        className={`  ${isSizeAvailable?"cursor-not-allowed":""} border-[1px] max-w-[max-content] text-center text-[16px] w-full  rounded-[40px] px-[20px] py-[10px]
          ${sizeCurrent === index ? "bg-[#2b5193] text-[#fff]" : ""}
          ${isSizeAvailable ? "cross" : ""}`}
                        onClick={() => setSizeCurrent(index)}
                      >
                        {item}
                      </button>
                      <input type="text" className="hidden" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="mt-[25px] mb-[10px]">
                <div className="mb-[10px]">
                  <label htmlFor="Quantity">Quantity</label>
                  <select
                    className="border w-[90px] ml-[3px] border-[#313335] h-[40px] cursor-pointer"
                    id="Quantity"
                    onChange={handleQuantityChange}
                    value={quantity}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="flex gap-[10px] items-center font-Inter text-[#313335] font-normal p-[10px]">
                  <img
                    src="  https://pier1.com/cdn/shop/t/292/assets/pier_1_coins.svg?v=133517799025895801161704806046"
                    alt=""
                  />
                  <p>
                    <span>Earn </span>
                    <span className="text-[#2d5194] font-bold">
                      4576+ points{" "}
                    </span>
                    <span>
                      when you join the Pier 1 Perks Loyalty Program -
                      <span className="text-[#2d5194]">
                        Learn more → <span></span>
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div>
                  <button className="text-[#2d5194] flex items-center h-[20px]  m-[10px] font-Inter text-[16px]">
                    <span className="flex items-center">
                      <CiHeart size={24} />
                      <span>Add to Wishlist</span>
                    </span>
                  </button>
                </div>
                <div className="">
                  <button
                    className="bg-[#2d5194] w-full font-Inter py-[12px] px-[18px] rounded-[4px] text-[#fff]"
                    onClick={addToCart}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
