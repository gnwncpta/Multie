import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
`

const InputField = styled.input`
    border: none;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 6px;
    color: white;
    background-color: #1c1c1c;

    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    cursor: pointer;
    border: none;
    color: white;
    padding: 10px 20px;
    font-weight: 500;
    margin-left: 10px;
    border-radius: 6px;
    box-sizing: border-box;
    background-color: magenta;

    &:active {
        color: #111;
        background-color: white;
    }
`

const Info = styled.p`
    width: 150px;
    font-size: 14px;
    color: white;
    margin-right: 10px;
`

class Input extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {value: 1}
        this.handleInput = this.handleInput.bind(this);
        this.seeProps = this.seeProps.bind(this);
        this.fetchUser = this.fetchUser.bind(this);
    }

    handleInput(event){
        this.setState({value: event.target.value});
    }

    seeProps(){
        console.log(this.props);
    }

    async fetchUser(){
        const data = await this.props.fetch();
        console.log(data);
    }

    render(){
        return (
            <InputContainer>
                <Info>Insert the amount of data will displayed</Info>
                <InputField type="number" value={this.state.value} />
                <Button onClick={this.fetchUser}>Fetch</Button>
            </InputContainer>
        )
    }
}

export default Input;