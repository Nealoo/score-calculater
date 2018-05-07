import React from 'react';
import { Tabs, Table, Button } from 'antd';

const TabPane = Tabs.TabPane;

export default class Result extends React.Component{
  constructor(props){
    super(props);
    this.state = getTimeData();

  }
  render(){
    const { data } = this.state;
    const weekArray = Object.keys(data);
    return (
      <div>
        <h2>Result page</h2>
        <Tabs
          defaultActiveKey="1"
          tabPosition='left'
          style={{ height: 320 }}
        >
          {weekArray.map((item,index)=>(
            <TabPane tab={item} key={index}>
              Content of tab {item}:
              <Timetable data={data[item]} />
              <Button>Calculate the result</Button>
            </TabPane>
          ))}
        </Tabs>
        <button onClick={showTimeResult}>Confirm, show me the result</button>
      </div>
    );
  }
}

class Timetable extends React.Component{
  render(){
    const basicColumns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },{
      title: 'Min Hours',
      dataIndex: 'min_hours',
      key: 'min_hours'
    },{
      title: 'Max Hours',
      dataIndex: 'max_hours',
      key: 'max_hours'
    },{
      title: 'Current Hours',
      dataIndex: 'current_hours',
      key: 'current_hours'
    },{
      title: 'Awards',
      dataIndex: 'awards',
      key: 'awards'
    },{
      title: 'Punishment',
      dataIndex: 'punishment',
      key: 'punishment'
    }];
    return <Table columns={basicColumns} dataSource={this.props.data}></Table>
  }
}

function showTimeResult(){
  return <h3>Hi result</h3>
}

function getTimeData(){
  return {
    'data':{
      'week18':{'xiong':{'minTime':10}},
      'week19':[
        {
          'name': 'xiong',
          'min_hours': 20,
          'max_hours': 30,
          'current_hours': 0,
          'punishment': 'xxxx',
          'awards': 'xxxx',
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
            ]
        },
        {
          'name': 'neal',
          'min_hours': 9,
          'max_hours': 15,
          'current_hours': 0,
          'punishment': 'xxxx',
          'awards': 'xxxx',
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
            ]
        }
      ]
    }
  }
}
