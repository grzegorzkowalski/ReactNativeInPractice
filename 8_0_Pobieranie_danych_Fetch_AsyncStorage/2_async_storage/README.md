# Async Storage

1. Zainstaluj bibliotekę AsyncStorage
2. Zapisz swoje imię do AsyncStorage. Następnie pobierz je do stanu komponentu (zrób to również dla wartości początkowej `name` w useState).
3. Wewnątrz funkcji `handleGame` napisz logikę gry w papier, nożyce, kamień
4. Po każdej grze zapisz informacje o zwycięzcy do asyncStorage. Uwaga dane powinny być zapisywane do jednego klucza w formacie: `['Computer won', 'Name won', 'Computer won']` itd. Pamiętaj, że dane w AsyncStorage możesz zapisać w stringu. Użyj funkcji `JSON.stringify` `JSON.parse` do zapisywania i odczytywania historii. 
5. Pokaż historię w ekranie - musisz przekazać ją z AsyncStorage do stanu.
6. Wyłącz aplikację i włącz ponownie aby przekonać się czy dane się przechowały

