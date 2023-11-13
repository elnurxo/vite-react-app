import data from "../data.js";

const Students = () => {
  //js code
  let sumAge = data.reduce((prevValue,currentValue)=>{
    return prevValue+currentValue.age
  },0);
  return (
    <>
      <h2>Students List</h2>
      <ul>
        {data.sort((a,b)=>a.name.localeCompare(b.name)).map((student) => {
          return <li key={student.id}>{student.name}</li>;
        })}
      </ul>
      <span>average Age: {sumAge/data.length}</span>
    </>
  );
};

export default Students;
