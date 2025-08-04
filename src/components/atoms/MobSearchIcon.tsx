

function MobSearchIcon() {
  return (
    <div className=" md:hidden font-a flex items-center border w-1/2 border-gray-200 p-3 rounded-3xl justify-center gap-2 shadow-[0_6px_20px_0_rgba(0,0,0,0.1)] mt-4 ">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          className="h-[12px] w-[12px]"
        >
          <path
            d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
            fill="#222222"
          ></path>
        </svg>
      </div>
      <span className="block font-[500]  text-[14px]">Start you search</span>
    </div>
  );
}

export default MobSearchIcon
