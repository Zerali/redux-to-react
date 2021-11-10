export const PlaceHolder = ({ number, children }) => {
    return (
        <div className="PlaceHolder">
            <span>Component {number}</span>
            { children }
        </div>
    );
}