import React from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {
  
  
   const[searchTerm,setSearchTerm]=useState('');


  const updatedList=searchArray.filter((val)=>{
    //if(searchTerm==''){
     // return val=="";
    if(val.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
      return <li key={val.toString()}>{val}</li>
    }
    
  })

  
  return (
    <div id="main">
    
    <input type="text" placeholder='search...' onChange={event=>{setSearchTerm(event.target.value)}} />

        <h1>Result:--*--*++*-----</h1>




       { /*  } {searchArray.filter((val)=>{
          if(searchTerm==""){
            return val=="";
          }else if(val.toLocaleLowerCase().includes(searchTerm.toLowerCase())){
            return <li> {val}</li>

          }
        })}
      c*/}

     


      <ul>{updatedList}</ul>
      
    </div>
  )
}


export default App;
