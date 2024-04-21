import { MarkerType } from './Map';


// Helyek közötti távolság meghatározása
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // föld sugara km-ben
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
}
interface MarkerType {
    City: string;
    Latitude: number;
    Longitude: number;
}

// Greedy algoritmus a legrövidebb út meghatározásához
export function findShortestPath(locations: MarkerType[]): MarkerType[] {
    const n = locations.length;
    const visited: boolean[] = new Array(n).fill(false);
    const path: MarkerType[] = [];
    let currentIdx = 0;

    path.push(locations[currentIdx]);
    visited[currentIdx] = true;

    for (let i = 0; i < n - 1; i++) {
        let minDist = Number.MAX_VALUE;
        let nextIdx = -1;

        for (let j = 0; j < n; j++) {
            if (!visited[j]) {
                const dist = calculateDistance(
                    locations[currentIdx].Latitude,
                    locations[currentIdx].Longitude,
                    locations[j].Latitude,
                    locations[j].Longitude
                );

                if (dist < minDist) {
                    minDist = dist;
                    nextIdx = j;
                }
            }
        }

        if (nextIdx !== -1) {
            path.push(locations[nextIdx]);
            visited[nextIdx] = true;
            currentIdx = nextIdx;
        }
    }

    return path;
}
