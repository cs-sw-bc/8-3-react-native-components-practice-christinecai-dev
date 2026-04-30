import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { POSTS, STORIES } from './data';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App(){
    const renderStory = ({item}) => (
        <View style={styles.storyItem}>
            <View style={styles.storyCircle} />
            <Text style={styles.storyUsername}>{item.username}</Text>
        </View>
    );

    const renderPost = ({item})=>(
        <View style={styles.postCard}>
            <Text style={styles.postUsername}>{item.username}</Text>
            <View style={styles.postImagePlaceholder} />
            <Text style={styles.postCaption}>{item.caption}</Text>
            <Text style={styles.postLikes}>{item.likes} likes</Text>
    </View>
    );

    const renderStoriesHeader = () => (
        <View style={styles.storiesSection}>
            <Text style={styles.sectionTitle}>Stories</Text>
            <FlatList
                data={STORIES}
                renderItem={renderStory}
                keyExtractor={(item)=>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.storiesList}
            />
            <Text style={styles.sectionTitle}>Posts</Text>
        </View>

    );

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={POSTS}
                renderItem={renderPost}
                keyExtractor={(item)=>item.id}
                ListHeaderComponent={renderStoriesHeader}
                ListEmptyComponent={<Text style={styles.emptyText}>No posts yet.</Text>}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.feedContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f4ef',
  },
  feedContent: {
    paddingBottom: 24,
  },
  storiesSection: {
    paddingTop: 16,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222222',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  storiesList: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 72,
  },
  storyCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#ffb38a',
    borderWidth: 3,
    borderColor: '#ff7a59',
    marginBottom: 6,
  },
  storyUsername: {
    fontSize: 12,
    color: '#444444',
  },
  postCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 14,
  },
  postUsername: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 12,
  },
  postImagePlaceholder: {
    height: 220,
    borderRadius: 12,
    backgroundColor: '#ffd9c7',
    marginBottom: 12,
  },
  postCaption: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 6,
  },
  postLikes: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ff7a59',
  },
  separator: {
    height: 14,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666666',
    marginTop: 32,
  },
});