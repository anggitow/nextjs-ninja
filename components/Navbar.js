import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-emerald-200 flex container-ninja py-4 justify-between font-nunito">
      <div className="flex">
        <Image src="/icon.png" width={40} height={40} />
        <h3 className="text-4xl">AW</h3>
      </div>
      <div className="flex gap-6 items-center md:gap-9">
        <Link href="/">
          <a className="hover:text-slate-600 cursor-pointer">Home</a>
        </Link>
        <Link href="/about">
          <a className="hover:text-slate-600 cursor-pointer">About</a>
        </Link>
        <Link href="/ninjas">
          <a className="hover:text-slate-600 cursor-pointer">Ninja List</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
