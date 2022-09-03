import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions";

function Redux1() {
    const mystate = useSelector((state) => state.counter1.changeNumber);
    const dispatch = useDispatch();
    return (
        <>
            <h1>redux counter</h1>
            <button style={{ fontSize: "30px", padding: "10px", width: "40px" }} onClick={() => dispatch(increment())}>+</button>
            <span style={{ fontSize: "40px", padding: "20px" }}>{mystate}</span>
            <button style={{ fontSize: "30px", padding: "10px", width: "40px" }} onClick={() => dispatch(decrement())}>-</button>
        </>
    );
}

export default Redux1; 