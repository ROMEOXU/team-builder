import React from 'react';
import './App.css';

export default function TeamForm (props){
    return(
        <div>
           {props.notes.map(e => (
        <div className="note" key={e.id}>
          <h2>{e.name}</h2>
          <p>{e.email}</p>
          <p>{e.role}</p>
        </div>
      ))}
        </div>
    );
}