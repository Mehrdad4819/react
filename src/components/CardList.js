import React from "react";
import Card from "./card";

const CardList = ({ robots }) => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {!robots.length
        ? [...Array(10)].map((_, index) => {
            return (
              <div
              key={index}
                className="bg-emerald-300 rounded-lg border border-emerald-500 py-2 px-2
                shadow-xl shadow-emerald-700 transition-all duration-300 ease-out
                hover:-translate-y-2 text-center gap-2 flex flex-col items-stretch"
              >
               <div className="w-48 h-48 rounded-lg bg-skleton"></div>
                <div>
                  <h2 className="font-semibold rounded bg-skleton  mb-2 text-lg w-full text-transparent">ssdadadaddd</h2>
                  <p className="w-full text-transparent rounded bg-skleton">dsadadadad</p>
                </div>
              </div>
            );
          })
        : robots.map((user, index) => {
            return <Card key={robots[index].id} robot={robots[index]} />;
          })}
    </div>
  );
};

export default CardList;
