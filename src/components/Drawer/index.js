import React from 'react'
import { logout } from '../../services/auth';
import styled from 'styled-components';
import { useNavigation } from 'react-navigation-hooks'

/**
 * Importa os Components do React Native 
 */
import { SafeAreaView, ScrollView } from 'react-native'

export default function Drawer(props){
    var { navigate } = useNavigation();
    
    function Sair (){
       logout();
       navigate('AuthLoading')
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Image source={require('../../assets/icon.png')}  />
        </View>
        <ScrollView>
          { props.children }
          <ButtonSair onPress={() => Sair()} >
            <TextSair>Sair</TextSair>
          </ButtonSair>
        </ScrollView>
      </SafeAreaView>
    )
}


const View = styled.View`
    height: 150;
    background-color: #fff;
    align-items: center; 
    justify-content: center;
`;

const Image = styled.Image`
    height: 100;
    width: 100; 
    border-radius: 60; 
`;
const ButtonSair = styled.TouchableHighlight`
  padding: 10px 20px;
  background-color: #fff;

`;

const TextSair = styled.Text`
    color: ${props => props.theme.primary};
    font-weight: 700;
`;