import React from 'react';
import { Link , Route } from 'react-router-dom';
import profiledata from './profiledata';

//서브라우트 컴포넌트
// 서브라우트 (중첩 라우트) : 라우트 내부의 라우트를 또 만드는것.
const subprofile = () => {
    return (
        <div>
            <h3>유저목록</h3>
            <ul>
                <li>
                    <Link to='/subprofile/plush'>plush</Link>
                </li>
                <li>
                    <Link to='/subprofile/gildong'>gildong</Link>
                </li>
                {/* profiledata 컴포넌트에 있는 데이터를 subprofile 컴포넌트로 연결.*/}
            </ul>

            <Route path='/subprofile' exact render={() => <div>유저를 선택해주세요.</div>} />
            {/* exact={true} -> exact 로 축약해서 작성가능. */}
            {/* render VS component : 특정 컴포넌트에 데이터를 전달 (props) 하고 싶을 때, component 대신,
                render 사용. 
                -> component , render 둘 중 아무거나 사용해도 실행결과는 똑같지만 component는 
                렌더링 할때마다 컴포넌트가 새롭게 생성되기 때문에 비효율적임.
                * 존재하고 있던 컴포넌트를 언마운트 (삭제) 하고, 새로운 컴포넌트와 함께 새롭게 마운트 (생성)하게 됨. 
            */}
            <Route path='/subprofile/:username' component={profiledata} />
        </div>
    );
};

export default subprofile;