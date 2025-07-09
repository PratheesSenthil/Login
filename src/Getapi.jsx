import axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css'
import { CiSearch } from "react-icons/ci";


export default function Getapi() {
  const [data, setdata] = useState(null);
  const [error, seterror] = useState(null);
  const[search,setsearch] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      try {
        let url = "https://jsonplaceholder.typicode.com/todos";
        if(search) url+=`/${search}`
        const val = await axios.get(url);
        setdata(val.data);
        seterror(null)
      } catch {
        seterror("Error While Fetching Data...");
        setdata(null)
      }
    };
    getdata();
  }, [search]);

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Id to Search"
          className="search"
          onChange={(e) => setsearch(e.target.value)}
        />
        <span className="icon">
          <CiSearch size={25} />
        </span>
      </div>

      {error ? (
        <p style={{textAlign:'center',fontSize:'25px',fontWeight:'bolder'}}>{error}</p>
      ) : data ? (
        <div className="cards">
          <table>
            <thead style={{ fontSize: "large", fontWeight: "bolder" }}>
              <tr>
                <td>User Id</td>
                <td>Id</td>
                <td>Title</td>
                <td>Completion status</td>
              </tr>
            </thead>
            <tbody>
              {(Array.isArray(data) ? data : [data]).map((item, key) => (
                <tr key={key}>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    {item.completed ? (
                      <>
                        <button
                          style={{
                            backgroundColor: "lightgreen",
                            borderRadius: "5px",
                          }}
                        >
                          Completed
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          style={{
                            backgroundColor: "rgb(242, 116, 116)",
                            borderRadius: "5px",
                          }}
                        >
                          Incomplete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p style={{textAlign:'center',fontSize:'25px',fontWeight:'bolder'}}>Loading Data...</p>
      )}
    </div>
  );
}
