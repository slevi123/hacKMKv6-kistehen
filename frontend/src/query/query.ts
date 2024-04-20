
export function getCurrentCityName(position: GeolocationPosition, setCurrentLocation: (location: { latitude: number, longitude: number, display_name: string }) => void) {

    const url = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+ position.coords.latitude + '&lon=' +  
                                                position.coords.longitude ;
     
    fetch(url, {
            method: "GET",
            mode: "cors",      
        }).then((response) => response.json())
            .then((data) => setCurrentLocation({ latitude: position.coords.latitude,
                                                longitude: position.coords.longitude,
                                                display_name:`${ data.address.city }, ${ data.address.country }` })    
            );
}
