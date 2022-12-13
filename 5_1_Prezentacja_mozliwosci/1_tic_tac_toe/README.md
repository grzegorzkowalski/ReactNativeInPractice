# Kółko i krzyżyk

To twoja druga aplikacja w React Native. Potraktujmy ją jako aplikację typu `Hello world`.
Aplikacja "prawie" działa – brakuje jej jedynie linka w ekranie startowym. 
1. odpal aplikacje używając komend `npm i` oraz `npm start`
2. na ekranie startowym – znajdującym się w komponencie `Welcome Screen` 
   w pliku `./components/WelcomeScreen/index.js` znajduje się komponent `Text` zachęcający do gry. 
   Brakuje mu jedynie linka do właściwego ekranu. 
   Podlinkuj tekst przy pomocy props'a `onPress={() => navigation.navigate('Game')`. 
   Props musisz umieścić w komponencie reagującym na przycisk. Masz kilka do wyboru:
   * https://reactnative.dev/docs/pressable
   * https://reactnative.dev/docs/button
   * https://reactnative.dev/docs/touchableopacity
   * https://reactnative.dev/docs/touchablehighlight

Na tym etapie nie musisz wszystkiego rozumieć. W trakcie kursu nauczymy się wszystkich 
zastosowanych w tym przykładzie rozwiązań.

Twoja aplikacja jest nieco zaawansowana. Poświęć chwilę, żeby spróbować zrozumieć jej działanie.