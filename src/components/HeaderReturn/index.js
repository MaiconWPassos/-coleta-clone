import React from 'react'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks'
import theme from '../../config/theme'

export default function HeaderReturn(props) {
  var { goBack } = useNavigation();
  return (
    <Header>
      <ButtonBack onPress={() => { goBack() } } underlayColor={theme.textColorPrimary}>
        <Ionicons name="md-arrow-back" size={28} color={theme.textColorPrimary} />
      </ButtonBack>
      <Title> {props.title} </Title>
    </Header>
  );
}

const Header = styled.View`
    padding: 5px;
    flex-direction: row;
    background-color: ${props => props.theme.primary};
    height: 60;
    justify-content: flex-start;
    align-items: center;
`;

const ButtonBack = styled.TouchableHighlight`
  padding: 25px;
`;

const Title = styled.Text`
  margin-left: 20;
  color: ${props => props.theme.textColorPrimary};
  font-weight: bold;
  font-size: 18;
`;

