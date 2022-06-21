#Formik

1. Przetestuj działanie biblioteki Formik do tworzenia zaawansowanych formularzy.


# Aplikacja Pogodynka

1. Stwórz nową aplikację expo `expo init pogodynka --template blank`
2. Stwórz nawigację z 3 stronami lub tabami `Home, CityWeather, FindWeather`.
3. Na każdej stronie przygotuj przyciski, które pozwolą poruszać się po aplikacji.
4. W komponencie home stwórz tablicę z listą wybranych miast. 
5. Wykorzystaj komponent `FlatList` w celu wyrenderowania listy miast w raz z przyciskiem przekierowującym na podstronę `CityWeather`.
6. W przekierowaniu przekierowaniu powinieneś przekazać nazwę miasta.
7. Utwórz konto na portalu `https://openweathermap.org/api `.
8. W komponencie `CityWeather` na podstawie przekazywanej nazwy miasta utwórz zapytanie do powyższego api, które zwróci prognozę pogody.
9. Wyświetl w komponencie nazwę miasta, aktualną temperaturę i ogólny opis pogody.
10. Utwórz konto w portalu `https://pixabay.com/api/docs/ `.
11. Na podstawie opisu pogody z API pogodowego wyślij zapytanie do portalu pixabay i znajdź obrazek ilustrujący opisaną pogodę.
12. Wywietl go w komponencie.
13. W komponencie `FindWeather` stwórz `TextInput` i `Button`. Pozwól użytkownikowi wpisać nazwę miasta i zapisać ją w stanie komponentu.
14. Po naciśnięciu guzika wyślij zapytanie do API o pogodę dla danego miasta.
15. Jeśli pogoda dla danego miasta zostanie znaleziona wykonaj kroki z punktów 9-12.
16. Jeśli pogoda dla danego miasta nie zostanie znaleziona, wyświetl komponent z informacją error 404 brak danych.
