import "./App.css";

// - subjects
// subject unit - priority
// 1unit -lowest priority, 3 units- highest priority
// units determine hoe frequestly the subject will appear on the table
// lunch time

//data needed
//subjects - name unit
//starttimee
//end time
//perPeriod

function App() {
  //Constants
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
  const startTime = 8.0;
  const endTime = 14;
  const perPeriod = 0.3;
  const noOfPeriod = 8;

  let table = {};
  let Header = [];

  const days = ["Moday", "Tuesday", "wednesday", "thursday", "friday"];
  const generateTT = () => {
    for (let i = startTime; i <= endTime; i++) {
      Header.push(i + perPeriod);
    }
    const firstPriority = subjects.filter((sub) => sub.unit === 3);
    console.log(firstPriority);

    const secondPriority = subjects.filter((sub) => sub.unit === 2);
    console.log(secondPriority);

    const thirdPriority = subjects.filter((sub) => sub.unit === 1);
    console.log(thirdPriority);

    let subjects1 = [];
    let subjects2 = [];
    let subjects3 = [];
    let subjects4 = [];
    let subjects5 = [];

    let finalSubject = [subjects1, subjects2, subjects3, subjects4, subjects5];

    for (let i = 0; i < firstPriority.length; i++) {
      finalSubject.forEach((fsub) => fsub.push(firstPriority[i++]));
    }
    for (let i = 0; i < secondPriority.length; i++) {
      finalSubject.forEach((fsub) => fsub.push(secondPriority[i++]));
    }
    for (let i = 0; i < thirdPriority.length; i++) {
      finalSubject.forEach((fsub) => fsub.push(thirdPriority[i++]));
    }

    console.log(finalSubject);
    for (let j = 0; j < days.length; j++) {
      for (let i = 0; i < subjects.length; i++) {
        table[days[j]] = [finalSubject[j]];
      }
    }
    console.table(table);
    // console.log(table);
  };
  generateTT();

  return (
    <div className="App">
      hwll
      {/* {subjects.map((subject) => console.table(subject))} */}
    </div>
  );
}

export default App;
