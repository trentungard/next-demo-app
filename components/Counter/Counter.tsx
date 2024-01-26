'use client';

import { useContext } from "react";
import { GlobalContext } from "@/app/global-context-provider";

export const Counter = () => {
    const context = useContext(GlobalContext);
    const { globalState, dispatch } = context;
    const { count } = globalState;
    const buttonStyles = 'rounded bg-emerald-500 p-2';
    return(
        <div>
            <p>Your count is {count}</p>
            <div className='flex gap-3'>
                <button className={buttonStyles} onClick={() => dispatch({type : 'increment_counter'})}>Increment</button>
                <button className={buttonStyles} onClick={() => dispatch({type : 'decrement_counter'})}>Decrement</button>
                <button className={buttonStyles} onClick={() => dispatch({type : 'reset_counter'})}>Reset</button>
            </div>
        </div>
    )
}