import Head from "next/head";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const DetailNinja = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Detail</title>
      </Head>
      <div className="font-nunito">
        <Link href="/ninjas">
          <a className="text-sm bg-slate-100 px-3 py-1 rounded">Back</a>
        </Link>
        <h1 className="text-2xl my-3">Detail Ninja</h1>
        <table className="border-collapse border border-slate-400">
          <tbody>
            <tr>
              <th className="border border-slate-300 p-2 px-4">Name</th>
              <td className="border border-slate-300 p-2 px-4">{ninja.name}</td>
            </tr>
            <tr>
              <th className="border border-slate-300 p-2 px-4">Email</th>
              <td className="border border-slate-300 p-2 px-4">
                {ninja.email}
              </td>
            </tr>
            <tr>
              <th className="border border-slate-300 p-2 px-4">Phone</th>
              <td className="border border-slate-300 p-2 px-4">
                {ninja.phone}
              </td>
            </tr>
            <tr>
              <th className="border border-slate-300 p-2 px-4">Website</th>
              <td className="border border-slate-300 p-2 px-4">
                {ninja.website}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DetailNinja;
