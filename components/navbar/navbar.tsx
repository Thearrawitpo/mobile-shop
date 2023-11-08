"use client";
import useSidebar from "@/hooks/use-sidebar";
import { useRouter } from "next/navigation";

type Props = {};

export default function Navbar({}: Props) {
  const router = useRouter();
  const sidebar = useSidebar();

  const handleClick = () => {
    sidebar.onOpen();
  };

  return (
    <header
      className='w-full px-4 py-6 font-medium flex items-center justify-between relative z-10 h-20
    shadow-lg'
    >
      <div
        className='text-2xl text-neutral-600 font-bold cursor-pointer'
        onClick={() => router.push("/")}
      >
        LOGO
      </div>
      <button
        className='flex flex-col justify-center items-center'
        onClick={handleClick}
      >
        <span
          className={`bg-neutral-600 block h-0.5 w-6 rounded-sm 
     transition-all duration-300 ease-out ${
       sidebar.isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
     }`}
        ></span>
        <span
          className={`bg-neutral-600 block h-0.5 w-6 rounded-sm 
    my-0.5 transition-all duration-300 ease-out ${
      sidebar.isOpen ? "opacity-0" : "opacity-100"
    }`}
        ></span>
        <span
          className={`bg-neutral-600 block h-0.5 w-6 rounded-sm 
     transition-all duration-300 ease-out ${
       sidebar.isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
     }`}
        ></span>
      </button>
    </header>
  );
}
