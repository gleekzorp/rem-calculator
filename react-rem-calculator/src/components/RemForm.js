import React, {useState} from 'react';

const RemForm = ({handleFormSubmission}) => {
    const [fontSize, setFontSize] = useState('')
    const [sizesToConvert, setSizesToConvert] = useState('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleFormSubmission(fontSize, sizesToConvert)
    }
    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="font-size-wrapper">
                <div>Choose your &lt;HTML&gt; font-size (px)</div>
                <input
                    type="number"
                    onChange={(e) => {setFontSize(e.target.value)}}
                    value={fontSize}
                    />
            </div>
            <div className="sizes-to-convert-wrapper">
                <div>px sizes to convert</div>
                <input
                    type="text"
                    onChange={(e) => {setSizesToConvert(e.target.value)}}
                    value={sizesToConvert}
                />
            </div>
            <div className="calc-button-wrapper">
                <button type="submit">Calculate</button>
            </div>
        </form>
    );
}
 
export default RemForm;