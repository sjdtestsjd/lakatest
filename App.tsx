import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import WebView from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function WebScreen() {
  const [hasError, setHasError] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {hasError ? (
        // ✅ صفحه ارور کاستوم
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>⛔ اینترنت قطع است!</Text>
          <TouchableOpacity onPress={() => setHasError(false)} style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
            <Text style={{ color: 'white' }}>🔄 تلاش مجدد</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <WebView
          source={{ uri: 'https://larakala.com/' }}
          onError={() => setHasError(true)} // زمانی که خطا رخ دهد، `setHasError(true)` اجرا می‌شود
        />
      )}
    </View>
  );
}

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: true, headerShown: false }}>
        <Stack.Screen name="Web" component={WebScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
