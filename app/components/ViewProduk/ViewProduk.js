import React from "react";
import { AppRegistry, Alert,StyleSheet } from "react-native";
import ImageSlider from 'react-native-image-slider';
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, Text } from "native-base";

export default class ViewProduk extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={() => navigation.navigate("Home")}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Baju Busana Muslim</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  
  render() {
    return (
      <Container>
        <Content padder>
          <Card>

            <CardItem>              
              <Text>Deskripsi Barang</Text>
            </CardItem>

            <CardItem>
              <ImageSlider style={styles.slider} images={[
                'http://chittagongit.com//images/react-icon/react-icon-29.jpg',
                'http://chittagongit.com//images/react-icon/react-icon-29.jpg',
                'http://chittagongit.com//images/react-icon/react-icon-29.jpg'
              ]}/>
            </CardItem>

            <CardItem>
              <Text>
                  Samuel L Ipsum is a Lorem Ipsum Generator, it uses quotes from films which Samuel L Jackson has starred in place of the standard ipsum text.

              </Text>              
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
  },
  slider:{
    height:300,
  }
});
