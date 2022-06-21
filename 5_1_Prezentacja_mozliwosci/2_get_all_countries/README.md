# All over the world!!!

1. Stworzyliśmy prostą aplikację, której celem jest wyświetlenie listy wszystkich krajów naszego globu. 
   Aplikacja pobiera dane z publicznego api – znajdującego się pod adresem [Klik!](https://countrylayer.com/documentation/). Przyjrzyj się danym pobieranym z api. 
2. Musisz założyć darmowe konto, żeby otrzymać klucz API [pod tym adresem](https://manage.countrylayer.com/signup/free).
3. W komponencie `App.js` zmiennej `API_Key` dodaj swój klucz do API.    
4. Jak nie trudno się domyśleć pobieramy jedynie nazwę państwa oraz flagę z innego serwisu 
   z zasobu danych odnoszących się do każdego kraju. 
   Rozbuduj aplikację w taki sposób, aby każdy kafelek z krajem zawierał więcej informacji. 
   Nie przejmuj się, że nie wszystkie flagi są dostępne.
5. Sprawdź w konsoli, jakie dane otrzymujesz z serwera. 
6. Przyjrzyj się Komponentowi `FlatList`. To specjalny komponent służący do wyświetlania długich list. 
   Zobacz, w jaki sposób renderuje on poszczególne elementy. 
7. Potrzebujesz inspiracji:
  * Wyświetl stolicę państwa.
  * Wyświetl nazwę kraju w jego własnym języku.
  * Podaj przybliżony dystans stolicy kraju do Twojego rodzinnego miasta. Koordynaty Twojego miasta pobierz 
    z google maps a koordynaty stolicy danego kraju z pliku `capitalLangLong.js` w folderze data. 
  ```javascript
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

```
8. Gdybyś przekroczył limit zapytań, dane masz zapisane dodatkowo w folderze `data`.

