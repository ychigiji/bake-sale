import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { fetchDealsSearchTerm, fetchInitialDeals } from './src/ajax';
import SearchBar from './src/components/SearchBar';
import DealsList from './src/components/DealsList';

import { Deal } from './src/models/dealsModels';
import DealDetail from './src/components/DealDetail';
import { style } from './src/styles';

function App(): JSX.Element {
  const [data, setData] = useState<Deal[]>([]);
  const [currentDealId, setCurrentDealId] = useState<string | null>(null);
  const [dealsFromSearch, setDealsFromSearch] = useState<Deal[]>([]);

  //setting deals initially  when we first load the app
  useEffect(() => {
    const fetchData = async () => {
      const deals = await fetchInitialDeals();
      setData(deals);
    };
    fetchData();
  }, []);

  const searchDeals = async (searchTerm: string) => {
    let deals = [];
    if (searchTerm) {
      deals = await fetchDealsSearchTerm(searchTerm);
    }
    setDealsFromSearch(deals);
  };

  const selectedDeal = data.find(deal => deal.key === currentDealId);
  if (currentDealId && selectedDeal) {
    return (
      <View style={style.main}>
        <DealDetail
          key={selectedDeal.key}
          id={selectedDeal.key}
          cause={selectedDeal.cause}
          media={selectedDeal.media}
          price={selectedDeal.price}
          title={selectedDeal.title}
          onItemPress={() => setCurrentDealId(null)}
        />
      </View>
    );
  }

  const dealsToDisplay = dealsFromSearch.length > 0 ? dealsFromSearch : data;
  if (dealsToDisplay.length > 0 || currentDealId === null) {
    return (
      <View style={style.main}>
        <SearchBar searchDeals={searchDeals} />
        <DealsList
          deals={dealsToDisplay}
          onItemPress={(dealId: string | null) => setCurrentDealId(dealId)}
        />
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Text style={style.header}> BakeSale </Text>
    </View>
  );
}

export default App;
