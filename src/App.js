/* @flow */

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

import { Surface } from 'gl-react-native';

import HelloBlue from './HelloBlue';
import Amaro from './filters/Amaro';

const App = () => {
  const image = resolveAssetSource(require('./images/yacht-test.jpg'));

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.9, marginTop: 20, alignItems: 'center' }}>

        <View style={{ flexDirection: 'row' }}>
          <View>
            <View style={styles.imageContainer}>
              <Image
                source={require('./images/yacht-test.jpg')}
                style={styles.singleImage}
                resizeMode="stretch"
              />
            </View>

            <View style={styles.imageContainer}>
              <Surface style={styles.singleImage}>
                <Amaro {...this.props}>
                  {image}
                </Amaro>
              </Surface>
            </View>

            <View style={styles.imageContainer}>
              <Surface style={styles.singleImage}>
                <HelloBlue blue={0.5} />
              </Surface>
            </View>
          </View>

          <View>
            <View style={styles.imageContainer}>
              <Surface style={styles.singleImage}>
                <HelloBlue blue={0.5} />
              </Surface>
            </View>

            <View style={styles.imageContainer}>
              <Surface style={styles.singleImage}>
                <HelloBlue blue={0.5} />
              </Surface>
            </View>

            <View style={styles.imageContainer}>
              <Surface style={styles.singleImage}>
                <HelloBlue blue={0.5} />
              </Surface>
            </View>
          </View>
        </View>

      </View>
      <View style={{ flex: 0.1 }}>
        <Text style={styles.welcome}>
          Test for GL shaders and filters
        </Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  imageContainer: {
    padding: 30
  },
  singleImage: {
    width: 120,
    height: 120
  }
});
