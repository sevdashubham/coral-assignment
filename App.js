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
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import { AppProvider } from './src/_contexts/app.context';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/_navigation/routes';

// use config file in production
const client = new ApolloClient({
  uri: 'https://fakeql.com/graphql/e13cf3aff40b1e2734e8f0131fc41046'
});

const App: () => React$Node = () => {
  return (
      <ApolloProvider client={client}>
      <AppProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
      <AppNavigator/>
      </NavigationContainer>
      </AppProvider>
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
