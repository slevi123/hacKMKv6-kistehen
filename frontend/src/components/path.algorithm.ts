// import PriorityQueue from "ts-priority-queue/src/PriorityQueue";
import { MarkerType } from "./Map";
import PriorityQueue from "ts-priority-queue";
export function shortestPathWithOrder(locations: MarkerType[]) {
    const distances = {};
    const previous = {};
    const queue = new PriorityQueue();
  
    locations.forEach(location => {
      distances[location.display_name] = Infinity;
      previous[location.display_name] = null;
    });
  
    distances[locations[0].display_name] = 0;
    queue.enqueue(locations[0].display_name, 0);
  
    while (!queue.isEmpty()) {
      const currentLocation = queue.dequeue();
  
      locations.forEach(neighbor => {
        if (neighbor.display_name !== currentLocation) {
          const distance = calculateDistance(
            locations.find(loc => loc.display_name === currentLocation).latitude,
            locations.find(loc => loc.display_name === currentLocation).longitude,
            neighbor.latitude,
            neighbor.longitude
          );
  
          const alt = distances[currentLocation] + distance;
          if (alt < distances[neighbor.display_name]) {
            distances[neighbor.display_name] = alt;
            previous[neighbor.display_name] = currentLocation;
            queue.enqueue(neighbor.display_name, alt);
          }
        }
      });
    }
  
    let path = [];
    let currentLocation = locations[locations.length - 1].display_name;
    while (currentLocation) {
      path.unshift(currentLocation);
      currentLocation = previous[currentLocation];
    }
  
    // Create the ordered list of locations
    const orderedLocations = path.map(locationName =>
      locations.find(location => location.display_name === locationName)
    );
  
    return orderedLocations;
  }
  
//   // Példa
//   const locations = [
//     { latitude: 0, longitude: 0, display_name: 'A' },
//     { latitude: 1, longitude: 1, display_name: 'B' },
//     { latitude: 2, longitude: 2, display_name: 'C' },
//     { latitude: 3, longitude: 3, display_name: 'D' },
//     { latitude: 4, longitude: 4, display_name: 'E' }
//   ];
  
//   const orderedLocations = shortestPathWithOrder(locations);
//   console.log('Helyek sorrendje a legrövidebb úton:', orderedLocations);
  