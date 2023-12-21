"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const myfun = async () => {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=trending&api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=5`
      );
      const datas = await res.data;
      setData(datas.data);
      console.log("function k res data", datas.data);
      console.log(" data", data);
      return datas.data;
    };
    console.log("bhar wala data", data);
  }, []);

  // const getPreviousPage = (e) => {
  //   e.preventDefault();
  // };
  // const getNextPage = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <div className="parentDiv">
        <div className="searchDiv">
          <form>
            <input
              type="text"
              placeholder=" Article name or keywords..."
              className="search"
            />
            <button className="btn">Search</button>
          </form>
        </div>

        <div className="cards">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s"
              alt=""
            />
            <div>
              <p>Arjun SArkar</p>
              <p>@arjunsarkar</p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s"
              alt=""
            />
            <div>
              <p>Arjun SArkar</p>
              <p>@arjunsarkar</p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s"
              alt=""
            />
            <div>
              <p>Arjun SArkar</p>
              <p>@arjunsarkar</p>
            </div>
          </div>
        </div>

        <div className="pagination-btn">
          {/* <button onClick={getPreviousPage}>Previous</button> */}
          <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          {/* <button onClick={getNextPage}>Next</button> */}
        </div>
      </div>
    </>
  );
};

export default page;
