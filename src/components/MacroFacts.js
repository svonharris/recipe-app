import React from 'react';


const MacroFacts = (props) => {


    return (
            <p>{Math.round(props.total)} {props.macro} </p>

    );
}



export default MacroFacts;