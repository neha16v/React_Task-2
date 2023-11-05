import React, { createContext, useEffect, useState } from 'react';
import Allroutes from './Components/Allroutes';

export const myContext = createContext();
const getlocal = () => {
  let lst = localStorage.getItem("list")
  if (lst) {
      return JSON.parse(localStorage.getItem("list"))
  }
  else {
      return []
  }
}
const getlocall = () => {
  let lstt = localStorage.getItem("listt")
  if (lstt) {
      return JSON.parse(localStorage.getItem("listt"))
  }
  else {
      return []
  }
}
const App = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [list, setList] = useState(getlocal());
  const [titlee, setTitlee] = useState("")
  const [task, setTask] = useState("")
  const [listt, setListt] = useState(getlocall());
  const[isadd,setIsadd]=useState(false)
  useEffect(()=>{
    setList(getlocal())
    setListt(getlocall())
    console.log("iam called");
  },[isadd])

  return (
    <div>
      <myContext.Provider value={{title,setTitle,desc,setDesc,list,setList,titlee,setTitlee,task,setTask,listt,setListt}}>
        <Allroutes isadd={isadd} setIsadd={setIsadd}/>
      </myContext.Provider>
    </div>
  );
};

export default App;
