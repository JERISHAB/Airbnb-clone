import heart from "../../assets/images/card-like.svg";
import star from "../../assets/images/start.svg";

type PropertyCardProps = {
  title: string;
  rating: number;
  price: number;
  image: string;
  favourite: boolean;
};

const PropertyCard = ({
  title,
  rating,
  price,
  favourite,
  image,
}: PropertyCardProps) => {
  return (
    <div className="inline-flex flex-col mx-1">
      <div className=" inline-block relative">
        <img src={image} className="min-w-[158.1px] max-w-[182.56px] rounded-[20px]" alt="" />
        {favourite && (
          <span className="absolute top-3 left-3 bg-amber-50 pr-9 px-3 py-1.5 text-[12px] font-[500] leading-3.5 rounded-2xl ">
            Guest <br /> favourite
          </span>
        )}
        <img
          src={heart}
          className="absolute top-3 right-3 h-[24px] w-[24px] "
          alt=""
        />
      </div>
      <div className="">
        <p className="text-[13px] font-[500]">{title}</p>
        <p className="text-[12px]">
          {price} for 2 nights.
          <img src={star} alt="" className="h-[8px] inline-block" />
          {rating}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
