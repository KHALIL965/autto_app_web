// //redux imports
// import {createStore, applyMiddleware, compose} from "redux";

// //middleware import
// import thunk from 'redux-thunk';

// //redux persist imports
// import {persistReducer, persistStore} from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

// //reducer
// import {RootReducer} from '../reducer/index';

// const persistConfig={
//     key:'root',
//     storage:storage,
//     // whiteList:["LoaderReducer"]
// }

// const persistedReducer=persistReducer(persistConfig, RootReducer);

// const Store=createStore(persistedReducer, compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//     );

// const persist=persistStore(Store);

// export {persist, Store};


//redux imports
import {createStore, applyMiddleware, compose} from "redux";

//middleware import
import Thunk from 'redux-thunk';

//redux persist imports
import { persistStore, persistReducer } from "redux-persist";

import storage from 'redux-persist/lib/storage';

//reducer
import {RootReducer} from '../reducer/index';

const persistConfig={
    key:'root',
    storage,
    // whiteList:["LoaderReducer"]
}

const persistedReducer=persistReducer(persistConfig, RootReducer);

const store=createStore(
    persistedReducer,{},
    compose(applyMiddleware(Thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const persistor=persistStore(store);

export {persistor, store};

