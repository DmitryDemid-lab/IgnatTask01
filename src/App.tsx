import React from 'react';
import './App.css';
import PreJunior from "./AppPages/PreJunior/PreJunior";
import Junior from "./AppPages/Junior/Junior";
import JuniorPlus from "./AppPages/Junior+/JuniorPlus";
import {Route, Switch} from 'react-router-dom';
import Layout from "./hoc/Layout/Layout";
import HomeScreens from "./AppPages/HomeScreen/HomeScreen";


/*function App() {
    return (
        <HashRouter basename='AppPages'>
            <div className="App">
                <NavBar/>
                <main>

                </main>
            </div>
        </HashRouter>
    );
}*/
function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/PreJunior' component={PreJunior}/>
                <Route path='/Junior' component={Junior}/>
                <Route path='/JuniorPlus' component={JuniorPlus}/>
                <Route path='/' component={HomeScreens}/>
            </Switch>
        </Layout>
    );
}

export default App;

