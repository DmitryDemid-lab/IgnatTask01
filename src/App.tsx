import React from 'react';
import './App.css';
import PreJunior from "./AppPages/PreJunior/PreJunior";
import {Junior} from "./AppPages/Junior/Junior";
import JuniorPlus from "./AppPages/Junior+/JuniorPlus";
import {Route, Switch} from 'react-router-dom';
import Layout from "./hoc/Layout/Layout";
import HomeScreens from "./AppPages/HomeScreen/HomeScreen";
import {Provider} from "react-redux";
import {store} from "./redux/store";


function App() {
    return (
        <Provider store={store}>
            <Layout>
                <Switch>
                    <Route path='/PreJunior' component={PreJunior}/>
                    <Route path='/Junior' component={Junior}/>
                    <Route path='/JuniorPlus' component={JuniorPlus}/>
                    <Route path='/' component={HomeScreens}/>
                </Switch>
            </Layout>
        </Provider>
    );
}

export default App;

