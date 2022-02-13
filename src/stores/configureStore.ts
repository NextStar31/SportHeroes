import { createStore, combineReducers } from 'redux';
import activitiesReducer from './reducers/activities.reducer';

const rootReducer = combineReducers(
    { activities: activitiesReducer }
);
export type RootState = ReturnType<typeof rootReducer>

const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;