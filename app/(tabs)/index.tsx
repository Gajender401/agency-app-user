import { StyleSheet, StatusBar, View, Text } from 'react-native';

import { useGlobalContext } from '@/context/GlobalProvider';
import { Redirect } from 'expo-router';
import Loader from '@/components/loader';

export default function HomeScreen() {
  const { isLogged, loading, apiCaller, token } = useGlobalContext();

  if (!loading && !isLogged) return <Redirect href="/(modals)/onbording" />;

  if (loading) {
    return (
      <View style={styles.container}>
        <Loader loading />
      </View>
    );
  }
  return (
    <View>
      <Text>
        home
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: StatusBar.currentHeight || 0,
  },
});
