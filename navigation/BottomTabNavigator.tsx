import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, Entry } from '../types';
import * as SneakersApi from '@shoeboi/api';
import { RouteProp } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

interface IProps {
  navigation: StackNavigationProp<BottomTabParamList, 'TabOne'>
}

interface IState {
  entries: Entry[]
}

export default class BottomTabNavigator extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      entries: []
    }

    this.newEnty = this.newEnty.bind(this)
  }

  newEnty(product: SneakersApi.Schema.Sneakers.Api.Content.Response.Thread, skuId: string): void {
    // call backend and schtuff, setup push notification
    console.log('new entry for product', product.name, ', skuId=', skuId)
    const entries = this.state.entries
    entries.push({
      product: product,
      skuId: skuId,
      status: 'unconfirmed'
    } as Entry)
    this.props.navigation.navigate('TabTwo', { entries: entries } )
    this.setState({
      entries: entries
    })
  }

  render() {
    const colorScheme = 'light';
    const entries = this.state.entries;

    return (
      <BottomTab.Navigator
        initialRouteName="TabOne"
        tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
        <BottomTab.Screen
          name="TabOne"
          component={TabOneNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />
          }}
          initialParams={{ onNewEntry: this.newEnty }}
        />
        <BottomTab.Screen
          name="TabTwo"
          component={TabTwoNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }}
          initialParams={{ entries: entries }}
        />
      </BottomTab.Navigator>
    );
  }
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator({ navigation, route }: { navigation: StackNavigationProp<BottomTabParamList, 'TabOne'>, route: RouteProp<BottomTabParamList, 'TabOne'> }) {
  const onNewEntry = (product: SneakersApi.Schema.Sneakers.Api.Content.Response.Thread, skuId: string): void => {
    route.params.onNewEntry(product, skuId)
    // navigation.navigate('TabTwo', {
    //   entries: 
    // })
  }
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Content' }}
        initialParams={{ onNewEntry: onNewEntry }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

type TabTwoNavProps = {
  route: RouteProp<BottomTabParamList, 'TabTwo'>
}
class TabTwoNavigator extends React.Component<TabTwoNavProps> {
  constructor(props: TabTwoNavProps) {
    super(props)
  }

  render() {
    const entries = this.props.route.params.entries
    return (
      <TabTwoStack.Navigator>
        <TabTwoStack.Screen
          name="TabTwoScreen"
          component={TabTwoScreen}
          options={{ headerTitle: 'Queue' }}
          initialParams={{ entries: entries }}
        />
      </TabTwoStack.Navigator>
    );
  }
}
