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
  flex-wrap: wrap;
`

function fetchUser(amount = 6){
  return fetch(`https://reqres.in/api/users/`)
    .then(response => response.json())
    .then(json => json.data)
    .catch(error => console.error)
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
      amount: 1,
      data: []
    }
  }

  async componentDidMount(){
    const result = await fetchUser();
    this.setState({data: result});
  }

  render(){

    const User = this.state.data.map(function(item){
      const { id, email, first_name, last_name, avatar } = item;
      return <UserCard key={id} id={id} avatar={avatar} email={email} firstName={first_name} lastName={last_name} />
    });

    return (
      <div className="App">
        <Input fetch={fetchUser}/>

        <UserContainer>
          {User}
        </UserContainer>
      </div>
    );
  }
}

export default App;