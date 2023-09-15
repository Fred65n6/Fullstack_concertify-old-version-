import useConcerts from "../hooks/useConcerts";
import ConcertCard from "./ConcertCard";
import ConcertCardContainer from "./ConcertCardContainer";

const ConcertGrid = () => {
const { concerts, error, isLoading } = useConcerts();

return (
    <>
    {error && <p>{error}</p>}

    <ConcertCardContainer>

    <div className="p-10 gap-10 grid grid-cols-4 grid-rows-1 overflow-hidden">
        {concerts.map((concert) => (

        <ConcertCard key={concert.id} concert={concert} />

    ))}
    </div>

    </ConcertCardContainer>
    </>
);
};

export default ConcertGrid;