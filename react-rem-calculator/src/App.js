import React, {useState} from 'react';
import RemForm from './components/RemForm';
import RemList from './components/RemList';

function App() {
  const [fontSize, setFontSize] = useState('')
  const [sizesToConvert, setSizesToConvert] = useState('')

  const handleFormSubmission = (fontSize, sizesToConvert) => {
    setFontSize(fontSize)
    setSizesToConvert(sizesToConvert)
  }
  return (
    <div className="App">
      <RemForm handleFormSubmission={handleFormSubmission}/>
      <RemList fontSize={fontSize} sizesToConvert={sizesToConvert}/>
    </div>
  );
}

export default App;
