import dayjs from "dayjs";
require('dayjs/locale/fr');

export function durationToTime(duration: number): string {
    return new Date(1000 * duration).toISOString().substr(11, 8);
}

export function formatDate(date: string): string {
    const result = dayjs(date).locale('fr').format("dddd D MMMM");

    const arr = result.split(" ");
    //loop through each element of the array and capitalize the first letter.
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    //Join all the elements of the array back into a string 
    //using a blankspace as a separator 
    const final = arr.join(" ");
    return final;
}
