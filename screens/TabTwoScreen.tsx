import * as React from 'react';
import { Button } from 'react-native-paper'
import { StyleSheet, SafeAreaView, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import * as SneakersApi from '@shoeboi/api';
import { RouteProp } from '@react-navigation/native';
import { BottomTabParamList, TabTwoParamList } from '../types';

interface IProps {
  route: RouteProp<TabTwoParamList, 'TabTwoScreen'>
}

interface Entry {
  skuId: string
  product: SneakersApi.Schema.Sneakers.Api.Content.Response.Thread
  status: string
}
interface IState {
  selectedId: string
}

export default class TabTwoScreen extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      selectedId: ''
    }
  }

render() {
  const { selectedId } = this.state
  const { entries } = this.props.route.params
  const currDate = new Date().getTime()
  const renderContent = ({ item }: { item: Entry }): JSX.Element => {
    const sku = item.product.product.skus.find(element => element.id == item.skuId)
    const dropDate = new Date(item.product.product.startSellDate).getTime()
    return (
      <TouchableOpacity onPress={() => this.setState({ selectedId: item.skuId })}>
        <Image style={styles.logo} source={{ uri: item.product.squareImageUrl }} />
        <Text style={styles.title}>Name: {item.product.name}</Text>
        <Text style={styles.title}>Drops: {item.product.product.startSellDate}</Text>
        <Text style={styles.title}>Size: {sku?.localizedSize}</Text>
        {item.skuId === selectedId &&
          <View>
            <Text style={styles.title}>Countdown: {dropDate - currDate}</Text>
            <Text style={styles.title}>Status: {item.status}</Text>
            <Button onPress={() => console.log(`skuId ${item.skuId} clicked`)}>Confirm or some shit</Button>
          </View>
        }
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {entries.length > 0 ?
        <FlatList
          data={entries}
          renderItem={renderContent}
          keyExtractor={item => item.skuId}
          numColumns={1}
          extraData={selectedId}
        /> :
        <Text style={styles.title}>Loading...</Text>
      }
    </SafeAreaView>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  subtitle: {
    margin: 24,
    marginTop: 0,
    fontSize: 12,
    textAlign: 'center'
  },
  logo: {
    height: 128,
    width: 128
  }
});
