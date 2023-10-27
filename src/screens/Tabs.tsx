import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon, Icons } from '../components/Icons';
import Colors from '../components/Colors';
import ColorScreen from '../components/ColorScreen';
import * as Animatable from 'react-native-animatable';
import { IconProps } from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: ColorScreen },
  { route: 'Search', label: 'Search', type: Icons.Feather, icon: 'search', component: ColorScreen },
  { route: 'Add', label: 'Add', type: Icons.Feather, icon: 'plus-square', component: ColorScreen },
  { route: 'Like', label: 'Like', type: Icons.Feather, icon: 'heart', component: ColorScreen },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: ColorScreen },
];

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: 0.5, translateY: 7 }, 0.92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } };
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } };
const circle1 = { 0: { scale: 0 }, 0.3: { scale: 0.9 }, 0.5: { scale: 0.2 }, 0.8: { scale: 0.7 }, 1: { scale: 1 } };
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

interface TabButtonProps {
  item: {
    route: string;
    label: string;
    type: "FontAwesome" | "MaterialCommunityIcons" | "MaterialIcons" | "Ionicons" | "Feather" | "FontAwesome5" | "AntDesign" | "Entypo" | "SimpleLineIcons" | "Octicons" | "Foundation" | "EvilIcons";
    icon: string;
    component: string;
  };
  onPress: () => void;
  accessibilityState: {
    selected: boolean;
  };
}

const TabButton: React.FC<TabButtonProps> = (props) => {
const { item, onPress, accessibilityState } = props;
const focused = accessibilityState.selected;
const viewRef = useRef<Animatable.View>(null);
const circleRef = useRef<Animatable.View>(null);
const textRef = useRef<Animatable.Text>(null);

useEffect(() => {
    if (focused) {
        viewRef.current?.animate(animate1 as any);
        circleRef.current?.animate(circle1 as any);
        textRef.current?.transitionTo({ scale: 1 } as any);
    } else {
        viewRef.current?.animate(animate2 as any);
        circleRef.current?.animate(circle2 as any);
        textRef.current?.transitionTo({ scale: 0 } as any);
    }
}, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.btn}
      >
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle}
          />
          <Icon type={item.type} name={item.icon} color={focused ? Colors.white : Colors.primary} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text}
        >
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {TabArr.map((item, index) => (
        <Tab.Screen key={index} name={item.route} component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.primary,
  },
});
