import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
  main: {
    marginTop: 50,
  },
  backLink: {
    marginBottom: 10,
    color: '#22f',
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  dealDetailInfo: {
    flexDirection: 'row', // this makes the items display horizontally
    justifyContent: 'space-between', // this distributes the items evenly along the row
    alignItems: 'center', // this centers the items vertically
    padding: '10%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: 'rgba(237, 149, 45, 0.9)',
  },
  cause: { fontSize: 20 },
  price: {
    fontSize: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  user: {
    alignItems: 'center',
    padding: '2%',
  },
  dealDetailUserText: {
    textAlign: 'center',
    paddingTop: '5%',
  },
  description: {
    borderColor: '#ddd',
    borderWidth: 5,
    borderStyle: 'solid',
    padding: '5%',
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  deal: {
    marginHorizontal: 12,
    marginTop: 12,
  },
  dealItemImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  dealItemInfo: {
    padding: '4%',
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  dealItemtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  dealItemcause: {
    flex: 2,
  },
  dealItemprice: {
    fontSize: 10,
  },
});
