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
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading Data...</p>
      )}
    </div>
  );
}