import React, { Component } from 'react';
import {Tabs,Container, Tab,Header,Input,ScrollableTab, Title, Left, Icon, Right, Button, Body, Content,Text,Form ,Card, CardItem,Thumbnail ,} from "native-base";
import Tab1 from './Havale';

import Tab2 from './Virman';
export default class TabsScrollableExample extends Component {
  render() {
    return (
        <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Para Transfer</Title>
          </Body>
          <Right />
        </Header>

      <Content>
        <Header hasTabs/>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Havale">
            <Tab1/>
          </Tab>
          <Tab heading="Virman">
            <Tab2 />
          </Tab>
        </Tabs>
      </Content>
      </Container>
    );
  }
}