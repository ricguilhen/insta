import { EvilIcons, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PostProps {
  user: string;
  profileImg: string;
  postImg: string;
}

export const Post: React.FC<PostProps> = ({ user, profileImg, postImg }) => {
  return (
    <View style={styles.container}>
      {/* parte de cima */}
      <View style={styles.header}>
        <Image source={{ uri: profileImg }} style={styles.avatar} />
        <Text style={styles.user}>{user}</Text>
      </View>

      {/* imagem do post */}
      <Image source={{ uri: postImg }} style={styles.postImage} />

      {/* é o footer aqui */}
      <View style={styles.footer}>
        <View style={styles.actions}>
          <TouchableOpacity><EvilIcons name="heart" size={24} color="black" /></TouchableOpacity>
          <Text style={styles.user}>10</Text>
          <TouchableOpacity><EvilIcons name="comment" size={24} color="black" style={styles.iconMargin} /></TouchableOpacity>
          <Text style={styles.user}>20</Text>
          <TouchableOpacity><Ionicons name="paper-plane-outline" size={24} color="black" style={styles.iconMargin} /></TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: '#fff'
},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
},
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10
},
  user: {
    fontWeight: 
    '700',
    fontSize: 14
},
  postImage: { 
    width: 300,
    aspectRatio: 1
},
  footer: {
    paddingHorizontal: 12,
    paddingVertical: 10
},
  actions: {
    flexDirection: 'row',
    marginBottom: 8
},
  iconMargin: {
    marginLeft: 16
},
  captionText: {
    fontSize: 14,
    lineHeight: 18
},
});