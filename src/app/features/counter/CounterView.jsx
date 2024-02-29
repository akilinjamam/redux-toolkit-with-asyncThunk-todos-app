import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByFive, increment, reset } from "./counterSlice";


const CounterView = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    
   

    return (
        <div>
            <p>tcounter view: {count}</p>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increaseByFive(5))}>Increase 5</button>
        </div>
    );
};

export default CounterView;