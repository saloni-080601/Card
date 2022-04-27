import React from 'react';
import { useState } from 'react';

const Fields = () => {
  
    const [ssnValues, setValue] = useState({
      ssn1: "",
      ssn2: "",
      ssn3: "",
      ssn4: ""
    });
    <Card value={ssnValues.ssn1}/>
    return {
      handleChange: e => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
        if (value.length >= maxLength) {
          if (parseInt(fieldIndex, 10) < 4) {
            const nextSibling = document.querySelector(
              `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`  
            );
            if (nextSibling !== null) {
              nextSibling.focus();
            }
          }
        }
        
        setValue({
          ...value,
          [`ssn${fieldIndex}`]: value
        });
        
      }
    };
  };
  


function Card(props) {
  const [submitting, setSubmitting] = useState(false);
  const onsubmitHandler = event => {
    event.preventDefault();
   setSubmitting(true);
 }
 const onClear=event=>{
  setSubmitting(
    false
  )
 }
   const { handleChange } = Fields();

    return (
      <>
      <form className='form '>
      <input
          type="tel"
          name="ssn-1"
          className='size'
          maxLength={4}
          value={props.ssn1}
          onChange={handleChange} />
        <input
          type="tel"
          name="ssn-2"
          className='size'
          maxLength={4}
          value={props.ssn2}
          onChange={handleChange} />
        <input
          type="tel"
          name="ssn-3"
          className='size'
          maxLength={4}
          value={props.ssn3}
          onChange={handleChange} />
        <input
          type="tel"
          name="ssn-4"
          className='size'
          maxLength={4}
          value={props.ssn4}
          onChange={handleChange} />
          <br/>
          <button className='btn'onClick={onsubmitHandler}  type='submit'> submit</button>
      </form>
      {submitting &&
       <div><ul>
       <li className='card'>
         <p>{props.value}</p>
         <button className='btn-2' onClick={onClear}>clear</button>
       </li>
     </ul></div>
     }  
      </>
  )
}

export default Card
