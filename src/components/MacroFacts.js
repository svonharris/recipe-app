import React from 'react';


const MacroFacts = (props) => {


    return (
            <p><b>{props.macro}: </b>{Math.round(props.total)} </p>

    );
}



export default MacroFacts;