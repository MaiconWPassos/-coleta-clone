import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.light};
`;

export const Logo = styled.Image`
  height: 20%;
  width: 100px;
  margin-bottom: 40px;
`;

export const Input = styled.TextInput`
  padding: 15px 20px;
  border-radius: 5px;
  background: #FFF;
  align-self: stretch;
  margin-bottom: 15px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 16px;
`;

export const Button = styled.TouchableHighlight`
    margin-left: 20px;
    margin-right: 20px;
    padding: 16px 20px;
    align-self: stretch;
    border-radius: 3px;
    background-color: ${props => props.theme.primary};
`;

export const ButtonText = styled.Text`
    text-align: center;
    color: ${props => props.theme.textColorPrimary};
    font-size: 18px;
`;