import React from "react";
import HeaderScreen from "./views/headerScreen/HeaderScreen";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./views/homeScreen/HomeScreen";
import SearchPageScreen from "./views/SearchPageScreen/SearchPageScreen";
import { Container } from "reactstrap";
import DownloadScreen from "./views/DownloadScreen/DownloadScreen";
import AdminScreen from "./views/AdminScreen/AdminScreen";

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <HeaderScreen />
        <SearchPageScreen />
        <Route path="/" exact component={HomeScreen}></Route>
        <Route path="/downloadscreen/:id" component={DownloadScreen}></Route>
        <Route path="/admin" component={AdminScreen}></Route>
      </BrowserRouter>
    </Container>
  );
}

export default App;
