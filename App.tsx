
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import Header from './src/components/Header';
import MeliMaisBar from './src/components/MeliMaisBar';
import Servicos from './src/components/Servicos';
import Propaganda from './src/components/Propaganda';
import Cards from './src/components/Cards';
import CreateAccountCard from './src/components/CreateAccountCard';
import { cardList } from './src/data/cardList';
import SemanaGamer from './src/components/SemanaGamer';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.outHeaderContainer}>
          <SemanaGamer />
          <MeliMaisBar />
          <Servicos />
          <Propaganda />
          <FlatList
            keyExtractor={item => item.title}
            data={cardList}
            renderItem={({ item }) => <Cards {...item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardListContainer}
          />
          <CreateAccountCard />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },
  outHeaderContainer: {
    paddingTop: "31.3%",
  },
  cardListContainer: {
    paddingHorizontal: "3%",
    top: "18%",
    height: 280,
  }
});