import React from 'react';
import shedulerTundan from "../assets/shedulerTandan.jpg";
import reactNative from "../assets/reactNative.jpg";
import maxresdefault from "../assets/maxresdefault.jpg";
import portfolio from "../assets/portfolio.jpg";
import scheduler from "../assets/scheduler.jpg";
import menu from "../assets/menu.jpg";


const Portfolio = () => {

    const portfolios = [
        {
          id: 1,
          src: shedulerTundan,
          
        },
        {
          id: 2,
          src: portfolio,
        },
        {
          id: 3,
          src: maxresdefault,
        },
        {
          id: 4,
          src: reactNative,
        },
        {
          id: 5,
          src: scheduler,
        },
        {
          id: 6,
          src: menu,
        },
      ];

//add button functionals pass to origin github projects
      const links = [
        {
          id: 1,             
          href: "https://dmitrystyle.github.io/portfolio",
        },
        {
          id: 2,
           href:  "https://github.com/Dmitrystyle/portfolio"  ,
        },
        {
          id: 3,
          href: "mailto:GlukhovDmitry@yandex.com",
        },
        {
          id: 4,
          href: "/src/assets/resume.pdf",         
        },
      ];
    




    return (
        <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Portfolio;