// Importing Library
import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';

// Importing Components
import { FocusedStatusBar } from '../../components/Layout';

// Importing Constants
import { COLORS, NFTData } from '../../constants';

const Home = () => {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <FocusedStatusBar background={COLORS.primary} />
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
    },
});
