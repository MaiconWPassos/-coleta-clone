import styled from 'styled-components/native'

//  Conatiner principal da tela
export const Container = styled.View`
    flex: 1;
`;

// Botao
export const BoxNavegacao = styled.TouchableOpacity`
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-left: 10;
    margin-right: 10px;
    padding: 10px;
    margin-top: 5;
    margin-bottom: 5;
    background-color: ${props => props.theme.primary};
    border-radius: 3;
`;

// Titulo do Botao
export const Titulo = styled.Text`
  color: #FFF;
  font-size: 16;
  margin-left: 30;
`