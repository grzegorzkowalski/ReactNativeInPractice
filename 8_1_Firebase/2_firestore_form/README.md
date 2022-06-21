# Firebase Formularz

1. Twoim zadaniem jest stworzenie formularza rejestracyjnego dla kandydatów na studia. Oczywiście jako taki komponent formularz nie istnieje w React Native. Musimy odwzorować jego funkcjonalności za pomocą dostępnych elementów semantycznych. Zacznij od stworzenia dwu ekranów w Stack Navigator: "Formularz" oraz "Kandydaci".
2. Stwórz pola "Imię", "Nazwisko", "Telefon", "Email" użyj do ich renderowania komponentu `InputText`
2. Stwórz pole z wyborem kierunku studiów – możesz użyć do tego komponentu `Picker` z biblioteki: https://github.com/react-native-picker/picker. Wybór spośród opcji: Matematyka, Informatyka, Fizyka
4. Stwórz pole z akceptacją regulaminu. Komponent `Switch` z React Native będzie tutaj odpowiedni.
5. Zwaliduj formularz. Pola nie mogą być puste. Telefon i Email powinny mieć odpowiedni format. Regulamin musi być zaakceptowany. Pokaż użytkownikowi informacje o błędach, jeśli takie będą miały miejsce. 
6. Wyślij formularz do kolekcji 'kandydaci' w Firebase. Jeśli dane zostały zapisane wyświetl użytkownikowi informacje o tym fakcie.
7. W ekranie Kandydaci pokaż listę dodanych kandydatów.
8. Popracuj nad wyglądem aplikacji – będzie nam za chwilę potrzebna w następnym zadaniu.
