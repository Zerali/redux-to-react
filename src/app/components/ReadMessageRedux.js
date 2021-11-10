import { useSelector, shallowEqual } from "react-redux"

export const ReadMessageRedux = () => {
    const message = useSelector((state) => state.message, shallowEqual);

    return (
        <div className="ReadMessage">
            Message: {message.value}
        </div>
    )
}