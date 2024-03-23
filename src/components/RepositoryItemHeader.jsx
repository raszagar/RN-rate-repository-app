import { Image, StyleSheet, View } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme";


const RepositoryItemHeader = (repo) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
            <View style={{ paddingRight: 10 }}>
                <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <StyledText fontSize='subheading' fontWeight='bold' >{repo.fullName}</StyledText>
                <StyledText>{repo.description}</StyledText>
                <StyledText style={styles.language}>Language: {repo.language}</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 5,
        marginTop: 4,
        marginBottom: 4,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
});

export default RepositoryItemHeader;
