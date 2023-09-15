
import { Concert } from "../hooks/useConcerts";

interface Props {
concert: Concert;
}

const ConcertCard = ({ concert }: Props) => {

return (
    <>
    <div>

        <img className="h-[200px] object-cover" src={concert.background_image} />

        <div className="grid gap-5 p-2 text-left">

        <h2>{concert.name}</h2>

        <p>Game ID: {concert.id}</p>

        <p>Playtime: {concert.playtime} hours</p>

        </div>

    </div>
    </>
);
};

export default ConcertCard;
