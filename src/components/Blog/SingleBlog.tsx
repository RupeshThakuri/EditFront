import { Blog } from "@/types/blog";
import Image from "next/image";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph } = blog;
  return (
    <>
      <div>
        <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="group flex flex-col gap-1 rounded-lg p-5 text-gray" tabIndex={1}>
            <div style={{ width: '320px' }} className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
              <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                <Image src={image} alt="Juliet Smith" layout="fill" objectFit="cover" className="animate-fade-in" />
              </div>
              <div style={{ backgroundColor: 'Gray', width: '70%' }} className="p-3 rounded-xl opacity-60 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100 group-hover:block hidden">
                <h1 className="text-lg font-bold text-white">{title}</h1>
                <h2 className="text-m font-light text-gray-200">{paragraph}</h2>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default SingleBlog;
