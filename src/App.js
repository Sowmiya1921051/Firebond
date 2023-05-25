import React, { useState } from 'react';
import './App.css';
import Argument from './Components/Argument';
function App() {
  const [inputList, setInputList] = useState([{ arg: 'My arg', first: 'True' }]);
  const [content, setContent] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleInputChange = (index, event) => {
    const newList = [...inputList];
    newList[index].arg = event.target.value;
    setInputList(newList);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { arg: '', first: 'True' }]);
  };

  const handleChange = (index, event) => {
    const newList = [...inputList];
    newList[index].first = event.target.value;
    setInputList(newList);
    if (event.target.value === 'True') {
      setContent('True');
    } else {
      setContent('False');
    }
  };

  const handleSelectionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue === '') {
      setContent('undefined');
    } else if (selectedValue === 'Constant') {
      setContent('True');
    }
  };
  const options=[
    {value:"Constant",label:"Constant"},
    {value:"Argument",label:"Argument"},
    {value:"and",label:"and"},
    {value:"or",label:"or"},
  ]
  const renderFunction = () => {
    if (selectedOption === 'Constant') {
      return (
        <div>
          <select value={content} onChange={(event) => setContent(event.target.value)}>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </div>
      );
    } else if (selectedOption === 'Argument') {
      return "no";
    } else if (selectedOption === 'and') {
      return <Argument/>
    }
      else if (selectedOption === 'or') {
        return "hr";
    } else {
      return null;
    }
  };
  return (
    <div>
      {inputList.map((inputValue, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="new arg"
            value={inputValue.arg}
            onChange={(event) => handleInputChange(index, event)}
          />
          <select value={inputValue.first} onChange={(event) => handleChange(index, event)}>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </div>
      ))}

      <button onClick={handleAddClick}>+ add arg</button>

      <div>
        <select value={selectedOption} onChange={handleSelectionChange}>
         
          <option value="">Select..</option>
          {options.map((option)=>(
            <option key={option.value} value={option.value}> {selectedOption === option.value ?renderFunction()  :option.value}</option>
          ))}
         
        </select>
        <button onClick={() => setSelectedOption('')}>X</button>
      </div>
      
      <p>Result: {content}</p>
    </div>
  );
}

export default App;
