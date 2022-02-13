import { UserActivities } from "../../models/UserActivities";
import * as ActivitiesActions from "../actions/activities.actions";

export interface ActivityesState {
    userActivities: UserActivities;
    isLoading: boolean;
    onError: boolean;
}

const initialState: ActivityesState = {
    userActivities: {
        data: [],
        meta: {
            count: 0,
            hasNext: false,
            next: ''
        }
    },
    isLoading: false,
    onError: false
};

const activitiesReducer = (state = initialState, action: ActivitiesActions.UserActivitiesActions) => {
    switch (action.type) {
        case ActivitiesActions.LOAD_ALL_USER_ACTIVITIES_REQUEST:
            return {
                ...state,
                isLoading: true,
                onError: false
            };
        case ActivitiesActions.LOAD_ALL_USER_ACTIVITIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userActivities: action.payload,
                onError: false
            };
        case ActivitiesActions.LOAD_ALL_USER_ACTIVITIES_ERROR:
            return {
                ...state,
                isLoading: false,
                onError: true
            };
        default:
            return state;
    }
}
export default activitiesReducer;