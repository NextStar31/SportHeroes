import { Action } from "redux"
import { UserActivities } from "../../models/UserActivities";

export const LOAD_ALL_USER_ACTIVITIES_REQUEST = 'LOAD_ALL_USER_ACTIVITIES_REQUEST'

export class LoadAllUserActivitiesRequest implements Action {
    public readonly type = LOAD_ALL_USER_ACTIVITIES_REQUEST;
}

export const LOAD_ALL_USER_ACTIVITIES_SUCCESS = 'LOAD_ALL_USER_ACTIVITIES_SUCCESS'

export class LoadAllUserActivitiesSuccess implements Action {
    public readonly type = LOAD_ALL_USER_ACTIVITIES_SUCCESS;
    constructor(public payload: UserActivities) { }
}

export const LOAD_ALL_USER_ACTIVITIES_ERROR = 'LOAD_ALL_USER_ACTIVITIES_ERROR'

export class LoadAllUserActivitiesError implements Action {
    public readonly type = LOAD_ALL_USER_ACTIVITIES_ERROR;
    constructor(public payload: string) { }
}

export type UserActivitiesActions = LoadAllUserActivitiesRequest | LoadAllUserActivitiesSuccess | LoadAllUserActivitiesError;
