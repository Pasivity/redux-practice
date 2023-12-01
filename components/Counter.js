import { useState } from "react"
import Counter2 from "./Counter2"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "../Redux/counterSlice"
import { useGetAllPostsQuery } from "../Redux/postsSlice"

export default function Counter(){

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    const {data, isLoading, isError} = useGetAllPostsQuery()

    return (
        <div>
            <h1>Count is {count}</h1>
            <button
            onClick={( ) => dispatch(increment())}
            >Increment</button>
            <button
            onClick={( ) => dispatch(decrement())}
            >Decrement</button>
            <button
            onClick={( ) => dispatch(incrementByAmount(20))}
            >Increment by amount</button>
            <Counter2/>
        </div>
    )
}