import useGames from "../hooks/useConcerts";
import ConcertCard from "./ConcertCard";
import ConcertCardContainer from "./ConcertCardContainer";

const ConcertGrid = () => {
const { games, error, isLoading } = useGames();

return (
    <>
    {error && <p>{error}</p>}

    <ConcertCardContainer>

    <div className="p-10 gap-10 grid grid-cols-4 grid-rows-1 overflow-hidden">
        {games.map((game) => (

        <ConcertCard key={game.id} game={game} />

    ))}
    </div>

    </ConcertCardContainer>
    </>
);
};

export default ConcertGrid;