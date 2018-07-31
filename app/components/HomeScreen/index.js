import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "../ChatScreen/index.js";
import Profile from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import ViewProduk from "../ViewProduk";
import { DrawerNavigator } from "react-navigation";


const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    View: { screen: ViewProduk },
    Profile: { screen: Profile }
    
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;