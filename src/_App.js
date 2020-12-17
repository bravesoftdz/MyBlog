import React, { useState } from 'react';
import './_App.css';

function _App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState(0);
  let [modalShow, setModalShow] = useState(false);
  let [pushedBtn, setPushedBtn] = useState(0);

  return(
    <>
      <div className="banner">
        <h3>개발 Blog</h3>
      </div>
      
      {
        title.map((title, i) => {
          return (
          <div className="list">
            <h3 onClick={ ()=>{ setPushedBtn(i) } }>{ title }<span onClick={()=>{ setLike(like + 1) }}>👍{ like }</span></h3>
            <p>2월 18일 발행</p>
            <hr/>
          </div>
          )
        })
      }

      <button onClick={ ()=>{ setModalShow( !modalShow ) } }>버튼</button>

      {
        modalShow === true
        ? <Modal title={title} pushedBtn={pushedBtn} />
        : null
      }
      

    </>
  )
}


function Modal(props) {
  return(
    <div className="nodal">
      <h3>{props.title[props.pushedBtn]}</h3>
      <p>머머머</p>
      <p>어어어</p>
    </div>
  )
}

export default _App;