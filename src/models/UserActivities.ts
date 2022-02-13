
export interface UserActivities {
    data: Activity[];
    meta: MetaData;
}

export interface MetaData {
    count: number;
    hasNext: boolean;
    next: string;
}

export type Activity = ExerciceActivity | ChallengeActivity | BonusActivity;

export interface ActivityBase {
    date: string;
    resourceId: string;
    displayPriority: number;
    type: ActivityType;
}

export interface ExerciceActivity extends ActivityBase {
    payload: Exercice;
}

export interface ChallengeActivity extends ActivityBase {
    payload: Challenge;
}

export interface BonusActivity extends ActivityBase {
    payload: Bonus;
}

export enum ActivityType {
    Activity = 'activity',
    Bonus = 'bonus',
    Challenge = 'challenge'
}

export interface Exercice {
    app: App;
    climb: number;
    distance: number;
    duration: number;
    isDaily: boolean;
    isValid: boolean;
    isUserCreated: boolean;
    points: number;
    steps: number;
    type: ExerciceType
}

export enum ExerciceType {
    Walking = 'Walking',
    Cycling = 'Cycling'
}

export interface App {
    label: string;
    name: string;
}

export interface Bonus {
    bonusName: string;
    resourceType: string;
    points: number;
    resourceId: string;
}

export interface Challenge {
    display: {
        badge: string;
        cover: string;
        objective: string;
        title: string;
    }
}