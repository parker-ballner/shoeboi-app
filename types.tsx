import * as SneakersApi from '@shoeboi/api'

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export interface Entry {
  skuId: string
  product: SneakersApi.Schema.Sneakers.Api.Content.Response.Thread
  status: string
}

export type BottomTabParamList = {
  TabOne: { onNewEntry: (product: SneakersApi.Schema.Sneakers.Api.Content.Response.Thread, skuId: string) => void };
  TabTwo: { entries: Entry[] };
  // TabThree: { 
  //   entry: Entry
  //   onEntryUpdate: (skuId: string, status: string) => void
  // }
};

export type TabOneParamList = {
  TabOneScreen: { onNewEntry: (product: SneakersApi.Schema.Sneakers.Api.Content.Response.Thread, skuId: string) => void };
};

export type TabTwoParamList = {
  TabTwoScreen: { entries: Entry[] };
};

// export type TabThreeParamList = {
//   TabThreeScreen: { 
//     entry: Entry
//     onEntryUpdate: (skuId: string, status: string) => void
//   }
// };
