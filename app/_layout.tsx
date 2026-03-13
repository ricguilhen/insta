import { Post } from '@/components/Post';
import { ScrollView, StatusBar } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Post 
          user="flashdosincriveis.filho"
          profileImg="https://i.pinimg.com/236x/ce/50/7b/ce507b5348a0ad97e9bc57649d354df9.jpg"
          postImg="https://pbs.twimg.com/media/FzXfLeQWcAI8Qne.jpg"
        />
        <Post 
          user="flashdosincriveis.filho"
          profileImg="https://i.pinimg.com/236x/ce/50/7b/ce507b5348a0ad97e9bc57649d354df9.jpg"
          postImg="https://pbs.twimg.com/media/FzXfLeQWcAI8Qne.jpg"
        />
        <Post 
          user="flashdosincriveis.filho"
          profileImg="https://i.pinimg.com/236x/ce/50/7b/ce507b5348a0ad97e9bc57649d354df9.jpg"
          postImg="https://pbs.twimg.com/media/FzXfLeQWcAI8Qne.jpg"
        />
        <Post 
          user="flashdosincriveis.filho"
          profileImg="https://i.pinimg.com/236x/ce/50/7b/ce507b5348a0ad97e9bc57649d354df9.jpg"
          postImg="https://pbs.twimg.com/media/FzXfLeQWcAI8Qne.jpg"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
