import * as React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import {
  Colors,
  Appbar,
  Avatar,
  FAB,
  Switch,
  Paragraph,
  useTheme,
} from 'react-native-paper';
import { ExentriqTheme } from '../ExentriqStyle';

type Props = {
  navigation: StackNavigationProp<{}>;
};

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const AppbarExample = ({ navigation }: Props) => {
  const { colors } = useTheme();

  const [showLeftIcon, setShowLeftIcon] = React.useState(true);
  const [showSubtitle, setShowSubtitle] = React.useState(true);
  const [showSearchIcon, setShowSearchIcon] = React.useState(true);
  const [showMoreIcon, setShowMoreIcon] = React.useState(true);
  const [showAvatar, setShowMoreAvatar] = React.useState(true);
  const [showCustomColor, setShowCustomColor] = React.useState(false);
  const [showExactTheme, setShowExactTheme] = React.useState(false);

  navigation.setOptions({
    header: () => (
      <Appbar.Header
        style={showCustomColor ? { backgroundColor: '#2f4357' } : null}
        color={ExentriqTheme.colors.textOnPrimary}
        theme={{
          mode: showExactTheme ? 'exact' : 'adaptive',
        }}
      >
        {showLeftIcon && (
          <Appbar.BackAction onPress={() => navigation.goBack()} color={ExentriqTheme.colors.textOnPrimary}/>
        )}
        <Appbar.Content
          title="Title"
          subtitle={showSubtitle ? 'Subtitle' : null}
          color={ExentriqTheme.colors.textOnPrimary}
        />
        {showSearchIcon && <Appbar.Action color={ExentriqTheme.colors.textOnPrimary} icon="magnify" onPress={() => {}} />}
        {showMoreIcon && <Appbar.Action color={ExentriqTheme.colors.textOnPrimary} icon={MORE_ICON} onPress={() => {}} />}
        {showAvatar && <Avatar.Image color={ExentriqTheme.colors.textOnPrimary} size={32} style={ExentriqTheme.spacing} source={require('../../assets/images/avatar.png')} />}
      </Appbar.Header>
    ),
  });

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.row}>
        <Paragraph>Left icon</Paragraph>
        <Switch value={showLeftIcon} onValueChange={setShowLeftIcon} />
      </View>
      <View style={styles.row}>
        <Paragraph>Subtitle</Paragraph>
        <Switch value={showSubtitle} onValueChange={setShowSubtitle} />
      </View>
      <View style={styles.row}>
        <Paragraph>Search icon</Paragraph>
        <Switch value={showSearchIcon} onValueChange={setShowSearchIcon} />
      </View>
      <View style={styles.row}>
        <Paragraph>More icon</Paragraph>
        <Switch value={showMoreIcon} onValueChange={setShowMoreIcon} />
      </View>
      <View style={styles.row}>
        <Paragraph>Avatar</Paragraph>
        <Switch value={showAvatar} onValueChange={setShowMoreAvatar} />
      </View>
      <View style={styles.row}>
        <Paragraph>Custom Color</Paragraph>
        <Switch value={showCustomColor} onValueChange={setShowCustomColor} />
      </View>
      <View style={styles.row}>
        <Paragraph>Exact Dark Theme</Paragraph>
        <Switch value={showExactTheme} onValueChange={setShowExactTheme} />
      </View>
      <FAB icon="reply" onPress={() => {}} style={styles.fab} color={ExentriqTheme.colors.textOnPrimary}/>
    </View>
  );
};

AppbarExample.title = 'Appbar';

export default AppbarExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 28,
  },
});
