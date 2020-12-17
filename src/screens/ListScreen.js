
import React, { memo, useContext, useEffect, useState } from 'react';
import {
  LogBox,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { StreamChat } from 'stream-chat';
import {
  Channel,
  ChannelList,
  ChannelPreviewMessenger,
  Chat,
  MessageInput,
  MessageList,
  Streami18n,
  Thread,
} from 'stream-chat-expo';

LogBox.ignoreAllLogs(true);
enableScreens();

const chatClient = new StreamChat('nup2pukhrsxz');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicmFzcHktc3Rhci03In0.6fvEi9ST-1xMnZdAeZ5YeqL1rhFHOdDpvpBU_qYlhfE';

const user = {
  id: 'raspy-star-7',
  name: 'Jose Angel',
  image:
    'https://getstream.io/random_png/?id=raspy-star-7&amp;name=Raspy+star',
};

const filters = {
  members: { $in: [user.id] },
  type: 'messaging',
};

const sort = { last_message_at: -1 };
const options = {
  state: true,
  watch: true,
};


const streami18n = new Streami18n({
  language: 'en',
});

const ChannelListScreen = React.memo(({ navigation }) => {
  const { setChannel } = useContext(AppContext);
  return (
    <SafeAreaView>
      <Chat client={chatClient} i18nInstance={streami18n}>
        <View style={{ height: '100%', padding: 10 }}>
          <ChannelList
            filters={filters}
            onSelect={(channel) => {
              setChannel(channel);
              navigation.navigate('Channel');
            }}
            options={options}
            Preview={ChannelPreviewMessenger}
            sort={sort}
          />
        </View>
      </Chat>
    </SafeAreaView>
  );
});

const ChannelScreen = React.memo(({ navigation }) => {
  const { channel, setThread } = useContext(AppContext);
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView>
      <Chat client={chatClient} i18nInstance={streami18n}>
        <Channel channel={channel} keyboardVerticalOffset={headerHeight}>
          <View style={{ flex: 1 }}>
            <MessageList
              onThreadSelect={(thread) => {
                setThread(thread);
                navigation.navigate('Thread', { channelId: channel.id });
              }}
            />
            <MessageInput />
          </View>
        </Channel>
      </Chat>
    </SafeAreaView>
  );
});

const ThreadScreen = React.memo(({ route }) => {
  const { thread } = useContext(AppContext);
  const [channel] = useState(
    chatClient.channel('messaging', route.params.channelId),
  );
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView>
      <Chat client={chatClient} i18nInstance={streami18n}>
        <Channel
          channel={channel}
          keyboardVerticalOffset={headerHeight}
          thread={thread}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
            }}
          >
            <Thread thread={thread} />
          </View>
        </Channel>
      </Chat>
    </SafeAreaView>
  );
});

const Stack = createStackNavigator();

const AppContext = React.createContext();

export default intento = () => {
  const [channel, setChannel] = useState();
  const [clientReady, setClientReady] = useState(false);
  const [thread, setThread] = useState();

  useEffect(() => {
    const setupClient = async () => {
      await chatClient.setUser(user, userToken);

      setClientReady(true);
    };

    setupClient();
  }, []);

  return (
    <NavigationContainer>
      <AppContext.Provider value={{ channel, setChannel, setThread, thread }}>
        {clientReady && (
          <Stack.Navigator
            initialRouteName='ChannelList'
            screenOptions={{
              cardStyle: { backgroundColor: 'white' },
              headerTitleStyle: { alignSelf: 'center', fontWeight: 'bold' },
            }}
          >
            <Stack.Screen
              component={ChannelScreen}
              name='Channel'
              options={() => ({
                headerBackTitle: 'Back',
                headerRight: () => <></>,
                headerTitle: channel.data.name,
              })}
            />
            <Stack.Screen
              component={ChannelListScreen}
              name='ChannelList'
              options={{ headerTitle: 'Channel List' }}
            />
            <Stack.Screen
              component={ThreadScreen}
              name='Thread'
              options={({ navigation }) => ({
                headerLeft: () => <></>,
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 20,
                    }}
                  >
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderColor: 'rgba(0, 0, 0, 0.1)',
                        borderRadius: 3,
                        borderStyle: 'solid',
                        borderWidth: 1,
                        height: 30,
                        justifyContent: 'center',
                        width: 30,
                      }}
                    >
                      <Text>X</Text>
                    </View>
                  </TouchableOpacity>
                ),
              })}
            />
          </Stack.Navigator>
        )}
      </AppContext.Provider>
    </NavigationContainer>
  );
}


