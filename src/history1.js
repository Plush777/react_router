import React from 'react';
import {useEffect} from 'react';
import { useHistory } from "react-router-dom";

/*history : 현재까지 이동한 url 경로들이 스택 형태로 담겨있음. 
주소를 임의로 변경하거나 되돌아갈 수 있게할 수 있다.*/
/*length , action , location , push , replace , go(n) , goBack() , goForward() , block 등이 있음. */
function history1(){
    let history = useHistory();
    function handleBack(){
        history.goBack();
    }
    function handleHome(){
        history.push('/');
    }
    useEffect(() => {
        console.log(history);
        const msg= history.block('정말 떠나실건가요?');
        return () => {
            msg();
        }
    }, [history]);
    return(
        <div>
            <button type="button" onClick={handleBack}>뒤로</button>   
            <button type="button" onClick={handleHome}>홈으로</button>
        </div>
    )
};

export default history1;