# Stack Navigator – Fetch

1. Stwórzmy aplikację radiową w której użytkownik będzie mógł zobaczyć ramówkę rozgłośni radiowej
2. Stwórz nawigację zgodnie ze strategią stack navigator
3. Nawigacja powinna zawierać dwa ekrany
– Home
– Antena
4. na ekranie Home stwórz 3 buttony przenoszące do ekranu Antena. Każdy z buttonów powinien przekazywać parametr `antena` do widoku anteny. Tworzymy 4 buttony z parameterm `antena` o wartości od 1 lub 3 lub 5. Parametry będą reprezentowały 3 programy radiowe. 
5. W widoku antena stwórz zapytanie do api o schemacie url: 
`https://miniramowka.polskieradio.pl/Schedule/GetByDate?Id=3&Date=2022-12-09`
– pamiętaj aby pod `Id` podstawić odpowiednią antenę a pod `Date` aktualną datę
6. Zapisz osotatnio słuchaną antenę w AsyncStorage
7. Jeśli informacja o ostatnio słuchanej antenie znajduje się w AsyncStorage renderuj użytkownikowi w ekranie Home dodatkowy button z linkiem do ostatnio słuchanej anteny. 


