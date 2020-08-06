// import React from 'react'
// import { RouteProp } from '@react-navigation/native';
// import { Entry, TabThreeParamList } from '../types'
// import { useState } from 'react';
// import { SafeAreaView, StyleSheet, Image } from 'react-native';
// import { Text, View } from '../components/Themed';
// import * as apiHelper from '../packages/api/sneakers'

// interface IProps {
//     route: RouteProp<TabThreeParamList, 'TabThreeScreen'>
// }

// const runnerTime = async(productId: string, skuId: string, entryUpdate: (skuId: string, status: string) => void) => {
//     console.log("runner Time!!!!")
//     // runner, get entry id
//     const entryRes = await apiHelper.RunEntry(productId, skuId)
//     let status = entryRes?.result?.status || 'Failed'
//     entryUpdate(skuId, status)

//     while (status == 'PENDING' && entryRes?.id) {
//         setTimeout(10000)
//         const checkEntry = await apiHelper.CheckEntry(entryRes.id)
//         status = checkEntry?.result?.status || 'Failed'
//         entryUpdate(skuId, status)
//     }
// }

// export default function TabThreeScreen(props: IProps) {
//     const { entry } = props.route.params

//     if (entry && entry.product && entry.skuId) {
//         const sku = entry.product.product.skus.find(element => element.id == entry.skuId)
//         const status = entry.status
    
//         runnerTime(entry.product.product.id, entry.skuId, props.route.params.onEntryUpdate)
    
//         return (
//             <View style={styles.container}>
//                 <Image style={styles.logo} source={{ uri: entry.product.squareImageUrl }} />
//                 <Text style={styles.title}>Name: {entry.product.name}</Text>
//                 <Text style={styles.title}>Drops: {entry.product.product.startSellDate}</Text>
//                 <Text style={styles.title}>Size: {sku?.localizedSize}</Text>
    
//                 <Text style={styles.title}>Status: {status}</Text>
//             </View>
//         )
//     }
//     return (<Text>No Confirm Yet</Text>)
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     title: {
//       fontSize: 20,
//       fontWeight: 'bold',
//     },
//     separator: {
//       marginVertical: 30,
//       height: 1,
//       width: '80%',
//     },
//     subtitle: {
//       margin: 24,
//       marginTop: 0,
//       fontSize: 12,
//       textAlign: 'center'
//     },
//     logo: {
//       height: 128,
//       width: 128
//     }
//   });