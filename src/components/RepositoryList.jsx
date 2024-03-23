import { FlatList, Text } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositoriesGraphql";

const RepositoryList = () => {
    const { repositories } = useRepositories();

    return (
        <FlatList data={repositories} ItemSeparatorComponent={() => <Text> </Text> }
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo} />
            )} />
    );
}

export default RepositoryList;