import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color: ${props => props.theme.light};
`;

export const ContainerButtons = styled.View`
    background-color:${props => props.theme.light};
    position: absolute;
    bottom: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
    width: 100;
    margin-left: 10;
    margin-right: 10;
    padding: 10px;
    margin-top: 5;
    margin-bottom: 5;
    background-color: ${props => props.theme.primary};
    border-radius: 3;
    justify-content: center;
    align-items: center;
`;

// Titulo do Botao
export const Titulo = styled.Text`
  color: #FFF;
  font-size: 16;
`;
export const Label = styled.Text`
    font-weight: bold;
    color: ${ props => props.theme.primary };
    margin-top: 10px;
    margin-left: 22px;
`;

export const Input = styled.TextInput`
  padding: 15px 20px;
  border-radius: 5px;
  background: #FFF;
  margin-top: 10px;
  align-self: stretch;
  margin-bottom: 15px;
  margin-left: 20px;
  margin-right: 20px;
  color: ${ props => props.theme.primary };
  font-size: 16px;
`;