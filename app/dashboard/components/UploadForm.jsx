"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

/* eslint-disable */
const UploadForm = () => {
  const [images, setImages] = useState([]);

  const handleUploadChange = (e,index) => {
    const updatedImages = [...images];
    updatedImages[index] = e.target.files?.[0];
    setImages(updatedImages);
  };

  const handleAddSubmit = async (formData) => {
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    try {
      const res = await fetch("/api/products/add", {
        method: "POST",
        body: formData,
      });
      if (res.status === 201) toast.success("Product added");
    } catch (error) {
      toast.error("Couldn't fetch");
    }
  };

  return (
    <form
      action={handleAddSubmit}
      className="flex gap-4 max-w-[30rem] flex-col"
    >
      <h2 className="text-xl md:text-2xl">Product Image</h2>
      <div className="flex gap-2 flex-wrap">
        {[...Array(4)].map((id, index) => {
          return (
            <label htmlFor={`image${index}`} key={index}>
              <input
                type="file"
                id={`image${index}`}
                hidden
                onChange={(e) => handleUploadChange(e, index)}
              />
              <Image
                src={
                  images && images[index]
                    ? URL.createObjectURL(images[index])
                    : assets.upload_area
                }
                height={100}
                width={100}
                alt={`image${id}`}
                className="object-cover cursor-pointer"
              />
            </label>
          );
        })}
      </div>

      <label htmlFor="ProductName">Product Name</label>
      <input
        className="px-5 py-4 rounded-sm bg-white brightness-95 outline-0 border-1 border-gray-300 "
        type="text"
        required
        name="name"
        placeholder="Type here"
      />

      <label htmlFor="ProductDescription">Product Description</label>
      <textarea
        className="px-5 py-4 rounded-sm bg-white brightness-95 outline-0 border-1 border-gray-300 "
        rows={7}
        required
        name="description"
        placeholder="Type here"
      />

      <div className="flex gap-4 flex-wrap ">
        <div className="flex flex-col gap-2 max-w-40 ">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className="border-1 cursor-pointer border-gray-300 py-4 pl-4 pr-1 rounded-sm"
          >
            <option value="earphone">Earphone</option>
            <option value="gaming">Gaming</option>
            <option value="laptop">Laptop</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 max-w-36">
          <label htmlFor="offerPrice">Offer Price</label>
          <input
            className="px-5 py-4 rounded-sm bg-white brightness-95 outline-0 border-1 border-gray-300 "
            type="number"
            name="offerPrice"
            required
            placeholder="Type here"
          />
        </div>

        <div className="flex flex-col gap-2 max-w-36">
          <label htmlFor="ProductPrice">Product Price</label>
          <input
            className="px-5 py-4 rounded-sm bg-white brightness-95 outline-0 border-1 border-gray-300 "
            type="number"
            required
            name="productPrice"
            placeholder="Type here"
          />
        </div>

        <div className="flex flex-col gap-2 max-w-20">
          <label htmlFor="Rating">Rating</label>
          <select
            name="rating"
            id="Rating"
            className="border-1 cursor-pointer border-gray-300 py-4 pl-4 pr-1 rounded-sm"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      <button className="cursor-pointer border-1 self-start border-orange-600 px-8 p-3 text-sm rounded duration-150  bg-orange-600 text-white text-medium hover:brightness-85">
        ADD
      </button>
    </form>
  );
};

export default UploadForm;
