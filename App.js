/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ApolloClient, { InMemoryCache, gql } from "apollo-boost";
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import { AppProvider } from './src/_contexts/app.context'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/_navigation/routes';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'https://fakeql.com/graphql/e13cf3aff40b1e2734e8f0131fc41046'
});


const EXCHANGE_RATES = gql`
 {
  post(id: 2) {
    id
    title
    date
    user {
    profilePicture
      age
      comments {
        text
      }
      firstname
    }
  }
}
`;

const EXCHANGE_POSTS = gql`
 query getPosts($page: Int!) {
  posts(page: $page) {
    id
    date
    title
    user {
      id
      firstname
    }
  }
}
`;

function ExchangeRates() {
  let page = 1;
  React.useReducer
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { page },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
  console.log(data);
  return data.posts.map(({ title, date }) => (
      <View>
      <Text>
      `${title}: ${date}`
</Text>
  </View>
));
}

const App: () => React$Node = () => {
  return (
      <ApolloProvider client={client}>
      <NavigationContainer>
      <AppProvider>
      <StatusBar barStyle="dark-content" />
      <AppNavigator/>
              </AppProvider>
              </NavigationContainer>
  </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
