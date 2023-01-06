// Importing Library
import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';

// Importing Components
import { FocusedStatusBar } from '../../components/Layout';
import { Header, NFTCard } from '../../components/Home';

// Importing Constants
import { COLORS, NFTData } from '../../constants';

const Home = () => {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <FocusedStatusBar background={COLORS.primary} />

            <View style={styles.NFTContainer}>
                <View style={styles.NFTCards}>
                    <FlatList
                        data={NFTData}
                        renderItem={({ item }) => <NFTCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<Header />}
                    />
                </View>

                <View style={styles.background}>
                    <View style={styles.backgroundPrimary} />
                    <View style={styles.backgroundWhite} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
    },
    NFTContainer: {
        flex: 1,
    },
    NFTCards: {
        zIndex: 0,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
    },
    backgroundPrimary: {
        height: 300,
        backgroundColor: COLORS.primary,
    },
    backgroundWhite: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
});
