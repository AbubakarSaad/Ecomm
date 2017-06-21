import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import LoginPage from './components/LoginPage';

const store = createStore(reducer);

const App = () => {
    return (
        <Provider store={store}>
            <LoginPage />
        </Provider>
    );
};

export default App;
