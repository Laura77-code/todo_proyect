import React from 'react';
import './TodoItem.css';
import { useState } from 'react';
//import { CheckEmoji } from '../CheckEmoji/CheckEmoji.js';


function TodoItem(props){
    
    const propsCompleted = props.onComplete;
    const [isChecked, setIsChecked] = useState(false);

    function handleClick() {
      if(isChecked===true){
          propsCompleted(false);
          setIsChecked(!isChecked);
          console.log('completed: ', propsCompleted );
          isChecked ? console.log('1.', true) : console.log(false); 
      }else{
          propsCompleted(true);
          setIsChecked(!isChecked);
          isChecked ? console.log(true) : console.log('2.', false); 
      }
      
    }
    
    return(
        <li className="TodoItem">
            <span 
            onClick={handleClick}
            className= {` Icon-check ${isChecked===true ? "Icon-check--active": ""}`}
            >
                √
            </span>
            <p className={`TodoItem-p ${isChecked===true ? 'TodoItem-p--complete' : ''}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export {TodoItem};