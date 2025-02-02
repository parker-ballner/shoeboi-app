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
  selectedEntry: Entry | undefined
}

export default class BottomTabNavigator extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      entries: [
        {
          product: {
            "id": "6514ba86-a803-48e3-85fe-c09e8336112e",
            "threadId": "6514ba86-a803-48e3-85fe-c09e8336112e",
            "interestId": "ba4db18b-695a-34e4-8852-d3824718106c",
            "name": "Fake shoe",
            "lastUpdatedDate": "2020-08-04T01:32:23.967000",
            "lastUpdatedTime": "2020-08-04T01:32:23.967000",
            "publishedDate": "2020-08-04T00:00:22.218000",
            "restricted": false,
            "feed": "d879aa85-698c-41a1-b066-a8ecdf6b8a9c",
            "title": "Fake Shoe",
            "subtitle": "Air Jordan 1",
            "seoSlug": "air-jordan-1-satin-red",
            "seoTitle": "Women’s Air Jordan 1 High OG 'Satin Red'",
            "seoDescription": "Explore and buy the Women’s Air Jordan 1 High OG 'Satin Red'. Stay a step ahead of the latest sneaker launches and drops.",
            "tags": null,
            "imageUrl": "https://static.nike.com/a/images/t_prod_ss/w_750,c_limit/a32f56d9-a1ca-4f43-9f6c-befc62182225/womens-air-jordan-1-high-og-satin-red.jpg",
            "squareImageUrl": "https://static.nike.com/a/images/t_prod_ss/w_750,c_limit/a32f56d9-a1ca-4f43-9f6c-befc62182225/womens-air-jordan-1-high-og-satin-red.jpg",
            "portraitImageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/a32f56d9-a1ca-4f43-9f6c-befc62182225/womens-air-jordan-1-high-og-satin-red.jpg",
            "relations": [],
            "product": {
              "id": "cc205772-1d73-508f-b3cc-2335ee1c5583",
              "interestId": "ba4db18b-695a-34e4-8852-d3824718106c",
              "style": "CD0461",
              "colorCode": "601",
              "globalPid": "12947585",
              "title": "Air Jordan 1 High OG",
              "subtitle": "Shoe",
              "imageUrl": "https://secure-images.nike.com/is/image/DotCom/CD0461_601",
              "genders": [
                "MEN",
                "WOMEN"
              ],
              "quantityLimit": 1,
              "merchStatus": "HOLD",
              "colorDescription": "Gym Red/White/Black",
              "available": true,
              "publishType": "LAUNCH",
              "productType": "FOOTWEAR",
              "upcoming": true,
              "price": {
                "msrp": 170,
                "fullRetailPrice": 170,
                "currentRetailPrice": 170,
                "onSale": false
              },
              "selectionEngine": "LEO",
              "startSellDate": "2020-08-06T03:10:00.000000",
              "skus": [
                {
                  "id": "8339ee28-39ed-5d1d-a5bf-d7a5f48cd097",
                  "localizedSize": "W 5 / M 3.5",
                  "localizedSizePrefix": null,
                  "nikeSize": "5",
                  "available": true
                },
                {
                  "id": "62a0d774-1fb4-5e98-9708-010593bd036d",
                  "localizedSize": "W 5.5 / M 4",
                  "localizedSizePrefix": null,
                  "nikeSize": "5.5",
                  "available": true
                },
                {
                  "id": "c0bb6915-2718-54c8-86f6-83458f1d6c9f",
                  "localizedSize": "W 6 / M 4.5",
                  "localizedSizePrefix": null,
                  "nikeSize": "6",
                  "available": true
                },
                {
                  "id": "8e7e01f2-9e94-5b73-98e0-462ad82f59a1",
                  "localizedSize": "W 6.5 / M 5",
                  "localizedSizePrefix": null,
                  "nikeSize": "6.5",
                  "available": true
                },
                {
                  "id": "6abf5b2a-33c1-5d66-80ad-7a398963da09",
                  "localizedSize": "W 7 / M 5.5",
                  "localizedSizePrefix": null,
                  "nikeSize": "7",
                  "available": true
                },
                {
                  "id": "51bd6b98-05c5-5291-86ed-ac81e2dae4b0",
                  "localizedSize": "W 7.5 / M 6",
                  "localizedSizePrefix": null,
                  "nikeSize": "7.5",
                  "available": true
                },
                {
                  "id": "252b9cd5-67cd-5c48-8283-9f3edd2eca43",
                  "localizedSize": "W 8 / M 6.5",
                  "localizedSizePrefix": null,
                  "nikeSize": "8",
                  "available": true
                },
                {
                  "id": "fa082a67-ef6b-5897-85d2-091c6a822cc9",
                  "localizedSize": "W 8.5 / M 7",
                  "localizedSizePrefix": null,
                  "nikeSize": "8.5",
                  "available": true
                },
                {
                  "id": "2eb6bad0-950a-58d2-a2be-3b4b4ea7c018",
                  "localizedSize": "W 9 / M 7.5",
                  "localizedSizePrefix": null,
                  "nikeSize": "9",
                  "available": true
                },
                {
                  "id": "9132ac61-29e8-524a-a152-1228217f1bff",
                  "localizedSize": "W 9.5 / M 8",
                  "localizedSizePrefix": null,
                  "nikeSize": "9.5",
                  "available": true
                },
                {
                  "id": "6823dd48-eaa6-5fb3-b5a2-7f41af3cfe4d",
                  "localizedSize": "W 10 / M 8.5",
                  "localizedSizePrefix": null,
                  "nikeSize": "10",
                  "available": true
                },
                {
                  "id": "1e7589e0-d9c4-560b-85ee-614008e0a6cc",
                  "localizedSize": "W 10.5 / M 9",
                  "localizedSizePrefix": null,
                  "nikeSize": "10.5",
                  "available": true
                },
                {
                  "id": "9c053291-ad73-5919-a373-24a97083c66d",
                  "localizedSize": "W 11 / M 9.5",
                  "localizedSizePrefix": null,
                  "nikeSize": "11",
                  "available": true
                },
                {
                  "id": "6af92044-1f5b-5963-9800-3b5d05a361c8",
                  "localizedSize": "W 11.5 / M 10",
                  "localizedSizePrefix": null,
                  "nikeSize": "11.5",
                  "available": true
                },
                {
                  "id": "86743472-6c1c-5a02-9505-3e3e24063631",
                  "localizedSize": "W 12 / M 10.5",
                  "localizedSizePrefix": null,
                  "nikeSize": "12",
                  "available": true
                }
              ],
              "expireDate": "3000-01-01T19:00:00.000000"
            },
            "cards": [
              {
                "id": "61ad5f92-30fd-485b-a402-eea5b2ff0c17",
                "cardId": "61ad5f92-30fd-485b-a402-eea5b2ff0c17",
                "type": "photo-carousel",
                "title": "Satin Red",
                "subtitle": "Air Jordan 1",
                "description": "The Air Jordan 1 changed footwear forever—and the original 'Black Toe' colorway played an essential role in establishing the silhouette as a cultural icon. A women’s-only release from 2019 revived the famous makeup with a similar look featuring satin material instead of just leather. This new release also showcases parallel styling, but incorporates a mix of both satin and faux snakeskin. Timeless black and red color-blocking remains unchanged, as does the shoe’s timeless construction and support.\n\nSKU: CD0461-601",
                "iOSOnly": false,
                "colorHint": {
                  "text": "000000",
                  "active": "000000",
                  "inactive": "808080",
                  "pressed": "4F4F4F"
                },
                "cta": {
                  "buyingTools": true,
                  "text": "NOTIFY ME"
                },
                "images": [
                  {
                    "type": "card",
                    "imageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/2d4e4142-9425-4af0-95ee-ab1379149957/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/t_prod_ss/w_750,c_limit/2d4e4142-9425-4af0-95ee-ab1379149957/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/2d4e4142-9425-4af0-95ee-ab1379149957/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 1,
                    "alt": ""
                  },
                  {
                    "type": "thread",
                    "imageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/2d4e4142-9425-4af0-95ee-ab1379149957/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/t_prod_ss/w_750,c_limit/2d4e4142-9425-4af0-95ee-ab1379149957/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/2d4e4142-9425-4af0-95ee-ab1379149957/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 1,
                    "alt": ""
                  },
                  {
                    "type": "alternate",
                    "imageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/2d4e4142-9425-4af0-95ee-ab1379149957/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/t_prod_ss/w_750,c_limit/2d4e4142-9425-4af0-95ee-ab1379149957/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/2d4e4142-9425-4af0-95ee-ab1379149957/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 1,
                    "alt": ""
                  },
                  {
                    "type": "alternate",
                    "imageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/b14ec66c-afb0-4e90-8d17-de9c66b1eb05/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/t_prod_ss/w_750,c_limit/b14ec66c-afb0-4e90-8d17-de9c66b1eb05/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/b14ec66c-afb0-4e90-8d17-de9c66b1eb05/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 2,
                    "alt": ""
                  },
                  {
                    "type": "alternate",
                    "imageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/e0152d27-16b6-4a77-b80d-1db9dc7cf30d/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/t_prod_ss/w_750,c_limit/e0152d27-16b6-4a77-b80d-1db9dc7cf30d/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/e0152d27-16b6-4a77-b80d-1db9dc7cf30d/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 3,
                    "alt": ""
                  },
                  {
                    "type": "alternate",
                    "imageUrl": "https://static.nike.com/a/images/t_prod_pc/w_750,c_limit/ba732de1-dac9-4dfb-a110-cb4a8367f6c0/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/t_prod_sc/w_750,c_limit/ba732de1-dac9-4dfb-a110-cb4a8367f6c0/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/t_prod_pc/w_750,c_limit/ba732de1-dac9-4dfb-a110-cb4a8367f6c0/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 4,
                    "alt": ""
                  },
                  {
                    "type": "alternate",
                    "imageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/c5fd5d61-7b0f-42f7-b69a-89c0bb92cc26/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/t_prod_ss/w_750,c_limit/c5fd5d61-7b0f-42f7-b69a-89c0bb92cc26/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/c5fd5d61-7b0f-42f7-b69a-89c0bb92cc26/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 5,
                    "alt": ""
                  },
                  {
                    "type": "alternate",
                    "imageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/14d3d351-749b-4db1-9230-b2075f1e70b6/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/t_prod_ss/w_750,c_limit/14d3d351-749b-4db1-9230-b2075f1e70b6/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/14d3d351-749b-4db1-9230-b2075f1e70b6/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 6,
                    "alt": ""
                  }
                ],
                "product": {
                  "id": "79f50e18-dacf-560e-bb64-4df906c374fd",
                  "interestId": "ba4db18b-695a-34e4-8852-d3824718106c",
                  "style": "CD0461",
                  "colorCode": "601",
                  "globalPid": "12947585",
                  "title": "Air Jordan 1 High OG",
                  "subtitle": "Shoe",
                  "imageUrl": "https://secure-images.nike.com/is/image/DotCom/CD0461_601",
                  "genders": [
                    "MEN",
                    "WOMEN"
                  ],
                  "quantityLimit": 1,
                  "merchStatus": "HOLD",
                  "colorDescription": "Gym Red/White/Black",
                  "available": true,
                  "publishType": "LAUNCH",
                  "productType": "FOOTWEAR",
                  "upcoming": true,
                  "price": {
                    "msrp": 170,
                    "fullRetailPrice": 170,
                    "currentRetailPrice": 170,
                    "onSale": false
                  },
                  "selectionEngine": "LEO",
                  "startSellDate": "2020-08-06T14:00:00.000000",
                  "skus": [
                    {
                      "id": "8339ee28-39ed-5d1d-a5bf-d7a5f48cd097",
                      "localizedSize": "W 5 / M 3.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "5",
                      "available": true
                    },
                    {
                      "id": "62a0d774-1fb4-5e98-9708-010593bd036d",
                      "localizedSize": "W 5.5 / M 4",
                      "localizedSizePrefix": null,
                      "nikeSize": "5.5",
                      "available": true
                    },
                    {
                      "id": "c0bb6915-2718-54c8-86f6-83458f1d6c9f",
                      "localizedSize": "W 6 / M 4.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "6",
                      "available": true
                    },
                    {
                      "id": "8e7e01f2-9e94-5b73-98e0-462ad82f59a1",
                      "localizedSize": "W 6.5 / M 5",
                      "localizedSizePrefix": null,
                      "nikeSize": "6.5",
                      "available": true
                    },
                    {
                      "id": "6abf5b2a-33c1-5d66-80ad-7a398963da09",
                      "localizedSize": "W 7 / M 5.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "7",
                      "available": true
                    },
                    {
                      "id": "51bd6b98-05c5-5291-86ed-ac81e2dae4b0",
                      "localizedSize": "W 7.5 / M 6",
                      "localizedSizePrefix": null,
                      "nikeSize": "7.5",
                      "available": true
                    },
                    {
                      "id": "252b9cd5-67cd-5c48-8283-9f3edd2eca43",
                      "localizedSize": "W 8 / M 6.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "8",
                      "available": true
                    },
                    {
                      "id": "fa082a67-ef6b-5897-85d2-091c6a822cc9",
                      "localizedSize": "W 8.5 / M 7",
                      "localizedSizePrefix": null,
                      "nikeSize": "8.5",
                      "available": true
                    },
                    {
                      "id": "2eb6bad0-950a-58d2-a2be-3b4b4ea7c018",
                      "localizedSize": "W 9 / M 7.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "9",
                      "available": true
                    },
                    {
                      "id": "9132ac61-29e8-524a-a152-1228217f1bff",
                      "localizedSize": "W 9.5 / M 8",
                      "localizedSizePrefix": null,
                      "nikeSize": "9.5",
                      "available": true
                    },
                    {
                      "id": "6823dd48-eaa6-5fb3-b5a2-7f41af3cfe4d",
                      "localizedSize": "W 10 / M 8.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "10",
                      "available": true
                    },
                    {
                      "id": "1e7589e0-d9c4-560b-85ee-614008e0a6cc",
                      "localizedSize": "W 10.5 / M 9",
                      "localizedSizePrefix": null,
                      "nikeSize": "10.5",
                      "available": true
                    },
                    {
                      "id": "9c053291-ad73-5919-a373-24a97083c66d",
                      "localizedSize": "W 11 / M 9.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "11",
                      "available": true
                    },
                    {
                      "id": "6af92044-1f5b-5963-9800-3b5d05a361c8",
                      "localizedSize": "W 11.5 / M 10",
                      "localizedSizePrefix": null,
                      "nikeSize": "11.5",
                      "available": true
                    },
                    {
                      "id": "86743472-6c1c-5a02-9505-3e3e24063631",
                      "localizedSize": "W 12 / M 10.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "12",
                      "available": true
                    }
                  ]
                },
                "interestId": "ba4db18b-695a-34e4-8852-d3824718106c",
                "sortOrder": 1
              },
              {
                "id": "gen-61ad5f92-30fd-485b-a402-eea5b2ff0c17",
                "cardId": "gen-61ad5f92-30fd-485b-a402-eea5b2ff0c17",
                "type": "text",
                "title": "Satin Red",
                "subtitle": "Air Jordan 1",
                "description": "The Air Jordan 1 changed footwear forever—and the original 'Black Toe' colorway played an essential role in establishing the silhouette as a cultural icon. A women’s-only release from 2019 revived the famous makeup with a similar look featuring satin material instead of just leather. This new release also showcases parallel styling, but incorporates a mix of both satin and faux snakeskin. Timeless black and red color-blocking remains unchanged, as does the shoe’s timeless construction and support.\n\nSKU: CD0461-601",
                "iOSOnly": true,
                "colorHint": {
                  "text": "000000",
                  "active": "000000",
                  "inactive": "808080",
                  "pressed": "4F4F4F"
                },
                "cta": {
                  "buyingTools": true,
                  "text": "NOTIFY ME"
                },
                "product": {
                  "id": "79f50e18-dacf-560e-bb64-4df906c374fd",
                  "interestId": "ba4db18b-695a-34e4-8852-d3824718106c",
                  "style": "CD0461",
                  "colorCode": "601",
                  "globalPid": "12947585",
                  "title": "Air Jordan 1 High OG",
                  "subtitle": "Shoe",
                  "imageUrl": "https://secure-images.nike.com/is/image/DotCom/CD0461_601",
                  "genders": [
                    "MEN",
                    "WOMEN"
                  ],
                  "quantityLimit": 1,
                  "merchStatus": "HOLD",
                  "colorDescription": "Gym Red/White/Black",
                  "available": true,
                  "publishType": "LAUNCH",
                  "productType": "FOOTWEAR",
                  "upcoming": true,
                  "price": {
                    "msrp": 170,
                    "fullRetailPrice": 170,
                    "currentRetailPrice": 170,
                    "onSale": false
                  },
                  "selectionEngine": "LEO",
                  "startSellDate": "2020-08-06T14:00:00.000000",
                  "skus": [
                    {
                      "id": "8339ee28-39ed-5d1d-a5bf-d7a5f48cd097",
                      "localizedSize": "W 5 / M 3.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "5",
                      "available": true
                    },
                    {
                      "id": "62a0d774-1fb4-5e98-9708-010593bd036d",
                      "localizedSize": "W 5.5 / M 4",
                      "localizedSizePrefix": null,
                      "nikeSize": "5.5",
                      "available": true
                    },
                    {
                      "id": "c0bb6915-2718-54c8-86f6-83458f1d6c9f",
                      "localizedSize": "W 6 / M 4.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "6",
                      "available": true
                    },
                    {
                      "id": "8e7e01f2-9e94-5b73-98e0-462ad82f59a1",
                      "localizedSize": "W 6.5 / M 5",
                      "localizedSizePrefix": null,
                      "nikeSize": "6.5",
                      "available": true
                    },
                    {
                      "id": "6abf5b2a-33c1-5d66-80ad-7a398963da09",
                      "localizedSize": "W 7 / M 5.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "7",
                      "available": true
                    },
                    {
                      "id": "51bd6b98-05c5-5291-86ed-ac81e2dae4b0",
                      "localizedSize": "W 7.5 / M 6",
                      "localizedSizePrefix": null,
                      "nikeSize": "7.5",
                      "available": true
                    },
                    {
                      "id": "252b9cd5-67cd-5c48-8283-9f3edd2eca43",
                      "localizedSize": "W 8 / M 6.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "8",
                      "available": true
                    },
                    {
                      "id": "fa082a67-ef6b-5897-85d2-091c6a822cc9",
                      "localizedSize": "W 8.5 / M 7",
                      "localizedSizePrefix": null,
                      "nikeSize": "8.5",
                      "available": true
                    },
                    {
                      "id": "2eb6bad0-950a-58d2-a2be-3b4b4ea7c018",
                      "localizedSize": "W 9 / M 7.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "9",
                      "available": true
                    },
                    {
                      "id": "9132ac61-29e8-524a-a152-1228217f1bff",
                      "localizedSize": "W 9.5 / M 8",
                      "localizedSizePrefix": null,
                      "nikeSize": "9.5",
                      "available": true
                    },
                    {
                      "id": "6823dd48-eaa6-5fb3-b5a2-7f41af3cfe4d",
                      "localizedSize": "W 10 / M 8.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "10",
                      "available": true
                    },
                    {
                      "id": "1e7589e0-d9c4-560b-85ee-614008e0a6cc",
                      "localizedSize": "W 10.5 / M 9",
                      "localizedSizePrefix": null,
                      "nikeSize": "10.5",
                      "available": true
                    },
                    {
                      "id": "9c053291-ad73-5919-a373-24a97083c66d",
                      "localizedSize": "W 11 / M 9.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "11",
                      "available": true
                    },
                    {
                      "id": "6af92044-1f5b-5963-9800-3b5d05a361c8",
                      "localizedSize": "W 11.5 / M 10",
                      "localizedSizePrefix": null,
                      "nikeSize": "11.5",
                      "available": true
                    },
                    {
                      "id": "86743472-6c1c-5a02-9505-3e3e24063631",
                      "localizedSize": "W 12 / M 10.5",
                      "localizedSizePrefix": null,
                      "nikeSize": "12",
                      "available": true
                    }
                  ]
                },
                "interestId": "ba4db18b-695a-34e4-8852-d3824718106c",
                "sortOrder": 2
              },
              {
                "id": "bcde380f-1504-42eb-a895-e054782f1a15",
                "cardId": "bcde380f-1504-42eb-a895-e054782f1a15",
                "type": "photo",
                "title": "",
                "subtitle": "",
                "description": "",
                "iOSOnly": false,
                "colorHint": {
                  "text": "000000",
                  "active": "000000",
                  "inactive": "808080",
                  "pressed": "4F4F4F"
                },
                "cta": {
                  "buyingTools": false,
                  "text": "NOTIFY ME"
                },
                "images": [
                  {
                    "type": "card",
                    "imageUrl": "https://static.nike.com/a/images/w_750,c_limit/5639149a-fed7-4bbf-ab9d-390e2d337fc2/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/w_750,c_limit/5639149a-fed7-4bbf-ab9d-390e2d337fc2/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/w_750,c_limit/5639149a-fed7-4bbf-ab9d-390e2d337fc2/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 0,
                    "alt": "Women’s Air Jordan 1 High OG 'Satin Red'"
                  },
                  {
                    "type": "thread",
                    "imageUrl": "https://static.nike.com/a/images/w_750,c_limit/5639149a-fed7-4bbf-ab9d-390e2d337fc2/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/w_750,c_limit/5639149a-fed7-4bbf-ab9d-390e2d337fc2/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/w_750,c_limit/5639149a-fed7-4bbf-ab9d-390e2d337fc2/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 0,
                    "alt": "Women’s Air Jordan 1 High OG 'Satin Red'"
                  }
                ],
                "sortOrder": 3
              },
              {
                "id": "cb68830d-e206-4664-a3fa-8a0a8db73a2c",
                "cardId": "cb68830d-e206-4664-a3fa-8a0a8db73a2c",
                "type": "photo",
                "title": "",
                "subtitle": "",
                "description": "",
                "iOSOnly": false,
                "colorHint": {
                  "text": "000000",
                  "active": "000000",
                  "inactive": "808080",
                  "pressed": "4F4F4F"
                },
                "cta": {
                  "buyingTools": false,
                  "text": "NOTIFY ME"
                },
                "images": [
                  {
                    "type": "card",
                    "imageUrl": "https://static.nike.com/a/images/w_750,c_limit/438c01b5-04e3-400b-97e2-feafea615cb9/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/w_750,c_limit/438c01b5-04e3-400b-97e2-feafea615cb9/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/w_750,c_limit/438c01b5-04e3-400b-97e2-feafea615cb9/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 0,
                    "alt": "Women’s Air Jordan 1 High OG 'Satin Red'"
                  },
                  {
                    "type": "thread",
                    "imageUrl": "https://static.nike.com/a/images/w_750,c_limit/438c01b5-04e3-400b-97e2-feafea615cb9/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/w_750,c_limit/438c01b5-04e3-400b-97e2-feafea615cb9/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/w_750,c_limit/438c01b5-04e3-400b-97e2-feafea615cb9/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 0,
                    "alt": "Women’s Air Jordan 1 High OG 'Satin Red'"
                  }
                ],
                "sortOrder": 4
              },
              {
                "id": "50cd04b1-cca0-4355-b670-7d471551ac16",
                "cardId": "50cd04b1-cca0-4355-b670-7d471551ac16",
                "type": "text",
                "title": "Heritage",
                "subtitle": "Air Jordan 1",
                "description": "Since his game-winning shot that brought championship glory to North Carolina, Michael Jordan has been at the forefront of basketball consciousness. He took the court in 1985 wearing the original Air Jordan I, simultaneously breaking league rules and his opponents' will while capturing the imagination of fans worldwide.",
                "iOSOnly": false,
                "colorHint": {
                  "text": "000000",
                  "active": "000000",
                  "inactive": "808080",
                  "pressed": "4F4F4F"
                },
                "cta": {
                  "buyingTools": false,
                  "text": "NOTIFY ME"
                },
                "sortOrder": 5
              },
              {
                "id": "16412ac0-6522-4059-9f3b-892ca64d36d0",
                "cardId": "16412ac0-6522-4059-9f3b-892ca64d36d0",
                "type": "photo",
                "title": "",
                "subtitle": "",
                "description": "",
                "iOSOnly": false,
                "colorHint": {
                  "text": "000000",
                  "active": "000000",
                  "inactive": "808080",
                  "pressed": "4F4F4F"
                },
                "cta": {
                  "buyingTools": false,
                  "text": "NOTIFY ME"
                },
                "images": [
                  {
                    "type": "card",
                    "imageUrl": "https://static.nike.com/a/images/w_750,c_limit/2a341b1c-874b-4861-be22-fa713c4cc46f/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/w_750,c_limit/2a341b1c-874b-4861-be22-fa713c4cc46f/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/w_750,c_limit/2a341b1c-874b-4861-be22-fa713c4cc46f/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 0,
                    "alt": "Women’s Air Jordan 1 High OG 'Satin Red'"
                  },
                  {
                    "type": "thread",
                    "imageUrl": "https://static.nike.com/a/images/w_750,c_limit/2a341b1c-874b-4861-be22-fa713c4cc46f/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/w_750,c_limit/2a341b1c-874b-4861-be22-fa713c4cc46f/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/w_750,c_limit/2a341b1c-874b-4861-be22-fa713c4cc46f/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 0,
                    "alt": "Women’s Air Jordan 1 High OG 'Satin Red'"
                  }
                ],
                "sortOrder": 6
              },
              {
                "id": "00c37fba-f38a-4932-9df8-091956c85336",
                "cardId": "00c37fba-f38a-4932-9df8-091956c85336",
                "type": "photo",
                "title": "Satin Red",
                "subtitle": "Little Kids' Air Jordan 1",
                "description": "",
                "iOSOnly": false,
                "colorHint": {
                  "text": "000000",
                  "active": "000000",
                  "inactive": "808080",
                  "pressed": "4F4F4F"
                },
                "cta": {
                  "buyingTools": true,
                  "text": "NOTIFY ME"
                },
                "images": [
                  {
                    "type": "card",
                    "imageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/9ff826cf-5408-4b2f-8d03-3a9a2632014b/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/t_prod_ss/w_750,c_limit/9ff826cf-5408-4b2f-8d03-3a9a2632014b/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/9ff826cf-5408-4b2f-8d03-3a9a2632014b/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 0,
                    "alt": "Women’s Air Jordan 1 High OG 'Satin Red'"
                  },
                  {
                    "type": "thread",
                    "imageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/9ff826cf-5408-4b2f-8d03-3a9a2632014b/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/t_prod_ss/w_750,c_limit/9ff826cf-5408-4b2f-8d03-3a9a2632014b/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/9ff826cf-5408-4b2f-8d03-3a9a2632014b/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 0,
                    "alt": "Women’s Air Jordan 1 High OG 'Satin Red'"
                  }
                ],
                "product": {
                  "id": "52a3afc2-a9e4-51ac-8ffd-0159411b12ce",
                  "interestId": "935fb98a-f318-3619-8a44-563298bcd8ca",
                  "style": "CU0449",
                  "colorCode": "601",
                  "globalPid": "12940171",
                  "title": "Jordan 1 High OG",
                  "subtitle": "Little Kids' Shoe",
                  "imageUrl": "https://secure-images.nike.com/is/image/DotCom/CU0449_601",
                  "genders": [
                    "GIRLS"
                  ],
                  "quantityLimit": 1,
                  "merchStatus": "HOLD",
                  "colorDescription": "Gym Red/White/Black",
                  "available": true,
                  "publishType": "LAUNCH",
                  "productType": "FOOTWEAR",
                  "upcoming": false,
                  "price": {
                    "msrp": 80,
                    "fullRetailPrice": 80,
                    "currentRetailPrice": 80,
                    "onSale": false
                  },
                  "selectionEngine": "LEO",
                  "startSellDate": "2020-08-06T14:00:00.000000",
                  "skus": [
                    {
                      "id": "f88929a8-8ed3-5fe2-bf46-1e0c3745cdfd",
                      "localizedSize": "10.5C",
                      "localizedSizePrefix": null,
                      "nikeSize": "10.5C",
                      "available": true
                    },
                    {
                      "id": "813c46e3-8ac0-5299-96b4-b3faae112375",
                      "localizedSize": "11C",
                      "localizedSizePrefix": null,
                      "nikeSize": "11C",
                      "available": true
                    },
                    {
                      "id": "b14fdd8e-ca66-52a3-aa5e-4ad979cd496c",
                      "localizedSize": "11.5C",
                      "localizedSizePrefix": null,
                      "nikeSize": "11.5C",
                      "available": true
                    },
                    {
                      "id": "d368a872-4ad9-571a-941f-3de94d64b57a",
                      "localizedSize": "12C",
                      "localizedSizePrefix": null,
                      "nikeSize": "12C",
                      "available": true
                    },
                    {
                      "id": "6b530b9f-e343-5711-be6c-191202c73404",
                      "localizedSize": "12.5C",
                      "localizedSizePrefix": null,
                      "nikeSize": "12.5C",
                      "available": true
                    },
                    {
                      "id": "9272ef6b-085e-5c22-9c30-b1bee60efa6e",
                      "localizedSize": "13C",
                      "localizedSizePrefix": null,
                      "nikeSize": "13C",
                      "available": true
                    },
                    {
                      "id": "83cb3f83-b9f0-5c7d-81fb-605131de6707",
                      "localizedSize": "13.5C",
                      "localizedSizePrefix": null,
                      "nikeSize": "13.5C",
                      "available": true
                    },
                    {
                      "id": "1541ef81-7d26-5716-96c3-7c87e77d4310",
                      "localizedSize": "1Y",
                      "localizedSizePrefix": null,
                      "nikeSize": "1Y",
                      "available": true
                    },
                    {
                      "id": "fdc4bb86-0a19-5a97-9a21-30100ddc68d6",
                      "localizedSize": "1.5Y",
                      "localizedSizePrefix": null,
                      "nikeSize": "1.5Y",
                      "available": true
                    },
                    {
                      "id": "fc40e02d-7c8c-537e-9ae6-dc6b902c2933",
                      "localizedSize": "2Y",
                      "localizedSizePrefix": null,
                      "nikeSize": "2Y",
                      "available": true
                    },
                    {
                      "id": "9246d578-fc22-51af-b9c6-e1c8cf66f0fd",
                      "localizedSize": "2.5Y",
                      "localizedSizePrefix": null,
                      "nikeSize": "2.5Y",
                      "available": true
                    },
                    {
                      "id": "cd73805c-4f72-5c83-b0c9-29c673745fe2",
                      "localizedSize": "3Y",
                      "localizedSizePrefix": null,
                      "nikeSize": "3Y",
                      "available": true
                    }
                  ]
                },
                "interestId": "935fb98a-f318-3619-8a44-563298bcd8ca",
                "sortOrder": 7
              },
              {
                "id": "620b6db6-7968-4332-9b78-50c3eb594573",
                "cardId": "620b6db6-7968-4332-9b78-50c3eb594573",
                "type": "photo",
                "title": "Satin Red",
                "subtitle": "Toddler's Air Jordan 1",
                "description": "",
                "iOSOnly": false,
                "colorHint": {
                  "text": "000000",
                  "active": "000000",
                  "inactive": "808080",
                  "pressed": "4F4F4F"
                },
                "cta": {
                  "buyingTools": true,
                  "text": "NOTIFY ME"
                },
                "images": [
                  {
                    "type": "card",
                    "imageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/8b39f55e-7064-48c7-94e4-5316806309c6/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/t_prod_ss/w_750,c_limit/8b39f55e-7064-48c7-94e4-5316806309c6/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/8b39f55e-7064-48c7-94e4-5316806309c6/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 0,
                    "alt": "Women’s Air Jordan 1 High OG 'Satin Red'"
                  },
                  {
                    "type": "thread",
                    "imageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/8b39f55e-7064-48c7-94e4-5316806309c6/womens-air-jordan-1-high-og-satin-red.jpg",
                    "squareImageUrl": "https://static.nike.com/a/images/t_prod_ss/w_750,c_limit/8b39f55e-7064-48c7-94e4-5316806309c6/womens-air-jordan-1-high-og-satin-red.jpg",
                    "portraitImageUrl": "https://static.nike.com/a/images/t_prod_ps/w_750,c_limit/8b39f55e-7064-48c7-94e4-5316806309c6/womens-air-jordan-1-high-og-satin-red.jpg",
                    "sortOrder": 0,
                    "alt": "Women’s Air Jordan 1 High OG 'Satin Red'"
                  }
                ],
                "product": {
                  "id": "cf67b92d-a9f9-5e08-8043-d24cc1fc91ce",
                  "interestId": "24fdfd53-c418-353a-95e0-bd935ff3860e",
                  "style": "CU0450",
                  "colorCode": "601",
                  "globalPid": "12940166",
                  "title": "Jordan 1 High OG",
                  "subtitle": "Baby/Toddler Shoe",
                  "imageUrl": "https://secure-images.nike.com/is/image/DotCom/CU0450_601",
                  "genders": [
                    "GIRLS"
                  ],
                  "quantityLimit": 1,
                  "merchStatus": "HOLD",
                  "colorDescription": "Gym Red/White/Black",
                  "available": true,
                  "publishType": "LAUNCH",
                  "productType": "FOOTWEAR",
                  "upcoming": false,
                  "price": {
                    "msrp": 60,
                    "fullRetailPrice": 60,
                    "currentRetailPrice": 60,
                    "onSale": false
                  },
                  "selectionEngine": "LEO",
                  "startSellDate": "2020-08-06T14:00:00.000000",
                  "skus": [
                    {
                      "id": "281c2aa3-5a4b-5148-be0f-e8f6c491c94e",
                      "localizedSize": "2C",
                      "localizedSizePrefix": null,
                      "nikeSize": "2C",
                      "available": true
                    },
                    {
                      "id": "e131cb57-3cc1-53de-8d51-b93a05b9dcdc",
                      "localizedSize": "3C",
                      "localizedSizePrefix": null,
                      "nikeSize": "3C",
                      "available": true
                    },
                    {
                      "id": "207ca720-7f92-5f87-962e-258f6093d702",
                      "localizedSize": "4C",
                      "localizedSizePrefix": null,
                      "nikeSize": "4C",
                      "available": true
                    },
                    {
                      "id": "b559dffb-2bac-5f81-b1ed-d2b7a99113bc",
                      "localizedSize": "5C",
                      "localizedSizePrefix": null,
                      "nikeSize": "5C",
                      "available": true
                    },
                    {
                      "id": "15e784ca-d91c-50b7-b904-c6d92e3ce1f6",
                      "localizedSize": "6C",
                      "localizedSizePrefix": null,
                      "nikeSize": "6C",
                      "available": true
                    },
                    {
                      "id": "cfecfe6d-0059-54f3-949d-8418f1616822",
                      "localizedSize": "7C",
                      "localizedSizePrefix": null,
                      "nikeSize": "7C",
                      "available": true
                    },
                    {
                      "id": "0572428b-9c39-5849-ad0a-26bac806ce6d",
                      "localizedSize": "8C",
                      "localizedSizePrefix": null,
                      "nikeSize": "8C",
                      "available": true
                    },
                    {
                      "id": "bf4b39f7-a0d2-5820-934d-7d99caf1c50c",
                      "localizedSize": "9C",
                      "localizedSizePrefix": null,
                      "nikeSize": "9C",
                      "available": true
                    },
                    {
                      "id": "08fe2eb4-ee4a-56c4-89b0-28303081d449",
                      "localizedSize": "10C",
                      "localizedSizePrefix": null,
                      "nikeSize": "10C",
                      "available": true
                    }
                  ]
                },
                "interestId": "24fdfd53-c418-353a-95e0-bd935ff3860e",
                "sortOrder": 8
              }
            ],
            "expirationDate": "3000-01-01T19:00:00.000000"
          },
          status: 'unconfirmed',
          skuId: '0aefcbad-d47c-5bc7-939e-40286f378bc1'
        }
      ],
      selectedEntry: undefined
    }

    this.newEnty = this.newEnty.bind(this)
    this.updateEntry = this.updateEntry.bind(this)
    this.confirmEntry = this.confirmEntry.bind(this)
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
    // this.props.navigation.navigate('TabTwo', { entries: entries, onEntryConfirm: this.confirmEntry} )
    this.setState({
      entries: entries
    })
  }

  confirmEntry(entry: Entry) {
    if (this.state.selectedEntry == undefined) {
      this.setState({
        selectedEntry: entry
      })
    }
  }

  updateEntry(skuId: string, status: string) {
    const entries = this.state.entries
    const index = entries.findIndex(entry => entry.skuId === skuId)
    entries[index].status = status

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
        {/* <BottomTab.Screen
          name="TabThree"
          component={TabThreeNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }}
          initialParams={{ entry: this.state.selectedEntry, onEntryUpdate: this.updateEntry }}
        /> */}
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

// const TabThreeStack = createStackNavigator<TabThreeParamList>();

// type TabThreeNavProps = {
//   route: RouteProp<BottomTabParamList, 'TabThree'>
// }
// function TabThreeNavigator(props: TabThreeNavProps) {
//   return (
//   <TabThreeStack.Navigator>
//     <TabThreeStack.Screen
//       name="TabThreeScreen"
//       component={TabThreeScreen}
//       options={{ headerTitle: 'Runner' }}
//       initialParams= {{entry: props.route.params.entry, onEntryUpdate: props.route.params.onEntryUpdate}}
//     />
//   </TabThreeStack.Navigator>
//   )
// }
