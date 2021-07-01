import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { adddicFB } from "./redux/modules/dictionary"

const DicInfo = (props) => {
    const dispatch = useDispatch()
    const word_ref = React.useRef(null)
    const desc_ref = React.useRef(null)
    const example_ref = React.useRef(null)
    const addWord = () => {

        const words = {
            id:"dasdd",
            word:word_ref.current.value,
            desc:desc_ref.current.value,
            example:example_ref.current.value,
        };
        dispatch(adddicFB(words));
        props.history.push('/');
    }    
  useEffect(()=> {
    //   console.log(props)
  },[])

    return(
    <React.Fragment>
    <Infobox>
        <span>단어</span>
        <input type="text" placeholder="단어를 입력해주세요." ref={word_ref}/>
    </Infobox>
    <Infobox>
        <span>설명</span>
        <input type="text" placeholder="설명를 입력해주세요." ref={desc_ref}/>
    </Infobox>
    <Infobox>
        <span>예시</span>
        <input type="text" placeholder="예시를 입력해주세요." ref={example_ref}/>
    </Infobox>
    <Infobtn onClick={addWord}>추가하기</Infobtn>
    </React.Fragment>
    )
}

const Infobox = styled.div`
display : flex;
flex-direction:column;
background-color:white;
margin: 10px;
padding:10px;
& input {
    border: 1px solid black
}
`

const Infobtn = styled.button`
width: 90%;
margin: 10px;
padding:10px 0px;
background-color: rgb(255, 255, 255);
border: 1px solid white;
cursor:pointer;
&:hover{
    border:1px solid black;
}
`

export default DicInfo;