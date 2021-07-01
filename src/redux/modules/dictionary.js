import {firestore} from "../../firebase"
const dictionary_db = firestore.collection("dictionary")

/*action*/
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";
const UPDATE = "dictionary/UPDATE";
const DELETE = "dictionary/DELETE";

const initialState = {
    list:[{
        id: "list_0",
        word: "ㅎ1ㅎ1",
        desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
        example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
      },
      {
        id: "list_1",
        word: "ㅎ1ㅎ1",
        desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
        example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
      },]
}

/* action create */
export const loaddictionary = (dictionary) =>{
    return { type:LOAD, dictionary}
}

export const createdictionary = (dictionary) =>{
    return { type:CREATE, dictionary}
}

export const updatedictionary = (dictionary) =>{
    return { type:UPDATE, dictionary}
}

export const deletedictionary = (dictionary) =>{
    return { type:DELETE, dictionary}
}


// 파이어베이스랑 통신하는 부분
export const loaddictionaryFB = () => {
  return function (dispatch) {
    
    dictionary_db.get().then((docs) => {
      let dic_data = [];
      docs.forEach((doc) => {

        if(doc.exists){
            dic_data = [...dic_data, {id: doc.id, ...doc.data()}];
        }
      });
      console.log(dic_data)
      dispatch(loaddictionary(dic_data));
    });
  };
};


export const adddicFB = (dictionary) => {
    return function (dispatch) {
      console.log(dictionary);
      // 생성할 데이터를 미리 만들게요!
      let dic_data = {
        word:dictionary.word,
        desc:dictionary.desc,
        example:dictionary.example,
      }
      
  
      // add()에 데이터를 넘겨줍시다!
      dictionary_db.add(dic_data).then((docRef) => {
          // id를 추가한다!
          dic_data = { ...dic_data, id: docRef.id };
  
          console.log(dic_data);
  
          // 성공했을 때는? 액션 디스패치!

          dispatch(createdictionary(dic_data));
        })
        .catch((err) => {
          // 여긴 에러가 났을 때 들어오는 구간입니다!
          console.log(err);
          window.alert('오류가 났네요! 나중에 다시 시도해주세요!');
        });
    };
  };

// 파이어베이스랑 통신하는 부분
export const deletedicFB = (dictionary) => {
  return function (dispatch, getState) {
    const _dictionary_data = getState().dictionary.list[dictionary];
    // id가 없으면? 바로 끝내버립시다.
    if (!_dictionary_data.id) {
      return;
    }
    // 삭제하기
    dictionary_db.doc(_dictionary_data.id).delete()
    .then((res) => {
      dispatch(deletedictionary(dictionary));
    })
    .catch((err) => {
      console.log("err");
    });
    console.log(_dictionary_data.id)
  };
};


/*reducer*/
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "dictionary/LOAD":{
            if(action.dictionary.length > 0){
                return {list: action.dictionary}
            }
          return state
        }

        case "dictionary/CREATE":{
            const new_dic_list = [...state.list, action.dictionary]
            return {list: new_dic_list}
        }

        case "dictionary/UPDATE":{
            return state
        }

        case "dictionary/DELETE":{
            const dic_list = state.list.filter((l, idx) => {
                if(idx !== action.dictionary){
                    return l
                }
            })
            return {list: dic_list}
        }
      default: return state;
    }
  }