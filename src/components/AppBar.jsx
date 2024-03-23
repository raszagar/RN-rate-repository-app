import Constants from 'expo-constants';
import { ScrollView, StyleSheet, View } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';


const AppBar = () => {
    return (
        <View style={styles.appBar}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab active to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        flexDirection: 'row',
    },
    scroll: {
        paddingBottom: 15
    },
    text: {
        color: theme.appBar.textPrimary,
    }
});

export default AppBar;
