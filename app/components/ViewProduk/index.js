import React, { Component } from "react";
import ViewProduk from "./ViewProduk.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  View: { screen: ViewProduk }  
}));