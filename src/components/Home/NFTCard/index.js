// Importing Packages
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importing Components
import { CircleButton } from '../../Layout';

// Importing Constants
import { COLORS, SIZES, SHADOWS, assets } from '../../../constants';

const NFTCard = ({ data }) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image
                    source={data.image}
                    style={styles.image}
                    resizeMode="cover"
                />
                <CircleButton imgUrl={assets.heart} top={10} right={10} />
            </View>
            <Text>NFTCard</Text>
        </View>
    );
};

export default NFTCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
    },
    imageContainer: {
        width: '100%',
        height: 250,
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font,
    },
});
