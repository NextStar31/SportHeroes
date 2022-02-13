import { Activity, ActivityType, ExerciceActivity, ChallengeActivity, BonusActivity } from "../models/UserActivities";

export function isExercice(activity: Activity): activity is ExerciceActivity {
    return activity.type === ActivityType.Activity;
}

export function isChallenge(activity: Activity): activity is ChallengeActivity {
    return activity.type === ActivityType.Challenge;
}

export function isBonus(activity: Activity): activity is BonusActivity {
    return activity.type === ActivityType.Bonus;
}