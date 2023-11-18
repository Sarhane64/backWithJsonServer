import { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default App;
