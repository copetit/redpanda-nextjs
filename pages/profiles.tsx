import type { NextPage } from "next";

const Profiles: NextPage = () => {
  return (
    <div className="grid h-screen gap-2 bg-slate-400 p-10 lg:grid-cols-2 xl:grid-cols-3 ">
      <div className="relative flex h-48 items-center justify-between rounded-3xl bg-white p-4 shadow-xl">
        <div className="m-2 h-28 w-28 flex-shrink-0 rounded-full bg-blue-300"></div>
        <div className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          quam, labore magnam unde itaque totam doloremque facere voluptates
          voluptate velit.
        </div>
        <div className="absolute bottom-0 right-4 space-x-2">
          <button className="h-5 w-5 rounded-full bg-black ring-black ring-offset-2 transition focus:ring-2"></button>
          <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2"></button>
          <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2"></button>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
