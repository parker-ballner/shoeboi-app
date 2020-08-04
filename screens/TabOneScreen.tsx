import * as React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import { Text, View } from '../components/Themed';
import { ContentView } from '../components/ContentView';
import Constants from 'expo-constants';

import * as SneakersApi from '@shoeboi/api'
import { GetUpcomingContent } from '../packages/api/sneakers'
import { FlatList } from 'react-native-gesture-handler';

import { BottomTabParamList } from '../types';
import { RouteProp } from '@react-navigation/native';

interface IProps {
  route: RouteProp<BottomTabParamList, 'TabOne'>
}
interface IState {
  content: SneakersApi.Schema.Sneakers.Api.Content.Response.Thread[]
  selectedId: string 
}

export default class TabOneScreen extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      content: [],
      selectedId: ''
    }

    this.refreshContent = this.refreshContent.bind(this)
    this.selectContent = this.selectContent.bind(this)
  }

  componentDidMount() {
    this.refreshContent()
  }

  refreshContent = async (): Promise<void> => {
    const content = await GetUpcomingContent(10)
    this.setState({
      content: content
    })
  }

  selectContent(itemId: string) {
    this.setState({
      selectedId: itemId
    })
  }

  render() {
    const { content, selectedId } = this.state;
    const renderContent = ({ item }: { item: SneakersApi.Schema.Sneakers.Api.Content.Response.Thread }): JSX.Element => {
      return <ContentView content={item} onSelect={() => this.selectContent(item.id)} selected={item.id === selectedId} onEntrySelection={this.props.route.params.onNewEntry}/>
    }
    return (
      <SafeAreaView style={styles.container}>
        {content && content.length > 0 ?
          <FlatList
            data={content}
            renderItem={renderContent}
            keyExtractor={item => item.id}
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
    paddingTop: Constants.statusBarHeight,
    marginTop: StatusBar.currentHeight || 0,
    padding: 8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }
});
