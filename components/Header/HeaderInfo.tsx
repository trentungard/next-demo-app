'use client';


import { GlobalContext } from "@/app/global-context-provider";
import { useContext } from "react";

interface HeaderProps {
    username?: string;
}

export const HeaderInfo: React.FC<HeaderProps> = ({username}) => {
    const context = useContext(GlobalContext);
    const { globalState } = context;
    const { count } = globalState;
    return (
        <div className='text-emerald-200'>
            <p>Hi, ${username || 'New User'}</p>
            <p>Your count is {count}</p>
        </div>
    )
};