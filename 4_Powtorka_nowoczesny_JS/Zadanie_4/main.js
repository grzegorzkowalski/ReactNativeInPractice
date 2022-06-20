//Stwórz dwie tablice.
//
// Jedna vegetables niech zawiera twoje ulubione warzywa, druga fruits twoje ulubione owoce.
// Stwórz zmienną salad.
// Do zmiennej salad przypisz nową tablicę, która będzie połączeniem dwóch powyższych tablic. Do łączenia użyj spread operatora.

const vegetables = ["onion", "tomato", "potato"];
const fruits = ["apple", "cherry", "pineapple"];
const salad = [...vegetables, ...fruits];
