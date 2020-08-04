import React from 'react';
import { Card, Button } from 'react-native-paper'
import { Image, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';
import * as SneakersApi from '@shoeboi/api'
import { View, Text } from './Themed';

export interface ContentProps {
    content: SneakersApi.Schema.Sneakers.Api.Content.Response.Thread
    onSelect: (event: GestureResponderEvent) => void
    selected: boolean
    onEntrySelection: (product: SneakersApi.Schema.Sneakers.Api.Content.Response.Thread, skuId: string) => void
}

export function ContentView(props: ContentProps) {
    const { content, selected, onSelect, onEntrySelection }  = props
    const backgroundColor = selected ? '#eee' : 'rgba(255,255,255,0.1)'
    const newEntry = (skuId: string) => {
        onEntrySelection(content, skuId)
    }
    return (
        <TouchableOpacity onPress={onSelect} style={[styles.container, { backgroundColor: backgroundColor }]}>
            <Image style={styles.logo} source={{ uri: content.squareImageUrl }} />
            <Text style={styles.title}>{content.product.title}</Text>
            <Text style={styles.subtitle}>{content.product.subtitle}, {content.product.startSellDate}</Text>
            { selected &&
                <View>
                    <Text style={styles.subtitle}>ProductId: {content.product.id}</Text>
                    <Text style={styles.subtitle}>Pick a SKU:</Text>
                    { content.product.skus.map((item, index) => 
                        <View key={index}>
                            <Text style={styles.subtitle}>skuId: {item.id}</Text>
                            <Text style={styles.subtitle}>size: {item.localizedSize}</Text>
                            <Text style={styles.subtitle}>available: {item.available}</Text>
                            <Button onPress={() => newEntry(item.id)}>Choose this guy</Button>
                        </View>
                    )}
                </View>
            } 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    title: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
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
})