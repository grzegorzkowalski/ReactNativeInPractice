# Firebase Formularz | Chat

1. W wypadku tego ćwiczenia musisz podzielić się danymi konfiguracyjnymi do Firestore z osobą z którą będziesz chciał przeprowadzić czat
2. Stwórz prosty formularz z jednym polem "TextInput" i przyciskiem do wysyłania
3. Po kliknięciu w przycisk wyślij do kolekcji `chat` dokument o strukturze: {name: "Twoje imie", message: "Twoja wiadomość", time: Firebase.Timestamp} 
4. Powyżej utwórz listę ostatnich 10 wiadomości z kolekcji `chat`. Zmiany muszą wyświetlać się na żywo. Użyj więć obserwatora z metody `onSnapshot`