
//----------*******Assignmnet for akshat gupta internship by manan saini
//********************************_**********-(((((((((***************))))))))) */

// import React from "react";
// import "./App.css";
// import HorizontalScroll from "react-scroll-horizontal";


// //here is the json data that is going to display and render 
// const jsonData = [
//   { name: "Abhishek", level: "Basic" },
//   { name: "Raja", level: "Basic" },
//   { name: "Tarun", level: "Intermediate" },
//   { name: "Mohan", level: "Intermediate" },
//   { name: "Mohan", level: "Advanced" },
  
  
// ];

// function App() {
//   return (
//     <div className="App">
//       <HorizontalScroll>
//         {jsonData.map((item, index) => (
//           <div key={index} className={`main bg${index + 1}`}>
//             <h1>{`Name: ${item.name}, Level: ${item.level}`}</h1>
//           </div>
//         ))}
//       </HorizontalScroll>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import HorizontalScroll from "react-scroll-horizontal";

const jsonData = [
  { name: "Abhishek", level: "Basic" },
  { name: "Tarun", level: "Intermediate" },
  { name: "Mohan", level: "Advanced" },
  { name: "Mohan", level: "Intermediate" },
  { name: "Raja", level: "Basic" },
];

function App() {
  //here i group athletes by level as basic, intermeidate and advanced
  const groupedData = jsonData.reduce((acc, athlete) => {
    acc[athlete.level] = acc[athlete.level] || [];
    acc[athlete.level].push(athlete);
    return acc;
  }, {});
//here the  object is created by reducing the jsonData array.
  return (
    <div className="App">
      <HorizontalScroll>
        {Object.entries(groupedData).map(([level, athletes], index) => (
          <div key={index} className={`main bg${index + 1}`}>
            <h1>{level}</h1>
            <ul>
              {athletes.map((athlete, subIndex) => (
                <li key={subIndex}>{athlete.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </HorizontalScroll>
    </div>
  );
}

export default App;

