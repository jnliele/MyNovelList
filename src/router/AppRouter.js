import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddNovel from '../components/AddNovel';
import NovelsList from '../components/NovelsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditNovel from '../components/EditNovel';
import NovelsContext from '../context/NovelsContext';

const AppRouter = () => {
    const [novels, setNovels] = useLocalStorage('novels', []);
    
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <NovelsContext.Provider value={{novels, setNovels}}>
                        <Switch>
                            <Route component={NovelsList} path="/" exact={true} />
                            <Route component={AddNovel} path="/add" />
                            <Route component={EditNovel} path="/edit/:id" />
                            <Route component={() => <Redirect to="/" />} />
                        </Switch>
                    </NovelsContext.Provider>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;