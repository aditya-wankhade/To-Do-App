 "use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [Compleated, setCompleated] = useState(false);
  const [mainTask, setmainTask] = useState([]);

  let renderdTask = <h2>Thair is no Task Here</h2>;
  const deleteHandler = (i) => {
    let copyMainTask = [...mainTask];
    copyMainTask.splice(i, 1);
    setmainTask(copyMainTask);
   
  };

  if (mainTask.length > 0) {
    renderdTask = mainTask.map((e, i) => {
      return (
        <li
          key={i}
          className={`flex justify-around items-center transition-all duration-1000 ${
            Compleated ? " bg-green-300" : " bg-transparents"
          }`}
        >
          <div className=" my-3 w-2/3">
            <h4 className="text-2xl font-bold"> {e.title}</h4>
            <h6 className="text-xl font-semibold"> {e.desc}</h6>
          </div>
          <div className="flex gap-8">
            <button
              className="bg-red-800 text-white font-bold px-5 py-2 text-lg rounded-lg"
              onClick={() => {
                deleteHandler(i);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                setCompleated(true);
              }}
              className={`bg-green-500 text-white font-bold px-5 py-2 text-lg rounded-lg ${
                Compleated ? "hidden" : "  block"
              } `}
            >
              Compleated
            </button>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-fuchsia-400 text-5xl font-bold text-center py-8 text-white tracking-widest first-letter:text-yellow-200 first-letter:font-serif italic">
        Aditya's Todo List
      </h1>
      <div>
        <form
          className="flex justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
            setmainTask([...mainTask, { title, desc }]);
            console.log(mainTask);
            console.log(title);
            console.log(desc);
            settitle("");
            setdesc("");
          }}
        >
          <input
            type="text"
            placeholder="Enter your task"
            className="outline-none border-2 border-zinc-700 px-6 py-2 placeholder:text-2xl text-2xl m-5"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter your task"
            className="outline-none border-2 border-zinc-700 px-6 py-2 placeholder:text-2xl text-2xl m-5"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button className=" bg-purple-400 px-7 py-3 text-white font-bold text-lg">
            Add
          </button>
        </form>
        <div>
          <ul className="bg-fuchsia-100 p-7">{renderdTask}</ul>
        </div>
      </div>
    </>
  );
};

export default page;


