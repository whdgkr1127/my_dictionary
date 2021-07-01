import React from "react";
import styled from "styled-components"
const NotFound = (props) => {
    return (
        <Notbox>
            <span>잘못된 페이지 입니다. <br /></span>
            <Notbtn onClick={() =>{
                props.history.goBack()
            }
            }>뒤로가기</Notbtn>
        </Notbox>
    )
}

const Notbox = styled.div`
    margin : 20px;
`
const Notbtn =  styled.button`
    margin-top: 20px;
`
export default NotFound;