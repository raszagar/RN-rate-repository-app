import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText";


const parseThousands = (num) => {
    return num >= 1000 ? `${Math.round(num / 100) / 10}k` : num;
}

const RepositoryStats = (repo) => {
    return (
        <View style={styles.container}>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(repo.stargazersCount)}</StyledText>
                <StyledText align='center'>Starts</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(repo.forksCount)}</StyledText>
                <StyledText align='center'>Forks</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{repo.reviewCount}</StyledText>
                <StyledText align='center'>Review</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{repo.ratingAverage}</StyledText>
                <StyledText align='center'>Rating</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row', 
        justifyContent: 'space-around' 
    }
});

export default RepositoryStats;