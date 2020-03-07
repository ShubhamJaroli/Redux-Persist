import Reducer from '../Reducer';
import Reducer2 from '../Reducer2'
import RootReducer from '../rootReducer';
import {createStore,applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {persistStore,persistReducer} from 'redux-persist'
import AsyncStorage from'@react-native-community/async-storage'

const persistConfig =
{
    key:'root',
    storage:AsyncStorage,
    whitelist:
    [
        'Reducer',
        'Reducer2'
    ]
}

const persistedReducer = persistReducer(persistConfig,RootReducer)
const store =createStore(persistedReducer,
    applyMiddleware(createLogger()));
const persistor =persistStore(store);
export {store,persistor};