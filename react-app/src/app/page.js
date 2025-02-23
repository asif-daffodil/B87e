import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/myApp" className='border-2 border-sky-500 px-5 py-3 block w-max m-3 rounded-full text-sky-500 font-bold hover:bg-sky-500 hover:text-white hover:shadow-md hover:shadow-sky-500'>
        My App
      </Link>
      <Link href="/yourApp" className='border-2 border-lime-500 px-5 py-3 block w-max m-3 rounded-full text-lime-500 font-bold hover:bg-lime-500 hover:text-white hover:shadow-md hover:shadow-lime-500'>
        Your App
      </Link>
    </div>
  );
}
