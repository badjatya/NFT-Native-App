import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Importing Constant
import { COLORS, SIZES, FONTS, SHADOWS } from '../../../../constants';

const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{ ...styles.button, ...props }}
            onPress={handlePress}
        >
            <Image source={imgUrl} resizeMode="contain" style={styles.image} />
        </TouchableOpacity>
    );
};

export default CircleButton;

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
    },
    image: {
        width: 24,
        height: 24,
    },
});
