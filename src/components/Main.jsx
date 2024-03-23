import React from "react";
import { Text, View } from "react-native";
import { Route, Routes } from "react-router-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import LogIn from "../pages/LogIn";

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<LogIn />} />
            </Routes>
        </View>
    );
}

export default Main;
