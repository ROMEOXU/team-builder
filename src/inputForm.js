import React,{useState} from 'react';


export default function InputForm(props){
   
   const [note,setNote] = useState({
       name:'',
       email:'',
       role:''
   });
   const handleChanges = e =>{
      setNote({...note,[e.target.name]:e.target.value})
   };
   const submitForm = e =>{
       e.preventDefault();
       props.addNewNote(note);
       setNote({
        name:'',
        email:'',
        role:''
       })

   }
   
    return (
        
         <form onSubmit={submitForm}>
            <label htmlFor = 'name'>Name</label>
            <input id = 'name' name = 'name' type ="text" placeholder = 'name' onChange={handleChanges} value={note.name}/>
            <label htmlFor = 'email'>Email</label>
            <input id = 'email' name='email' type ='text' placeholder = 'email' onChange={handleChanges} value={note.email}/>
            <label htmlFor = 'role'>Role</label>
            <input id = 'role' name='role' type = 'text' placeholder = 'role' onChange={handleChanges} value={note.role}/>
            <button type = 'submit'>Add Team Member</button>
         </form>
        
    )
}