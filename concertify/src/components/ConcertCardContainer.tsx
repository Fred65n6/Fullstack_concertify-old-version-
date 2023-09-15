import {ReactNode} from 'react'

interface Props {
    children: ReactNode;
}

const ConcertCardContainer = ({children}: Props) => {
    return (
        <>
        <div className="">
        {children}
        </div>
        </>
    );
};

export default ConcertCardContainer;