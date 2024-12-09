import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  /*
  // to set the new data
  const [data, setData] = useState([])
  useEffect(() => {
   fetch('https://api.github.com/users/badmuffin')
   .then(response => response.json())
   .then(data => {
      console.log(data);
      setData(data)
   })
  }, [])
  */

  const data = useLoaderData()

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img className="mx-auto w-40" src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/badmuffin");
  return response.json();
};

// we have used second way so that when we put our cursor on the github navlink, it instantly fetch the data from the github api without even clicking on the github link
