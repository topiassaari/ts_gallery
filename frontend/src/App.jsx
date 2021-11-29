import { useState } from "react";
import "./App.css";
import defaultService from "./services/defaultService";
function App() {
  const [val, setVal] = useState(0);
  const [returnedVal, setReturnedVal] = useState(null);

  const createVal = (event) => {
    event.preventDefault();
    defaultService.create(val).then((returned) => {
      console.log(returned.val);
      setVal(0);
      setReturnedVal(returned.val);
    });
  };

  const handleInputChange = (event) => {
    event.persist();
    setVal(event.target.value);
  };

  return (
    <div className="App">
      <form style={{ padding: "30px" }} onSubmit={createVal}>
        <label>
          random value:
          <input
            type="text"
            value={val}
            name="val"
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>value from server: {returnedVal}</p>
    </div>
  );
}

export default App;
