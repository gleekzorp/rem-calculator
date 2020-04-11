import React, { useEffect } from 'react';
import RemResultDetails from './RemResultDetails';

const RemList = ({fontSize, sizesToConvert}) => {
    const oneRem = (100 / fontSize) / 100
    const renderResults = () => {
        return sizesToConvert.split(',').map((size) => {
            return (
                <RemResultDetails key={size} size={size} result={parseInt(size) * oneRem}/>
            )
        })
    }

    return (
        <div className="calc-results-wrapper">
            <ul>{fontSize ? renderResults() : null}</ul>
        </div>
    );
}
 
export default RemList;