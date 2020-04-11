import React, {useState, Fragment} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () =>{
        setCount(count + 1);
    }
    const decrement = () =>{
        setCount(count - 1);
    }
    return (
        <Fragment>
        <p>{count}</p>
        <button onClick={increment}>Incremenr</button>
        <button onClick={decrement}>Decremenr</button>
        </Fragment>
    )
}

export default Counter;