import styled from 'styled-components/native'

//  COntainer principal da tela
export const Container = styled.View`
    flex: 1;
    flex-direction: column;
`;

//  Container do logo
export const ContainerLogo = styled.View`
    flex:1;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
`;

// Logo
export const Logo = styled.Image`
    width: 300px;
    height: 83px;
`;

// menu scroll
export const Scroll = styled.ScrollView`
  height: 120;
`

// navegacao do Menu scroll
export const NavegacaoContainer = styled.View`
  flex:1;
`

// Caixa dos botoes
export const ViewNavegacao = styled.View`
  flex-direction: row;
  margin-left: 25px;
`
//  botao
export const BoxNavegacao = styled.TouchableOpacity`
  background-color: ${props => props.theme.primaryTransparence};
  height: 100;
  width: 100;
  margin-right: 10;
  border-radius: 3;
  padding: 8px;
  justify-content: space-between;
`
// Titulo do Botao
export const Titulo = styled.Text`
  color: #FFF;
  font-size: 16;
`
