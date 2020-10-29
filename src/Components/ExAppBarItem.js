import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Appbar,
    Avatar,
  } from 'react-native-paper';
import { ExentriqTheme } from '../ExentriqStyle';
import style from './ExAppBarStyle';


const ExAppBarItem = ({textColor, onPress}) => {
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    return (
        <Appbar.Header color={textColor}>
            <Appbar.BackAction color={ExentriqTheme.colors.textOnPrimary} onPress={onPress}/>
            <Appbar.Content title="Title" subtitle='Subtitle' color={textColor} />
            <Appbar.Action color={textColor} icon="magnify" onPress={() => { }} />
            <Appbar.Action color={textColor} icon={MORE_ICON} onPress={() => { }} />
            <Avatar.Image size={32} style={style.spacing} source={require('../../assets/images/avatar.png')} />
        </Appbar.Header>
    );
};
    
ExAppBarItem.defaultProps = {
    textColor: '',
    onPress: undefined,
};
    
ExAppBarItem.propTypes = {
    textColor: PropTypes.string,
    onPress: PropTypes.func,
};
    
export default ExAppBarItem;