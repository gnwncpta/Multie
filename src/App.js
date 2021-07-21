import './App.css';
import React from 'react';
import styled from 'styled-components';
import Input from './Components/Input/Input';
import UserCard from './Components/UserCard/UserCard';

const UserContainer = styled.div`
  // border: 1px solid red;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Load = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: white;
`

const fetchUser = (amount) => {
  return fetch(`https://reqres.in/api/users?per_page=${amount}`)
    .then(response => response.json())
    .then(json => json.data)
    .catch(error => console.error)
}

const Loading = (props) => {
  if(!props.show){
    return null;
  }

  return (
    <Load> Loading ... </Load>
  );
}

function User(props){
  if(!props.show){
    return null;
  }

  return props.data.map(item => {
    const { id, email, first_name, last_name, avatar } = item;
    return <UserCard key={id} id={id} avatar={avatar} email={email} firstName={first_name} lastName={last_name} />
  });
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      amount: 6,
      data: [],
      showLoading: false,
      showUser: false
    }

    this.fetching = this.fetching.bind(this);
  }

  async componentDidMount(){
    this.setState({show: !this.state.showLoading});

    const result = await fetchUser(this.state.amount);
    this.setState({data: result});
    this.setState({show: !this.state.showLoading});
    this.setState({showUser: !this.state.showUser});
  }

  async fetching(amount){
    this.setState({showUser: !this.state.showUser});
    this.setState({show: !this.state.showLoading});
    
    const result = await fetchUser(amount);
    this.setState({data: result});
    this.setState({show: !this.state.showLoading});
    this.setState({showUser: !this.state.showUser});
  }

  render(){
    return (
      <div className="App">
        <Input fetch={this.fetching} amount={this.state.amount}/>

        <UserContainer>
          { <User show={this.state.showUser} data={this.state.data} /> }

          { <Loading show={this.state.showLoading} /> }
        </UserContainer>
      </div>
    );
  }
}

export default App;