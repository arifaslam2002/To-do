import "./lists.css"; //importing the css
import React, { useState } from "react"; // importing the libary for the state which is from the react

const Todolist = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  // both above are two states first is string reciving 2 is array input-is the state varible,set- state function
  //by only setting the statefuntion we can modify the state varible
  const onInput = (e) => {
    setInput(e.target.value);
  };
  //these are function used for handling the events in below e-is the value getting as the params in function
  // but e is object type can't used directly So we use e.target.value we the exacat value whic given by the users
  //those are axissed by the event named as  the onchnage()
  const onAdd = () => {
    //this ev handler for the adding the task
    { 
        if(input !== ""){
            setTasks([...tasks, input]);
            //...is the spread opertor used to get out the items inside thatr array 
            //here we are setting back to same array + new inpt to it for showing all the input dow to down 
            //if without ...this only gets the current value in the ui
            setInput("");
            //for setting inpt empty after taking the input value
        }
    }
  };

  const onDelete = (index) => {
    //evt for delete button working with help of the index passed as the  params in the onclick event
    //also we call the parama as wished name 
    const newArr = [...tasks];
    //here the ne aar is needed because we can't do any thing directly with ourorginall array we set in new arry
    //then we intially with  spred with the tasks[] elements inside it
    newArr.splice(index, 1);
    //after the new aary is went for the splice() ther 2 value is ther 1-form which index,2-count value /how many
    //we neeed only 1 so set as the value 1
    setTasks(newArr);
    //assing new[] to orginal one
  };
  return (
    <div className="Container">
      <div className="input-div">
        <input
          className="input"
          type="text"
          placeholder="Enter task"
          value={input}
          onChange={onInput}
        />
        <button className="btn" onClick={onAdd}>
          Add Task
        </button>
      </div>

      <div className="taskdiv">
        <div className="taskdiv-title">
          <p>Tasks</p>
        </div>
        <div className="taskdiv-list">
    {tasks.length === 0 ? (
        <p className="no-item">No tasks yet!!!</p>
    ) :( tasks.map((item, index) => (
            // we uses the map function array to get back the element easier than the for loop
            // here the item is name which the elements to taken ,index the index number which is predifiened one
          <div className="task-item">
              <p>{item}</p>
              {/* by this we call the elemts */}
              <button className="delete-btn" onClick={() => onDelete(index)}>
                Delete Task
              </button>
            </div>
          )))}
        </div>
      </div>
    </div>
  );
};

export default Todolist;
