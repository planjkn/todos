import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/esm/locale";


const DatePickerComponent = (props) => {
  console.log("////@#%$^%&^* " + props.startDate);

    // const [startDate, setStartDate] = useState(new Date());
    
    const ExampleCustomInput = ({ value, onClick }) => (
      <button className="example-custom-input" onClick={onClick}>
        {value}
      </button>
    );
    return (

      <DatePicker
        locale={ko}
        showPopperArrow={true}
        selected={props.startDate}
        onChange={date => {
          props.setStartDate(date);
          window.localStorage.setItem("date", JSON.stringify(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()))
          console.log("????????");
        }}
        customInput={<ExampleCustomInput />}
      />
    );
  };

  export default DatePickerComponent;