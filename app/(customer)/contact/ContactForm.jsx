"use client"
import toast from "react-hot-toast"

const ContactForm = () => {
  const handleFormSubmit = (e)=>{
    e.preventDefault();
    toast("Function not implemented yet")
  }

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-2 md:gap-4 justify-center">
      <label htmlFor="name"></label>
      <input
        type="text"
        required
        placeholder="Enter your name"
        className="p-4 outline-0 border-1  border-gray-300 rounded-md focus:border-orange-600 max-w-[36.5rem] bg-white focus:brightness-95"
      />

      <label htmlFor="email"></label>
      <input
        type="email"
        placeholder="Enter your email"
        required
        className="p-4 outline-0 border-1  border-gray-300 rounded-md focus:border-orange-600  max-w-[36.5rem]  bg-white focus:brightness-95"
      />

      <label htmlFor="message"></label>
      <textarea
        name="message"
        required
        placeholder="Write your message"
        className="p-4 outline-0 border-1  border-gray-300 rounded-md focus:border-orange-600 max-w-[36.5rem]  bg-white focus:brightness-95"
        rows={8}
      ></textarea>

      <button className="py-4 outline-0 border-1  bg-orange-600 text-white  rounded-md border-orange-600 self-start px-10 cursor-pointer hover:text-gray-800 hover:bg-white duration-150">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
