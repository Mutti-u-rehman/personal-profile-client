const Card = ({children}) => {
    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-4 m-4">
                { children}
            </div>
        </>
    );
}


export default Card;