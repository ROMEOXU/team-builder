import React,{useState} from 'react';
import TeamForm from './teamForm'
import './App.css';
import InputForm from './inputForm';

function App() {
 const [notes,setNotes] = useState(
   [{
     id:0,
    name:'romeo',
     email:'gmail',
     role:'frontend'
   }
   ]
 );
 const addNewNote = note => {
  const newNote = {
    id: Date.now(),
    name: note.name,
    email: note.email,
    role: note.role
  };
  setNotes([...notes, newNote]);
};
  
  return (
    <div className="App">
      <InputForm addNewNote={addNewNote}/>
      <TeamForm notes={notes}/>
      
    </div>
  );
}

export default App;
