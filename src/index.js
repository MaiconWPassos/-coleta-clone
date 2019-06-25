import React from 'react'
import styled, { ThemeProvider } from 'styled-components/native'
import theme from './config/theme'
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  DrawerItems
} from 'react-navigation'


/**
 * Importa as telas da aplicação
 */
import Loading from './screens/AuthLoading'
import Login from './screens/Login'
import Home from './screens/Home'


import Drawer from './components/Drawer'

/**
 *   Cria um drawer estilizado passando nossos parametros
 */
const CustomDrawerComponent = props => (
  <Drawer>
    <DrawerItems {...props} />
  </Drawer>
);

/**
 * Cria tela de Login da aplicação
 */
const AuthStack = createStackNavigator({
  SignIn: {
    screen: Login,
    navigationOptions: { header: null }
  }
});
/**
 * Cria as outras telas da aplicação
 */
const AppStack = createDrawerNavigator({
  Home: {
    screen: Home,
    header: null
  },
}, {
    contentComponent: CustomDrawerComponent
  });

/**
 * Gerencia as telas
 * 
 * AuthLoading - Tela é mostrada enquanto valida o usuario
 * App -  mostra as telas com o usuario já logado * Auth - É a tela de login
 * 
 */
const App = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: Loading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>

);
