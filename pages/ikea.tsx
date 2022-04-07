import type { NextPage } from "next";

const Ikea: NextPage = () => {
  return (
    <div className="h-screen bg-slate-300">
      <div className="bg-white p-5">
        <div className="flex justify-end">
          <button className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
        <div className="m-auto mb-7 h-72 w-72 ">
          <img src="/item.png" className="object-contain" />
        </div>
        <div className="space-y-6">
          <div className="flex flex-col">
            <span className="font-bold underline">FABRIKÖR ファブリコール</span>
            <span className="text-gray-600">コレクションケース57x150 cm</span>
            <span className=" text-2xl font-extrabold">¥ 21,990</span>
          </div>
          <div className="flex justify-between">
            <div className="space-y-2">
              <span className="text-sm">その他の色</span>
              <div className=" bottom-0 right-4 space-x-2">
                <button className="h-5 w-5 rounded-full bg-black ring-black ring-offset-2 transition focus:ring-2"></button>
                <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2"></button>
                <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2"></button>
              </div>
            </div>
            <div className="flex items-end ">
              <button className="rounded-full bg-blue-800 p-2 shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ikea;
