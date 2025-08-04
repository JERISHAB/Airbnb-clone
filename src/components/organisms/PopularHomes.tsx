import { popularHomes } from "../../db/popularHomes"
import PropertyCard from "../molecules/PropertyCard"


function PopularHomes() {
  return (
    <div className="mt-5 ">
      <h2 className="text-[18px] font-[600] px-3.5 md:px-13 ">
        Popular homes in Bengaluru
      </h2>
      <div className="px-3.5 md:px-13 no-scrollbar overflow-x-auto flex justify-between gap-1">
        {popularHomes.map((home) => (
          <PropertyCard
            key={home.id}
            title={home.title}
            price={home.price}
            favourite={home.guestFavorite}
            image={home.image}
            rating={home.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularHomes
