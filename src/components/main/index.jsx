import 'react-infinite-calendar/styles.css';
import '../main/style.css'

import { Card, Col, Row } from 'antd';
import InfiniteCalendar,{
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates,
} from 'react-infinite-calendar';
import React, { Component } from 'react'

import moment from 'moment';

// const loadData = () => JSON.parse(JSON.stringify(data));
const MultipleDatesCalendar = withMultipleDates(Calendar);
class Main extends Component{

  constructor(){
    super();
    this.state={
        date: new Date(),
        events:[
           {
              start:"2020-07-10",
              end:"2020-07-11",
              name:"Mumbai"
           },
           {
              start:"2020-08-12",
              end:"2020-08-13",
              name:"Bangalore"
           },
           {
              start:"2020-08-21",
              end:"2020-08-22",
              name:"Himachal"
           }
        ]
      }
    
  }

  componentDidMount=()=>{
    window.scrollTo(0,0)
  }
  render(){ 
    var Date =[]
    return(
      <div>
          <h1 style={{paddingTop:"1%"}}><u>Events</u></h1>
          <Row style={{padding:"2%"}}>
            <Col xs={{span:24}} sm={{span:20,offset:1}} md={{span:6,offset:1}} lg={{span:10,offset:2}} xl={{span:10,offset:2}} >
            {
              this.state.events.map((events,key)=>
              <Card  className="cardMain" style={{marginBottom:"20px",fontSize:"1.2rem"}} key={key} title={events.name}>
                  <p>start : {events.start}</p>
                  <p>end : {events.end}</p>
               <p style={{display:"none"}}>{Date.push(events.start)}</p> 
               <p style={{display:"none"}}>{Date.push(events.end)}</p> 
              </Card>
         
              )
            }
            </Col>
            <Col xs={{span:24}} sm={{span:20,offset:1}} md={{span:6,offset:4}} lg={{span:10,offset:1}} xl={{span:10,offset:2}}>
            <InfiniteCalendar
            Component={MultipleDatesCalendar}
            interpolateSelection={defaultMultipleDateInterpolation}
            selected={Date}
          />
            </Col>
          </Row>
      </div>

    
  )
}
}

export default Main

