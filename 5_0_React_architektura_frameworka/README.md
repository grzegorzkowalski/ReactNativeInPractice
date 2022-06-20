# Do wykonania zadań jest przygotowane repozytorium expo. 
Po sklonowaniu repozytorium na dysk pamiętaj o zainstalowaniu zależności `npm i` 
i uruchomieniu aplikacji za pomocą komendy `npm start`.

Zalecam zrobienie forka dzięki temu bedziecie mogli trzymać swoje zmiany w systemie kontroli wersji.

## Zadanie 1

Stwórz dwa komponenty:

- funkcyjny o nazwie `Name` wyświetlający twoje imię.
- klasowy o nazwie `Surname` gdzie wyświetlisz swoje nazwisko lub pseudonim.
- Zaimportuj oba komponenty do pliku App.js i wyświetl. W tym celu uruchom expo i podgląd webowy lub emulator Android.

## Zadanie 2

Stwórz komponent funkcyjny, w którym utworzysz 3 komponenty funkcyjne z kwadratami różnych kolorów. 
Do tego każdy z nich ma mieć ustawiony margines na 10px.

## Zadanie 3

Stwórz komponent tekstowy. Wyświetl w nim bieżącą datę, która będzie zawierała dzień, miesiąc i rok. 
Format danych dowolny.

## Zadanie 4

Stwórz komponent typu Image. Wyświetl w nim mapę Polski. Nie zapomnij o zdefiniowaniu rozmiarów obrazu.

## Zadanie 5

Przy okazji omawiania View komponentu na slajdzie był przedstawiony układ blokowy złożony 
z niebieskiego, czerwonego i dwóch żółtych prostokątów.

Wykorzystując obiekt StyleSheet i komponent View odtwórz ten układ samodzielnie.

## Zadanie 6

W React Native nie ma znaczników oznaczających wyboldowanie lub pochylenie fontu. 
Wykorzystuje się do tego zagnieżdżone komponenty Text z odpowiednimi stylami.

Wyświetl poniższy tekst w komponentach w ten sposób, żeby:

- składniki pizzy były wyboldowane
- słowo Piza, pizzy było pochylone
- ananas był napisany żółtym kolorem

"Pizza to bardzo smaczne włoskie danie. Robi się ją z ciasta drożdżowego. 
Na ciasto wylewa się sos pomidorowy. 
Na niego układa się składniki: kiełbasę, ser żółty, oliwki, paprykę. 
Jest wiele rodzajów pizzy, może być z mięsem, bez mięsa, rybna, na słodko z ananasem."

## Zadanie 7

- W pliku `App.js` stwórz obiekt `inviteData`, który będzie zawierał informacje o imprezie 
  urodzinowej - data, godzina, miejsce, strój obowiązujący.
- Stwórz komponent funkcyjny `Invitation`, który będzie wyświetlał treść zaproszenia wraz z niezbędnymi danymi.
- Dane przekaż przez props. Wykorzystaj w komponencie destrukturyzację, żeby zapis komponentu był czystszy.

## Zadanie 8

- W pliku `App.js` stwórz zmienną `dataTime` gdzie zapiszesz aktualny czas 
  i datę skorzystaj z obiektu `Date()` i odpowiedniej metody.
- Stwórz komponent funkcyjny `DataTimer` przekaż do niego przez propsy zmienną 
  `dataTime` i wyświetl datę i godzinę.

## Zadanie 9

- Zmodyfikuj powyższe zadanie.
- Do komponentu głównego `App.js` dodaj hooka useState.
- Co sekundę za pomocą `setInterval` aktualizuj stan. Interval uruchom w metodzie useEffect. 
  Upewnij się, że kod wykona się tylko jeden raz w cyklu życia komponentu.
- Zamiast zmiennej do komponentu `DataTimer` przekazuj wartość stanu.

I gotowe stworzyliśmy zegarek cyfrowy :)

## Zadanie 10

- Stwórz komponent, który po kliknięciu zaktualizuje stan komponentu `App.js` losową liczbą z przedziału od 1 do 10.
- Wyświetl wylosowaną liczbę.
