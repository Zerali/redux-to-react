import { useContext } from "react"
import { StoreContext } from "../../App";

export const ReadMessage = () => {
    const { state } = useContext(StoreContext);

    return (
        <div className="ReadMessage">
            Message: {state.message.value}
        </div>
    )
}