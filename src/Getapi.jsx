import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Getapi() {
  const { id } = useParams();
  const [data, setdata] = useState(null);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      try {
          let url = "https://jsonplaceholder.typicode.com/todos"
          if(id) url+=`/${id}`
          const val = await axios.get(url);
          setdata(val.data);
      } catch {
        seterror("Error While Fetching Data");
      }
    };
    getdata();
  }, []);

  return (
    <div>
      {error ? (
        error
      ) : data ? (
        <div className="cards">
          <table>
            <thead style={{fontSize:'large',fontWeight:'bolder'}}>
              <tr>
                <td>User Id</td>
                <td>Id</td>
                <td>Title</td>
                <td>Completion status</td>
              </tr>
            </thead>
            <tbody>
              {data.map((item,key)=>(

                <tr>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.completed?(<><button style={{backgroundColor:'lightgreen',borderRadius:'5px'}}>Completed</button></>):(<><button style={{backgroundColor:'rgb(242, 116, 116)',borderRadius:'5px'}}>Incomplete</button></>)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      ) : (
        <p>Loading Data...</p>
      )}
    </div>
  );
}