
import { Game } from "../hooks/useConcerts";

interface Props {
game: Game;
}

const ConcertCard = ({ game }: Props) => {

return (
    <>
    <div>

        <img className="h-[200px] object-cover" src={game.background_image} />

        <div className="grid gap-5 p-2 text-left">

        <h2>{game.name}</h2>

        <p>Game ID: {game.id}</p>

        <p>Playtime: {game.playtime} hours</p>

        </div>

    </div>
    </>
);
};

export default ConcertCard;
