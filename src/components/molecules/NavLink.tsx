
type LinkProps = {
  title: string;
    image: string;
  newLink: boolean
};



const NavLink = ({ title,newLink, image }: LinkProps) => {



  return (
    <div className="flex  relative flex-col md:flex-row items-center  justify-center">
      <img src={image} className="h-[56px] w-[68px]" />
      {newLink && (
        <span className=" absolute -top-1 -right-2 inline-block text-[8px] font-[700] tracking-[0.32px] py-0.25 px-1.5 text-white bg-new rounded-t-[10px] rounded-br-[10px]  ">
          NEW
        </span>
      )}
      <span className="text-gray-500 md:text-[14px] text-[12px] font-[600] -mt-3 active:border border-b-2 ">
        {title}
      </span>
    </div>
  );
};

export default NavLink;
