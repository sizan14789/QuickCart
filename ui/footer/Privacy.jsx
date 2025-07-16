
const Privacy = ({visible, setVisible}) => {

  const handleDivClick = (e)=>{
    e.stopPropagation();
  }

  return (
    <div className={` ${visible? "" : "hidden"}  box bg-[#acacac33] h-svh w-svw flex justify-center items-center fixed bottom-0 left-0 `}
    onClick={()=> setVisible(false)}
    >
      <div className="box flex flex-col max-w-2xl py-8 gap-6 border-1 border-gray-300 rounded-xl bg-white"
      onClick={handleDivClick}
      >
        <h2 className="text-center self-center text-3xl font-medium relative text-gray-800">
          Privacy Policy
          <p className="h-0.5 w-full absolute -bottom-1 bg-orange-600" />
        </h2>
        <p className="text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          sapiente labore, inventore expedita dolorem explicabo deleniti nemo
          asperiores perspiciatis libero repellendus ipsam dicta ab minima, quos
          iste, hic totam tenetur deserunt eveniet unde? Quasi aspernatur dicta
          obcaecati atque, veritatis illum sit? Explicabo quidem accusantium,
          corporis deleniti rem itaque libero nam expedita consequatur ab
          aspernatur culpa quas nobis voluptatibus sit, numquam adipisci. Nobis
          voluptate non debitis animi sed cu
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, esse? Molestias, nesciunt amet! Placeat, tempora velit. Dicta odit omnis saepe dolorum fugit similique atque! Placeat modi enim nemo odio optio.
        </p>
        <button className="bg-orange-600 text-white py-4 px-12 font-semibold rounded-md hover:brightness-90 cursor-pointer"
        onClick={()=> setVisible(false)}
        >
          I understand
        </button>
      </div>
    </div>
  );
};

export default Privacy;
