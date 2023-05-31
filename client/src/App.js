import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    //If data fetched display members
    <div>
      {typeof data.members === "undefind" ? (
        <p>Loading....</p>
      ) : (
        data.members.map((member, i) => <p key={i}>{member}</p>)
      )}
    </div>
  );
}
