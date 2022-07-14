import React, { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import FocusedStatusBar from '../components/FocusedStatusBar';
import NFTCard from '../components/NFTCard';
import HomeHeader from '../components/HomeHeader';
import { COLORS, NFTData } from '../constants';

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value?.length) setNftData(NFTData);

    const filteredData = NFTData?.filter((item) =>
      item.name.toLowerCase().includes(value?.toLowerCase())
    );

    if (filteredData?.length > 0) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View style={{ flex: 1 }}>
        {/*  for making parallax effect */}
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item?.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
      </View>

      <View
        style={{
          // for making parallax effect
          position: 'absolute',
          // for making parallax effect
          zIndex: -1,
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}>
        <View style={{ height: 300, backgroundColor: COLORS.primary }} />
        <View style={{ flex: 1, backgroundColor: COLORS.white }} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
