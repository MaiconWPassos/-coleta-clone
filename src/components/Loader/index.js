import React from 'react'
import { View } from './style';
import { ActivityIndicator, StatusBar } from 'react-native'
import theme from '../../config/theme'

export default props => (
    <View>
        <StatusBar backgroundColor={theme.primary} barStyle="light-content"/>
        <ActivityIndicator size="large" color={theme.textColorPrimary} />
    </View>
)