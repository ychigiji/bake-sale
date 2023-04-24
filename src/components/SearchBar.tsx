import { TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { style } from '../styles';

interface SearchBarProps {
  searchDeals: (term: string) => Promise<void>;
}
const SearchBar = ({ searchDeals }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = debounce((term: string) => {
    searchDeals(term);
  }, 300);

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, handleSearch]);
  return (
    <TextInput
      placeholder="Search All Deals"
      style={style.input}
      onChangeText={term => setSearchTerm(term)}
    />
  );
};
export default SearchBar;
