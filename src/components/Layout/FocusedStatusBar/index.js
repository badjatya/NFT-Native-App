import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';

const FocusedStatusBar = (props) => {
    const isFocusStatusBar = useIsFocused();
    return isFocusStatusBar ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
