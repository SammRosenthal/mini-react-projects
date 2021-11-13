import "./App.css";
import ReactSelect, { components } from "react-select";

function App() {
  const temp = new Array(10).fill(
    <components.Option>
      <div>test</div>
    </components.Option>
  );
  console.log(temp);
  return (
    <div className="flex flex-row w-screen">
      <ReactSelect options={temp} className="w-36 m-2"></ReactSelect>
      <ReactSelect options={temp} className="w-36 m-2"></ReactSelect>
      <ReactSelect options={[]} className="w-36 m-2"></ReactSelect>
      <ReactSelect options={[]} className="w-36 m-2"></ReactSelect>
      <ReactSelect options={[]} className="w-36 m-2"></ReactSelect>
    </div>
  );
}

export default App;
