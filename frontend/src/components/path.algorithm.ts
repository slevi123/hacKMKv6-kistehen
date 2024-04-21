import { MarkerType } from "./Map";

export function distance(location1:MarkerType, location2:MarkerType){

    return Math.sqrt((location1.latitude - location2.latitude)**2 + (location1.longitude - location2.longitude)**2);
}


export function shortestPathWithOrder(myLocation:MarkerType,locations:MarkerType[]){


    if (locations.length === 0) {
        return [];
    }

    const matrix = Array(locations.length).fill(0).map(() => Array(locations.length).fill(0));

    for (let i = 0; i < locations.length; i++) {
        for (let j = 0; j < locations.length; j++) {
            if (i === j) {
                matrix[i][j] = 0;
            }
            else {
                matrix[i][j] = distance(locations[i], locations[j]);
            }
        }
    }

    const newOrderdLocations = Array(locations.length).fill(0);

    const visited = Array(locations.length).fill(false);

    let currentLocation = myLocation;

    for (let i = 0; i < locations.length; i++) {
        let minDistance = Infinity;
        let minIndex = -1;
        for (let j = 0; j < locations.length; j++) {
            if (!visited[j] && matrix[locations.indexOf(currentLocation)][j] < minDistance) {
                minDistance = matrix[locations.indexOf(currentLocation)][j];
                minIndex = j;
            }
        }
        visited[minIndex] = true;
        newOrderdLocations[i] = locations[minIndex];
        currentLocation = locations[minIndex];
    }

    return newOrderdLocations;


} 