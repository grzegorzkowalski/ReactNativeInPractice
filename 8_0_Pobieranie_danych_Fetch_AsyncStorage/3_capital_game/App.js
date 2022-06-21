import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

const countries =["af","al","dz","as","ad","ao","ai","aq","ag","ar","am","aw","au","at","az","bs","bh","bd","bb","by","be","bz","bj","bm","bt","bo","bq","ba","bw","bv","br","io","bn","bg","bf","bi","cv","kh","cm","ca","ky","cf","td","cl","cn","cx","cc","co","km","cd","cg","ck","cr","hr","cu","cw","cy","cz","ci","dk","dj","dm","do","ec","eg","sv","gq","er","ee","sz","et","fk","fo","fj","fi","fr","gf","pf","tf","ga","gm","ge","de","gh","gi","gr","gl","gd","gp","gu","gt","gg","gn","gw","gy","ht","hm","va","hn","hk","hu","is","in","id","ir","iq","ie","im","il","it","jm","jp","je","jo","kz","ke","ki","kp","kr","kw","kg","la","lv","lb","ls","lr","ly","li","lt","lu","mo","mg","mw","my","mv","ml","mt","mh","mq","mr","mu","yt","mx","fm","md","mc","mn","me","ms","ma","mz","mm","na","nr","np","nl","nc","nz","ni","ne","ng","nu","nf","mp","no","om","pk","pw","ps","pa","pg","py","pe","ph","pn","pl","pt","pr","qa","mk","ro","ru","rw","re","bl","sh","kn","lc","mf","pm","vc","ws","sm","st","sa","sn","rs","sc","sl","sg","sx","sk","si","sb","so","za","gs","ss","es","lk","sd","sr","sj","se","ch","sy","tw","tj","tz","th","tl","tg","tk","to","tt","tn","tr","tm","tc","tv","ug","ua","ae","gb","um","us","uy","uz","vu","ve","vn","vg","vi","wf","eh","ye","zm","zw","ax"];

const API_Key = "wstaw tu swój klucz API";

const code = "";

const API_URL = `http://api.countrylayer.com/v2/alpha/${code}?access_key=${API_Key}`;

export default function App() {
  const [country, setCountry] = useState({name: 'no name'});
  const [capitol, setCapitol] = useState('');
  const [result, setResult] = useState('');

  const handleGame = () => {

  }
  
  return (
    <View style={styles.container}>
      <Text>{country.name}</Text>
      <TextInput style={{border: '1px solid black', 'margin': 30}} onChangeText={setCapitol} value={capitol} />
      <Button title={"Sprawdź odpowiedź"} onPress={() => {
        handleGame()
      }}>

      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
