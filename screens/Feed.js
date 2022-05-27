import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    FlatList,
    SafeAreaView,
    Image
} from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";

export default function Feed() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} />
      <View style={styles.appTitle}>
        <View style={styles.appIcon}>
          <Image
              source={require('../assets/logo.png')}
              style={styles.iconImage}
          ></Image> 
        </View>
        <View style={appTitleTextContainer}>
          <Text style={styles.appTitleText} > Sprectagram </Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
          <FlatList
          keyExtractor={this.keyExtractor}
          data={posts}
          renderItem={this.renderItem}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.85
  }
});