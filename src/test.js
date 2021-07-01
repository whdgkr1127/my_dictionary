import React from "react";
import styled from "styled-components";

// 임시데이터
// 주의) "" 안에서 또 ""를 쓸 수 없어요! ''를 대신 써주세요. :)
const _word_list = [
  {
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
  },
  {
    id: "list_2",
    word: "ㅎ1ㅎ1",
    desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
    example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
  },
  {
    id: "list_3",
    word: "ㅎ1ㅎ1",
    desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
    example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
  },
];

const WordList = (props) => {
  // 단어 목록을 state로 관리해봅시다! (기본 값은 _word_list로 넣어줄거예요.)
  const [word_list, setWordList] = React.useState(_word_list);

  //   state에 가짜 데이터 하나를 넣는 함수예요.
  const addWord = () => {

    // 넣을 가짜 데이터
      const word_item = {
          id: 'word_11111123132',
          word: "ㅎ2ㅎ2",
          desc: "안녕이라는 뜻",
          example: "펄이 ㅎ2ㅎ2!"
      };

    //   스프레드 문법을 써서 word_list에 있던 값을 전부 넣어주고, 추가할 데이터도 뒤에 넣어서 추가합니다.
      setWordList([...word_list, word_item]);

  };

  return (
    <React.Fragment>
      <Title>My dictionary</Title>
      {word_list.map((w) => {
        return (
          <Card key={w.id}>
            <Text color="#888888" size="8px" underline>
              단어
            </Text>
            <Text>{w.word}</Text>
            <Text color="#888888" size="8px" underline>
              설명
            </Text>
            <Text>{w.desc}</Text>
            <Text color="#888888" size="8px" underline>
              예시
            </Text>
            <Text color="blue">{w.example}</Text>
          </Card>
        );
      })}
      {/* state에 값을 추가하기 위해 임시 추가 버튼을 하나 만들어줬어요. 누르면 가짜 데이터 하나가 바로 추가되게 해줄거예요. */}
      <button onClick={addWord}>임시 추가 버튼</button>
      <AddButton
        onClick={() => {
          props.history.push("/write");
        }}
      >
        +
      </AddButton>
    </React.Fragment>
  );
};

// 제목 스타일을 잡아줄 거예요.
const Title = styled.h1`
  width: 90vw;
  margin: 8px auto;
`;

// 목록에 나올 단어들을 각각 카드 뷰로 만들거예요.
// Card는 카드 하나(와이어프레임의 단어, 설명, 예시를 담고 있는 흰색 네모칸 하나! 그게 카드입니다.)의 스타일을 담당해요!
const Card = styled.div`
  width: 90vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 4px 16px;
  margin: 8px auto;
  box-sizing: border-box;
  background-color: #ffffff;
`;

// 텍스트 스타일을 잡아줄거예요.
// size라는 props가 있으면 size대로 폰트 크기를 넣어주고,
// underline이라는 props가 있으면 밑줄을 줄거예요.(text-decoration 속성을 사용합니다.)
// color라는 props가 있으면 color대로 텍스트 컬러를 바꿔줄거예요.
const Text = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}` : "16px")};
  ${(props) => (props.underline ? "text-decoration: underline;" : "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  margin: 4px 0px;
`;

// 추가하기 버튼 스타일을 잡아줄거예요.
const AddButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #6100ff;
  color: #ffffff;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default WordList;