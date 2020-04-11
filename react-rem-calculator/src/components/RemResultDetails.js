import React from 'react';

const RemResultDetails = ({size, result}) => {
    return (
        <li>{`${size}px = ${result}rem`}</li>
    );
}
 
export default RemResultDetails;