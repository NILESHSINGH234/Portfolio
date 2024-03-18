import React from "react";
import { projectsData } from "../data/data";

const Projects = () => {
  return (
    <section className="min-h-[90vh] p-4 pb-8 Project">
      <p
        className="text-3xl text-green-500 md:text-4xl font-bold text-center py-[40px]"
        data-aos="fade-down"
      >
        My Projects
      </p>
      <div
        className="flex gap-5 justify-center  flex-wrap mb-5"
        data-aos="fade-up"
      >
        {projectsData.map((item) => (
          <div
            key={item.id}
            className="bg-[#212222] p-2 rounded-md shadow-md shadow-black w-[70%] max-w-[400px] md:max-w-[350px] h-[300px] relative group"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
          <h1>{item.title}</h1>
         
            <div className="p-3 absolute top-0 bottom-0 left-0 right-0 bg-[#2f3030] bg-opacity-100 opacity-0 shadow-md shadow-black text-white group-hover:opacity-100 transition hover:border-8 border-black rounded-md ease-in duration-1000 flex items-center justify-center">
              <div className="h-full w-full flex flex-col gap-8 items-center justify-center">
                <h3 className="font-bold text-sm  sm:text-xl">{item.title}</h3>
                <div className="flex justify-center gap-8 items-center w-full">
                  <a
                    className="px-6 py-2 border-2 border-green-500 hover:scale-110 rounded-3xl text-white font-semibold"
                    href={item.liveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className="px-6 py-2 border-2 border-green-500 hover:scale-110 rounded-3xl text-white font-semibold"
                    href={item.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            <p>{item.details}</p>
            <img src={item.cover}></img>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
