import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Explore</Text>
      <Pressable style={styles.icon}>
        <Icon name="envelope-o" size={20} color="#CACDDE" />
        <View style={styles.messageContainer}>
          <Text style={styles.messageBadge}>2</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingLeft: 26,
    paddingRight: 17,
  },

  title: {
    fontFamily: 'Inter',
    color: '#022150',
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  icon: {
    backgroundColor: '#f9fafb',
    padding: 12,
    borderRadius: 100,
  },

  messageContainer: {
    height: 20,
    width: 20,
    backgroundColor: '#F35BAC',
    borderRadius: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 5,
  },

  messageBadge: {
    fontSize: 8,
    fontFamily: 'inter',
    lineHeight: 7,
    fontWeight: 'bold',
    color: '#fff',
  },
});
