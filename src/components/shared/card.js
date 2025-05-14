const Card = ({children}) => {
    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-4 m-4">
                { children}
            </div>
        </>
    );
}






const GreenCard = ({ children }) => {
    return (
        <>
            <div className="green-card shadow-md rounded-lg p-4 m-4">
                {children}
            </div>
        </>
    );
}


export { GreenCard };
export default Card;