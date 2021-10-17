import { combineReducers, createStore } from "redux";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";

let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer, 
    usersPage: usersReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;