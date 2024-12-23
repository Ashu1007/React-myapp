import React, { useEffect, useState } from "react";

const FetchApi = () => {
  let [dbData, setDbData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let resp = await fetch("https://api.github.com/users");
      let data = await resp.json();
      //   console.log(data);//[{},{},{}......] 10s
      setDbData(data); //[{},{},{}......]
    }
    fetchData();
  }, []);

  console.log(dbData);

  return (
    <div>
      <h1>Fetch API</h1>
      {dbData?.map((ele) => {
        return (
          <section key={ele.id}>
            <h1>{ele.login}</h1>
            <img src={ele.avatar_url} height={200} width={200} />
          </section>
        );
      })}
    </div>
  );
};

export default FetchApi;