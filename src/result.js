import React from 'react';

export default class Result extends React.Component{
  constructor(props){
    super(props);
    this.state = getTimeData();

  }
  render(){
    const weekData = this.state.data.week18;
    return (
      <div>
        <h2>Result page</h2>
        <div>current week: {this.state.data.key}</div>
        <div>Xiongs current time is {weekData.xiong.currentTime}</div>
        <div>Xiongs min time is {weekData.xiong.minTime}</div>
        <div>Xiongs awards time is {weekData.xiong.awardTime}</div>
        {weekData.xiong.minTime > weekData.xiong.currentTime?a:b }
        <button onClick={showTimeResult}>Confirm, show me the result</button>
      </div>
    );
  }
}

function showTimeResult(){
  return <h3>Hi result</h3>
}

function getTimeData(){
  return {
    'data':{
      'week18':{
        'xiong':{
          'minTime': 30,
          'awardTime': 35,
          'currentTime': 20,
          'challenges': [
            {
              'name': 'challenge1',
              'condition': 'condition1',
              'achieved': true,
              'punishment': 'xxxx',
              'awards': 'xxxx'
            },
            {
              'name': 'challenge2',
              'condition': 'condition2',
              'achieved': false,
              'punishment': 'xxxx',
              'awards': 'xxxx'
            }
          ],
          'punishment':'xxxx',
          'awards':'xxxx'
        },
        'neal':{

        }
      }
    }
  };
}
