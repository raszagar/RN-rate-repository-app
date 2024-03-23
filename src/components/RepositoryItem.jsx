import { StyleSheet, View } from "react-native";
import RepositoryItemHeader from "./RepositoryItemHeader";
import RepositoryStats from "./RepositoryStarts";

const RepositoryItem = (repo) => (
    <View key={repo.id} style={styles.container}>
        <RepositoryItemHeader {...repo} />
        <RepositoryStats {... repo} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
});

export default RepositoryItem;