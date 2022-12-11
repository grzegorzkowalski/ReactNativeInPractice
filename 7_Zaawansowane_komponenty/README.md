#Formik

1. Przetestuj działanie biblioteki Formik do tworzenia zaawansowanych formularzy.


# Aplikacja Pogodynka

1. Stwórz nową aplikację Expo `npx create-expo-app pogodynka`.
1. Zainstaluj dodatkowe pakietu do widoku webowego `npx expo install react-native-web@~0.18.9 react-dom@18.1.0 @expo/webpack-config@^0.17.2`.
1. Stwórz nawigację z 3 stronami lub tabami `Home, CityWeather, FindWeather`.
1. Na każdej stronie przygotuj przyciski, które pozwolą poruszać się po aplikacji.
1. W komponencie home stwórz tablicę z listą wybranych miast.
1. Wykorzystaj komponent `FlatList` w celu wyrenderowania listy miast wraz z przyciskiem przekierowującym na podstronę `CityWeather`.
1. W przekierowaniu powinieneś przekazać nazwę miasta.
1. Utwórz konto na portalu `https://openweathermap.org/api `.
1. W komponencie `CityWeather` na podstawie przekazywanej nazwy miasta utwórz zapytanie do powyższego api, które zwróci prognozę pogody.
1. Wyświetl w komponencie nazwę miasta, aktualną temperaturę i ogólny opis pogody.
1. Utwórz konto w portalu `https://pixabay.com/api/docs/ `.
1. Na podstawie opisu pogody z API pogodowego wyślij zapytanie do portalu pixabay i znajdź obrazek ilustrujący opisaną pogodę.
1. Wyświetl go w komponencie.
1. W komponencie `FindWeather` stwórz `TextInput` i `Button`. Pozwól użytkownikowi wpisać nazwę miasta i zapisać ją w stanie komponentu.
1. Po naciśnięciu guzika wyślij zapytanie do API o pogodę dla danego miasta.
1. Jeśli pogoda dla danego miasta zostanie znaleziona wykonaj kroki z punktów 9-12.
1. Jeśli pogoda dla danego miasta nie zostanie znaleziona, wyświetl komponent z informacją error 404 brak danych.
