/* eslint-disable */

import React, { useState } from 'react';    //useState: 리액트에 있는 내장함수
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);   //[a, b] // ES6 destructuring 문법
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);   // 모달창을 켜고 닫는 스위치
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');


  // var 어레이 = [1, 2, 3, 4, 5];

  // var 뉴어레이 = 어레이.map(item => {
  //   return item * 2
  // });

  function 반복된UI() {
    var 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>);
    }

    return 어레이;
  }
    

  // let posts = '강남 고기 맛집'; 

  // function 제목바꾸기() {
  //   var newArray = [...글제목];    //deep copy를 해야함. deep copy는 서로 값 공유가 되지않고 새로운 복사본 생성.
  //   newArray[0] = '여자코트 추천';
  //   글제목변경( newArray );
  // }

  function newList() {
    var arrayCopy = [...글제목];
    arrayCopy.unshift(입력값);
    글제목변경( arrayCopy );
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={ 제목바꾸기 }>버튼</button> */}
      {
        글제목.map((글, i)=>{
          return (
          <div className="list" key={i}>
            <h3 onClick={ ()=>{ 누른제목변경(i) } }>{ 글 }<span onClick={()=>{ 따봉변경( 따봉 + 1 ) }}>👍{따봉}</span></h3>
            <p>2월 18일 발행</p>
            <hr/>
          </div>
          )
        })
      }

      <div className="publish">
        <input onChange={ (e)=>{ 입력값변경(e.target.value) } } />
        <button onClick={ ()=>{ newList() } }>저장</button>
      </div>



      {/* <input onChange={ (e)=>{ 입력값변경(e.target.value) } } /> */}

      {/* <button onClick={ ()=> { modal변경( modal == true ? false : true ) } }>버튼</button> */}
      <button onClick={ ()=> { modal변경( !modal ) } }>버튼</button>

      {
        modal === true 
        ? <Modal 누른제목={누른제목} 글제목={글제목} />
        : null 
      }
      

    </div>
  );
}

function Modal(props) {   // 부모에서 전달받은 props는 여기(props)에 다 들어있음(꼭 props일 필요는 없는데 가급적 props로...)
  return(
    <div className="modal">
      <h2>제목 { props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;