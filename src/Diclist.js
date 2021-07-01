import React,{ useEffect }from "react";
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux";
// import {loaddictionaryFB} from "./redux/modules/dictionary"

const Diclist = (props) =>{

    
  

    const _dic_list = useSelector((state) => state.dictionary.list);
    

    console.log(_dic_list)


    return(
        <Addbox>
            {_dic_list && _dic_list.map((list, index) => {
                    return(
                        <Addboxs key={index} onClick={()=> {
                            props.history.push("/detail/"+index)
                        }}>
                        <span>단어</span>
                        <p>{list.word}</p>
                        <span>설명</span>
                        <p>{list.desc}</p>
                        <span>예시</span>
                        <p style={{color:"blue"}}>{list.example}</p>
                        </Addboxs>
                    )
            })}

        </Addbox>
    ) 

};

const Addbox = styled.div`
height: 60vh;
  overflow-x: hidden;
  overflow-y: auto;
`

const Addboxs = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
border-radius: 10px;
background-color:white;
height:120px;
margin:20px 20px;
font-size: 5px;
padding:10px;
& span{
    text-decoration:underline;
}
`

const Plus = styled.button`
background-color: white;
position:absolute;
bottom:20px;
right:10px;
padding:15px 20px;
border-radius: 50%;
`
export default (Diclist);