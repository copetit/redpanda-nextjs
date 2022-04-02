import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="mh-screen bg-gray-200 p-10">
      <div className=" grid max-w-7xl place-items-center gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {/* Card */}
        <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="flex justify-center bg-blue-200 ">
            <a className="absolute top-2 left-2 rounded-3xl bg-[#3ea8ff] py-1 px-2 text-xs font-bold text-white">
              TECH
            </a>
            <div className="p-9 text-5xl">🦾</div>
          </div>
          <div className="space-y-4 p-4">
            <div className="mb-6 text-lg font-bold text-gray-500">
              Next.js : CSR SSG SSRについて
            </div>
            <div className="space-x-2 leading-3">
              <a className="rounded-md bg-gray-200 py-1 px-2 text-xs font-light text-gray-500">
                React
              </a>
              <a className="rounded-md bg-gray-200 py-1 px-2 text-xs font-light text-gray-500">
                JavaScript
              </a>
              <a className="rounded-md bg-gray-200 py-1 px-2 text-xs font-light text-gray-500">
                TailwindCSS
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src="/cat.jpg"
                width={28}
                height={28}
                className="rounded-full"
                alt="profile"
              />
              <div className="space-y-1">
                <div className="text-xs">mini redpanda</div>
                <div className="text-xs text-gray-500">
                  5日前・2min read ♥️2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
