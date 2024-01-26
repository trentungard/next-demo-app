import Image from "next/image";
import Wobot from '@/public/wobot.jpg';
import { Header, HeaderInfo } from "@/components/Header";
import { Counter } from "@/components/Counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <div className='mt-[250px]'>
        <h1>NextJs Homepage</h1>
        <Counter />
        <Image alt='Wobot' src={Wobot} height='500' width='500' />
      </div>
    </main>
  );
}
