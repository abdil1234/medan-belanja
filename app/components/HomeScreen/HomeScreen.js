import React from "react";
import { StatusBar,StyleSheet, Image} from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body,Thumbnail, Content,Text, Card, CardItem } from "native-base";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar
         backgroundColor="red"
         barStyle="light-content"
       />
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Medan Belanja</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://chittagongit.com//images/react-icon/react-icon-29.jpg'}} />
                <Body>
                  <Text>Baju Busana Muslim</Text>
                  <Text note>Syariiah</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://chittagongit.com//images/react-icon/react-icon-29.jpg'}} style={{margin:15,height: 150, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>              
              <Body>
                <Button block style={styles.lihat}
                    onPress={() => this.props.navigation.navigate("View")}
                >
                  <Text>Lihat</Text>
                </Button>
              </Body>              
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://chittagongit.com//images/react-icon/react-icon-29.jpg'}} />
                <Body>
                  <Text>Baju Wanita</Text>
                  <Text note>Wanita</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://chittagongit.com//images/react-icon/react-icon-29.jpg'}} style={{margin:15,height: 150, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>              
              <Body>
                <Button block style={styles.lihat}>
                  <Text>Lihat</Text>
                </Button>
              </Body>              
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {    
    backgroundColor: '#26a69a',
  },
  lihat:{
    backgroundColor:'#64d8cb',
  }
});
