import React, {useEffect} from 'react';

const test = (props) => {
    useEffect(()=> {
        console.log(props);
    }, [])
    return(
        <h1>TEST</h1>
    )
}

export default test;