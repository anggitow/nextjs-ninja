import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List</title>
      </Head>
      <div className="font-nunito">
        <h1 className="text-2xl mb-3">All Ninjas</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {ninjas.map((ninja) => (
            <div
              key={ninja.id}
              className="bg-slate-200 p-3 pl-7 rounded-lg hover:bg-slate-100 transition duration-150"
            >
              <Link href={"ninjas/" + ninja.id}>
                <a className="cursor-pointer">{ninja.name}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ninjas;
