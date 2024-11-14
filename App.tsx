import React from 'react';
import { 
  SafeAreaView, 
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = (): React.JSX.Element => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView className="flex-1 bg-red-600">
        <View className="flex-1 items-center justify-center h-10 w-[100%]">
          <Text className="text-xl font-bold text-blue-500">
            Hello, Tailwind CSS in React Native with TypeScript!
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;