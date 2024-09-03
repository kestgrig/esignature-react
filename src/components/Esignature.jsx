import { useState } from 'react';
import style from './Esignature.module.css';
import Title from './Title'

function Esignature() {

  const [date, setDate] = useState("");
  const [text, setText] = useState("");

    function handleDateInput(params) {
        setDate(params.target.value)
    }

    function handleTextInput(params) {
        setText(params.target.value)
    }

    return (
    <div>
        <Title text={text}/>
        <Title text={date}/>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus inventore iste commodi maxime. Rerum, sapiente similique unde, facilis alias quis eos at maxime asperiores voluptatem officia sunt quaerat itaque fugit.</p>
        
        <input className={style.dateInput} type="date" value={date} onChange={handleDateInput}/>
        <input className={style.textInput}  type="text" value={text} onChange={handleTextInput}/>
        
    </div>
  )
}

export default Esignature;
