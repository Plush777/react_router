import React from 'react';

//사용할 데이터.
const mydata = {
    plush: {
        name: 'Plush',
        description:'포켓몬'
    },
    gildong: {
        name: '홍길동',
        description: '전래동화의 주인공'
    }
};

const profiledata = ({ match }) => {
    const { username } = match.params;
    //match안에 들어있는 params 값 참조
    const profiledata = mydata[username];
    if (!profiledata){
        return <div>존재하지 않는 유저입니다.</div>
        //mydata에 있는 외의 값을 입력하면 존재하지 않는 유저입니다 출력.
    }
    return (
        <div>
            <h3>
                {username} ({profiledata.name})
            </h3>
            <p>{profiledata.description}</p>
        </div>
    );
};

export default profiledata;