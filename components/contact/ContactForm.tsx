

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-2 md:gap-4 justify-center">
          <label htmlFor="name"></label>
          <input type="text" required placeholder="Enter your name" className="p-4 outline-0 border-1  border-gray-300 rounded-md focus:border-orange-600 max-w-[36.5rem] " />

          <label htmlFor="email"></label>
          <input type="email" placeholder="Enter your email" required className="p-4 outline-0 border-1  border-gray-300 rounded-md focus:border-orange-600  max-w-[36.5rem]" />

          <label htmlFor="message"></label>
          <textarea
            name="message"
            required
            placeholder="Write your message"
            className="p-4 outline-0 border-1  border-gray-300 rounded-md focus:border-orange-600 max-w-[36.5rem]"
            rows={8}
          ></textarea>

          <button className="py-4 outline-0 border-1  border-gray-300 hover:bg-orange-600 hover:text-white duration-150 cursor-pointer rounded-md focus:border-orange-600 self-start px-10 " >Submit</button>
        </form>
  )
}

export default ContactForm