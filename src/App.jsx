import "./App.css";

// - subjects
// subject unit - priority
// 1unit -lowest priority, 3 units- highest priority
// units determine hoe frequestly the subject will appear on the table
// lunch time

function App() {
  const subjects = [
    {
      name: "csc211",
      unit: 3,
    },
    {
      name: "csc111",
      unit: 2,
    },
    ,
    {
      name: "csc511",
      unit: 1,
    },
    {
      name: "csc311",
      unit: 1,
    },
    {
      name: "csc205",
      unit: 3,
    },
    {
      name: "csc205",
      unit: 2,
    },
    {
      name: "csc205",
      unit: 2,
    },
    {
      name: "csc205",
      unit: 2,
    },
    {
      name: "csc205",
      unit: 1,
    },
    {
      name: "csc205",
      unit: 1,
    },
  ];
  const hoursPerweek = 30;
  const hourPerday = 6;
  const minPerPeriod = 30;

  const tt = subjects.map((subject) => {});
  return (
    <div className="App">
      {subjects.map((subject) => console.table(subject))}
    </div>
  );
}

export default App;
