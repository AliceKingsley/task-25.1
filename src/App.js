import './App.css';
import { Chart } from "react-google-charts";

const data = [
  ["Browser", "Percentage"],
  ["Google Chrome", 64.92],
  ["Apple Safari", 9.75],
  ["Microsoft Edge", 9.56],
  ["Mozilla Firefox", 9.41],
  ["Opera", 2.41],
  ["Other", 3.95],
];

const options = {
  title: "Статистика использования браузеров в 2021 году",
};

function App() {
  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"80vw"}
      height={"500px"}
    />
    </div>
  );
}

export default App;