import Link from "next/link";

const NotFound = () => {
  return (
    <div className="font-nunito flex justify-center flex-col items-center">
      <h1 className="text-2xl md:text-4xl">404 | Page Not Found</h1>
      <Link href="/">
        <a className="bg-blue-400 text-white p-2 rounded-full mt-5 hover:bg-blue-600">
          Back to Home
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
