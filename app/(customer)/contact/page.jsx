import { assets } from "@/assets/assets";
import ContactForm from "@/app/(customer)/contact/ContactForm";
import Image from "next/image";

export const metadata = {
  title: {
    default: 'Contact',
    description: 'Contact page of QuickCart'
  },
};

const Contact = () => {
  return (
    <div className="box grid gap-5 md:grid-cols-2 md:gap-20 xl:gap-0 my-auto">
      <div className="flex items-center justify-center">
        <figure className="">
          <Image
            height={400}
            width={400}
            src={assets.contact_girl}
            className="object-cover w-60 md:w-auto"
            alt="contact_quickCart"
          />
        </figure>
      </div>

      <div className="flex flex-col">
        <h2 className="text-4xl relative self-center md:self-start">
          Contact us
          <p className="h-0.5 w-full bg-orange-600 mb-4 " />
        </h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
