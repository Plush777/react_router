import React from 'react';
import { Route , Link, Switch , NavLink } from 'react-router-dom';
import first from './first';
import about from './about';
import './App.css';
import subprofile from './subprofile';
import history1 from './history1';
import { useHistory } from 'react-router-dom';
import test from './test';
import main from './main';

const App = () => {
  let history = useHistory();
    function handleBack(){
        history.goBack();
    }
    function handleForward(){
      history.go(1); //goForward = go(1) 똑같이 페이지를 앞으로 이동. 
                     /*go() : 괄호안에 숫자가 커질수록 이동하는 페이지도 많아짐.
                      ex) go(2) : 앞으로 2페이지 이동 , go(3) : 앞으로 3페이지 이동*/
    }
    function handleHome(){
      history.push('/');
    }
  return (
    <div>
      <div className="btnArea">
        <button type="button" onClick={handleBack} className="btnBack">뒤로</button>
        <button type="button" onClick={handleForward} className="btnForward">앞으로</button>
        <button type="button" onClick={handleHome} className="btnHome">첫 페이지로</button>
      </div>
      <ul className="linkArea">
        <li className="main">
            <Link to="/"></Link>
        </li>
        <li>
          <NavLink to="/first" activeStyle={{color:'white'}}>FIRST</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={{color:'white'}}>SECOND</NavLink>
          {/* Link : 클릭 시 다른주소로 이동시키는 컴포넌트. 
            a태그와 차이점은 a태그는 페이지를 아예 새로 불러오게됨. 렌더링된 컴포넌트도 전부
            새로 불러옴.
            하지만 Link는 history api를 사용하여 브라우저의 주소만 바꾸고 페이지는 불러오지않음.
          */}
        </li>
        <li>
          <NavLink to="/subprofile" activeStyle={{color:'white'}}>profile List</NavLink>
        </li>
        <li>
          <NavLink to="/history1" activeStyle={{color:'white'}}>history sample</NavLink>
        </li>
      </ul>
      <hr/>
      <Switch> {/* 첫번째로 매칭되는 path값을 가진 컴포넌트를 렌더링 시킴. */} 
        <Route path="/" exact component={main}/>
        <Route path="/first" exact component={first} />
        {/* exact={ture}: path가 /일 경우, / 뿐만 아니라 /로 시작하는 모든 URL 경로, 사실 상 가능한 모든 경우의 수의 경로와 매치가 되버림.
          그래서 exact prop이 없으면, 의도치 않게 first 컴포넌트가 URL 경로와 상관없이 항상 보여지게 됨. 
          하지만 exact prop을 붙여주면 URL 경로 값이 <Route>의 path 값과 완벽히 전체가 일치해야 매치되는 것으로 처리가 됨. */}
        <Route path="/about" component={about} />
        {/* <Route path="/profiledata/:username" component={profiledata}/> */}
        <Route path='/subprofile' component={subprofile}/>
        <Route path='/history1' component={history1}/>
        <Route path='/test' component={test}/>
        <Route 
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
          // location : 현재 페이지의 정보를 가지고 있음.
          />
      </Switch>
    </div>
  );
};

export default App;
