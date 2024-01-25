import {configureStore} from "@reduxjs/toolkit";
import todoReducer from './slice/todo-slice';
import modalReducer from './slice/modal-slice';
export const makeStore = () => {
    return configureStore({
        reducer: {
            todoReducer,
            modalReducer
        },
        devTools: true
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']