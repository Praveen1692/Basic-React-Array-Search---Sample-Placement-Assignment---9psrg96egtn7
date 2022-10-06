import React from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {
  const[searchTerm,setSearchTerm]=useState('');

  
   


  
  return (
    <div id="main">
     <h2>Search</h2>

       
        <input type="text" id="search-input" placeholder='search...' onChange={event=>{setSearchTerm(event.target.value)}} />

        <h1>Result:-</h1>
        <ul className="list">
        {searchArray.filter((user)=>{
          if(searchTerm==''){
            return user=="";
          }
          return user.toLowerCase().includes(searchTerm)
        }).map((user)=>{
          return <li>{user}</li>
        })}



</ul>


       
     


      
       

      
        
   
      
        
      
    
   
      
    </div>
  )
}


export default App;
