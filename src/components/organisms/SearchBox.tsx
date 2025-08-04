import searchLogo from '../../assets/images/desk-search.svg'


const SearchBox = () => {
  return (
    <div className="hidden md:flex text-[12px] w-3/5 mx-auto justify-between items-center p-1 pl-7 border rounded-full border-gray-300 shadow">
      <div className="flex flex-col">
        <span className=" inline-block ">Where</span>
        <span className=" inline-block text-gray-500">Search destinations</span>
      </div>
      <div className="w-[1px] bg-gray-400 h-[32px]"></div>
      <div className="flex flex-col ">
        <span className=" inline-block ">Check in</span>
        <span className=" inline-block text-gray-500">Add dates</span>
      </div>
      <div className="w-[1px] bg-gray-400 h-[32px]"></div>
      <div className="flex flex-col ">
        <span className=" inline-block ">Check out</span>
        <span className=" inline-block text-gray-500">Add dates</span>
      </div>
      <div className="w-[1px] bg-gray-400 h-[32px]"></div>
      <div className="flex flex-col ">
        <span className=" inline-block ">who</span>
        <span className=" inline-block text-gray-500">Add guests</span>
      </div>
      <div className="flex-col bg-[#FF385C] inline-flex justify-center items-center h-[48px] w-[48px] rounded-full ">
        <img src={searchLogo} alt="" className="h-[16px] w-[16px]" />
      </div>
    </div>
  );
};

export default SearchBox;
