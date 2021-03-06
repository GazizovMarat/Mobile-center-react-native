'use strict'

import React, { Component } from 'react'
import { 
  AppRegistry, 
  View,
  Text, 
  StyleSheet} from 'react-native'
import { StockLine } from 'react-native-pathjs-charts'
import moment from 'moment'
import SvgUri from 'react-native-svg-uri';
import { SmoothLine } from 'react-native-pathjs-charts'
import * as LocalStorage from './storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default class Charts extends Component {
 
  constructor (props){
    super(props)
   //this.dataSetName = props.dataSetName;
    // if(props.dataSetName !== undefined){
    //   this.setState( {dataSetName: props.dataSetName});
    // }
    // if(props.data !== undefined){
    //   this.data = props.data;
    // }
  }
  //dataSetName = 'stepsData'
  //  data = [
  //     // [{
  //     //   "date": 0,
  //     //   "value": 0
  //     // }, {
  //     //   "date": 1,
  //     //   "value": 1000
  //     // }, {
  //     //   "date": 2,
  //     //   "value": 1500
  //     // }, {
  //     //   "date": 3,
  //     //   "value": 500
  //     // }, {
  //     //   "date": 4,
  //     //   "value": 1000
  //     // }]
  //   ]
   
     options = {
      width: 350,
      height: 250,
      color: '#058bc4',
      strokeWidth: '1.5',
      margin: {
        top: 10,
        left: 35,
        bottom: 30,
        right: 10
      },
      
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: false,
        showLines: false,
        showLabels: true,
        showTicks: false,
        zeroAxis: false,
        orient: 'bottom',
        tickValues: [ 
          // {value:'0'},
          // {value:'1'},
          // {value:'2'},
          // {value:'3'},
          // {value:'4'}
          ],
        labelFunction: ((timestamp) => {
          //TODO: убрать текущий день
          let date = new Date(timestamp);
          return moment(timestamp).format('DD/MM');
        }),
        label: {
          fontFamily: 'Arial',
          fontSize: 10,
          fontWeight: false,
          fill: '#C0C0C0',
        }
      },
      axisY: {
        showAxis: false,
        showLines: true,
        showLabels: true,
        showTicks: false,
        zeroAxis: true,
        orient: 'left',
        // tickValues: [
        // ],
        label: {
          fontFamily: 'Arial',
          fontSize: 10,
          fontWeight: false,
          fill: '#C0C0C0',
        }
      }
    }
//прямо в data сделать привязку к shared dataStorage
  render() {
    return (
      <View style={styles.container}>
         <Text>
          DAILY STATISTICS
        </Text>
        <StockLine data={LocalStorage.Storage.get(this.props.dataSetName)} options={this.options} xKey='date' yKey='value' />
        {/*<StockLine data={LocalStorage.Storage.get(this.dataSetName)} options={this.options} xKey='date' yKey='value' />*/}
        {/*<StockLine data={this.data} options={this.options} xKey='date' yKey='value' />*/}
      </View>
    )
  }
}
//AppRegistry.registerComponent('Charts', () => Charts);
