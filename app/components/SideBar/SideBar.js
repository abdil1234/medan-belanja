import React from "react";
import { AppRegistry, Image,View, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home", "Chat", "Profile"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View
            
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor:"#26a69a"
            }}>
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: "http://chittagongit.com//images/react-icon/react-icon-29.jpg"
              }}
            />
          </View>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}