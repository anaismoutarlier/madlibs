import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Story from "./components/Story";
import { useState } from "react";
import { story, data } from "./data/story1";

function App() {
  const [values, setValues] = useState({});
  const [page, setPage] = useState(0);
  const handleSubmit = () => {
    setPage(1);
  };
  return (
    <div className="App">
      {
        page === 0 ?
        <Form
          data={data}
          isDisabled={Object.keys(values).length < data.length}
          setValues={setValues}
          values={values}
          handleSubmit={handleSubmit}
        />
        :
        <Story values={values} story={story}/>
      }
    </div>
  );
}

export default App;
