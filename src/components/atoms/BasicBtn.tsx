type BasicProps = {
    title?: string
    logo?: string
}

const BasicBtn = ({ title, logo }: BasicProps) => {
    return (
      <>
        {title && <div className="text-[14px] font-[500]">Become a host</div>}
        {logo && (
          <div className="bg-gray-300 inline-block rounded-full" >
            <img src={logo} className=" m-3  h-[16px] w-[16px]" alt="" />
          </div>
        )}
      </>
    );
};

export default BasicBtn