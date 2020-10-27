import * as React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ExampleList, { examples } from './ExampleList';
import { ExentriqTheme } from './ExentriqStyle';

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({ navigation, scene, previous }) => (
          <Appbar.Header>
            {previous ? (
              <Appbar.BackAction onPress={() => navigation.goBack()} color={ExentriqTheme.colors.textOnPrimary} />
            ) : (navigation as any).openDrawer ? (
              <Appbar.Action
                icon="menu"
                color={ExentriqTheme.colors.textOnPrimary}
                onPress={() =>
                  ((navigation as any) as DrawerNavigationProp<{}>).openDrawer()
                }
              />
            ) : null}
            <Appbar.Content title={scene.descriptor.options.title} color={ExentriqTheme.colors.textOnPrimary}/>
            <Appbar.Action icon="magnify" color={ExentriqTheme.colors.textOnPrimary}/>
            <Avatar.Image size={32} source={require('../assets/images/avatar.png')} />
          </Appbar.Header>
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={ExampleList}
        options={{ title: 'Exentriq' }}
      />
      {(Object.keys(examples) as Array<keyof typeof examples>).map((id) => (
        <Stack.Screen
          key={id}
          name={id}
          component={examples[id]}
          options={{ title: examples[id].title }}
        />
      ))}
    </Stack.Navigator>
  );
}
