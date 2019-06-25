import styled from 'styled-components/native'


export const ContainerScroll = styled.ScrollView`
    flex: 1;
    flex-direction: column;
`;

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const ContainerLogo = styled.View`
    flex:1;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
`;

export const ContainerButtons = styled.ScrollView`
    flex:2;
    padding: 3%;
`;

export const Buttons = styled.View`
    flex:1;
    align-items:center;
    justify-content: center;
    flex-direction: row;
`;

export const Logo = styled.Image`
    width: 150px;
    height: 150px;
`;

export const Button = styled.TouchableOpacity`
    width: 100px;
    margin-left: 5%;
    height: 100px;
    background-color: ${props => props.theme.primary};
`;