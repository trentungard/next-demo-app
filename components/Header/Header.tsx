import Link from "next/link";
import { PropsWithChildren } from "react";

export const Header: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='bg-emerald-700 w-full fixed top-0 flex justify-between items-center px-5 z-1'>
            <h1 className='text-emerald-200'>Welcome to my Next App</h1>
            <div className='flex gap-3 items-center'>
                <Link className='underline' href='/'>Home</Link>
                <Link className='underline' href='/users'>Users</Link>
            </div>
            {children}
        </div>
    )
};