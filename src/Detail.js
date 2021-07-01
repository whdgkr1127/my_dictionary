import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { deletedicFB } from "./redux/modules/dictionary"

const Detail = (props) => {
    const dic_list = useSelector(state => state.dictionary.list)
    let dic_index = parseInt(props.match.params.index)
    const dispatch = useDispatch();
    return(
        <div>
            <h1>{dic_list[dic_index].word}</h1>
            <h1>{dic_list[dic_index].desc}</h1>
            <h1>{dic_list[dic_index].example}</h1>
            <button onClick={() => {
                dispatch(deletedicFB(dic_index))
                props.history.push("/")
            }}>삭제하기</button>
            <button onClick={() =>{
                props.history.goBack()
            }}>뒤로가기</button>
        </div>
    )
}

export default Detail;