import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-native-paper'
import { StyleSheet, SafeAreaView, Image, Platform } from 'react-native';

import { Text, View } from '../components/Themed';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import * as SneakersApi from '@shoeboi/api';
import { RouteProp } from '@react-navigation/native';
import { TabTwoParamList, Entry } from '../types';

import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Subscription } from '@unimodules/core';

import * as apiHelper from '../packages/api/sneakers'

interface IProps {
  route: RouteProp<TabTwoParamList, 'TabTwoScreen'>
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false
  })
})

export default function TabTwoScreen(props: IProps) {
  const [selected, setSelected] = useState<{ id: string, status: string, message: string }>({
    id: '',
    status: '',
    message: ''
  })
  const [runningOrder, setRunningOrder] = useState<boolean>(false)
  // const [expoPushToken, setExpoPushToken] = useState<string>('')
  // const [notification, setNotification] = useState(false)
  // const notificationListener = useRef<Subscription>()
  // const responseListener = useRef<Subscription>()

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token: string | undefined) => setExpoPushToken(token ?? ''));

  //   // This listener is fired whenever a notification is received while the app is foregrounded
  //   notificationListener.current = Notifications.addNotificationReceivedListener((event: Notifications.Notification) => {
  //     setNotification(notification);
  //   });

  //   // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
  //     console.log(response);
  //   });

  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener.current ?? {} as Subscription);
  //     Notifications.removeNotificationSubscription(responseListener.current ?? {} as Subscription);
  //     setRunningOrder(false)
  //   };
  // }, []);

  const confirmEntry = (item: Entry): void => {
    console.log(`skuId ${item.skuId} clicked`)
    setSelected({ id: item.skuId, status: 'waiting', message: '' })

    setRunningOrder(true)

    console.log('checking')
    console.log(new Date())
    console.log(new Date(item.product.product.startSellDate))
    //sendPushNotification(expoPushToken, item.product)
    if (new Date() >= new Date(item.product.product.startSellDate)) {
      run(item)
      return
    }
    setTimeout(() => {
      confirmEntry(item)
    }, 10000)
  }

  const run = async (item: Entry): Promise<void> => {
    setSelected({ id: item.skuId, status: 'running', message: '' })
    console.log("runner Time!!!!")

    // runner, get entry id
    const entryRes = await apiHelper.RunEntry(item.product.product.id, item.skuId)
    const id = entryRes?.id
    let status = id ? 'PENDING' : 'FAILED'

    let message = `runner done, got id: ${id} and status: ${status}`
    console.log(message)
    setSelected({ id: item.skuId, status: status, message: message })

    while (status == 'PENDING' && id) {
      setTimeout(5000)
      const checkEntry = await apiHelper.CheckEntry(id)
      status = checkEntry?.result?.status || 'FAILED'
      let message = status == 'PENDING' ? 'waiting for entry confirmation' : 'done'
      setSelected({ id: item.skuId, status: status, message: message })
    }
  }

  const { entries } = props.route.params
  const currDate = new Date().getTime()
  const renderContent = ({ item }: { item: Entry }): JSX.Element => {
    const sku = item.product.product.skus.find(element => element.id == item.skuId)
    const dropDate = new Date(item.product.product.startSellDate).getTime()
    return (
      <TouchableOpacity onPress={() => { if (!runningOrder) setSelected({ id: item.skuId, status: item.status, message: '' }) }}>
        <Image style={styles.logo} source={{ uri: item.product.squareImageUrl }} />
        <Text style={styles.title}>Name: {item.product.name}</Text>
        <Text style={styles.title}>Drops: {item.product.product.startSellDate}</Text>
        <Text style={styles.title}>Size: {sku?.localizedSize}</Text>
        {item.skuId === selected.id &&
          <View>
            <Text style={styles.title}>Countdown: {dropDate - currDate}</Text>
            <Text style={styles.title}>Status: {selected.status}</Text>
            <Text style={styles.title}>Message: {selected.message}</Text>
            <Button onPress={() => confirmEntry(item)}>Confirm or some shit</Button>
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
          extraData={selected.id}
        /> :
        <Text style={styles.title}>Loading...</Text>
      }
    </SafeAreaView>
  );
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

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
async function sendPushNotification(expoPushToken: string, product: SneakersApi.Schema.Sneakers.Api.Content.Response.Thread) {
  await setTimeout(10000)

  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Shoe Drop!',
    body: `${product.title} is about to drop! Get over here brah`,
    data: { data: 'data?' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}