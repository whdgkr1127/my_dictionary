import React from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import { firestore } from "./firebase"
/*style*/
import styled from "styled-components"

/*Router*/
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router"


/* component */
import Diclist from './Diclist';
import Detail from './Detail';
import DicInfo from './DicInfo';
import NotFound from './NotFound'
import {loaddictionaryFB, createdictionary} from "./redux/modules/dictionary"

// const mapStateToProps = (state) => ({
//     dic_list: state.dictionary.list
// });
 
 // 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
 const mapDispatchToProps = (dispatch) => ({
  
      load: () => {
        dispatch(loaddictionaryFB());
      },
   
 });

class App extends React.Component {
  constructor(props){

    super(props)

    this.state = {
    }
  }
  componentDidMount() {
    this.props.load()
  }

  render(){
    return (
      <React.Fragment>
        <Dicbox>
          <Dictionarys>
        <Title>MY DICTIONARY</Title>
        <Line />
        <Switch>
          <Route exact path="/" component={Diclist}/>
          <Route path="/detail/:index" component={Detail}/>
          <Route path="/info" component={DicInfo}/>
          <Route component={NotFound}/>
        </Switch>
        <Plus onClick={() =>{
          this.props.history.push("/info")
        }}>+</Plus>
          </Dictionarys>

          </Dicbox>
        </React.Fragment>
    );
  }
}

const Title = styled.h1`
text-align:center;
font-size:20px
`

const Plus = styled.button`
background-color: white;
position:absolute;
bottom:20px;
right:10px;
padding:15px 20px;
border-radius: 50%;
`

const Dicbox = styled.div`
display: flex;
height: 100vh;
justify-content: center;
align-items:center;
`

const Dictionarys = styled.div`
background-color:rgb(184, 233, 148);
height: 550px;
width: 250px;
position:relative;
`

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px solid white;
`;

export default connect(null, mapDispatchToProps)(withRouter(App));
