import React from 'react';
import qs from 'qs';

const about = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix:true //문자열 형태를 객체 형태로 변환.
    });
    const detail = query.detail === 'true'; 
    //about 컴포넌트에서 search 값에 있는 detail값을 받아와서 해당 값이 true면 추가정보를 보여줌.
    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터 사용해보기.</p>
            {detail && <p>리액트 라우터 쿼리받아오기...</p>}
            {/* /about?detail=true */}
        </div>
    );
};

export default about;