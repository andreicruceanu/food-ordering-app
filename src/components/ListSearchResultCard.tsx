import { Restaurant } from "@/types";
import SearchResultCard from "./SearchResultCard";
import ResultCardSkeleton from "./ResultCardSkeleton";

type Props = {
  listRestaurants: Restaurant[] | undefined;
  isLoading: boolean;
};

const ListSearchResultCard = ({ listRestaurants, isLoading }: Props) => {
  if (isLoading) {
    return <ResultCardSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 gap-y-7">
      {listRestaurants?.map((restaurant) => (
        <SearchResultCard restaurant={restaurant} key={restaurant._id} />
      ))}
    </div>
  );
};

export default ListSearchResultCard;
