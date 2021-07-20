import styled from 'styled-components';

const UserContainer = styled.div`
    width: fit-content;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #1c1c1c;

    margin-top: 12px;
    margin-right: 12px;
`;

const Name = styled.h2`
    width: 150px;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 600;
    color: white;
`;

const Email = styled.p`
    margin-top: 10px;
    font-size: 10px;
    font-weight: 400;
    color: white;
`;

const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 10px;
`

function UserCard(props){
    const { email, firstName, lastName, avatar, id } = props;

    return (
        <UserContainer id={id}>
            <Image src={avatar} alt={`${firstName} ${lastName}`} />
            <Name>{`${firstName} ${lastName}`}</Name>
            <Email>{email}</Email>
        </UserContainer>
    );
}

export default UserCard;