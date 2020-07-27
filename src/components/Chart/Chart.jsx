import React,{Component} from "react";
import {fetchDailyData} from "../../api/api";
import{Line,Bar} from 'react-chartjs-2';
import './Chart.css';
import CountryPicker from "../CountryPicker/CountryPicker";


export default class Chart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dailyData: []

        }
    }

        async componentDidMount()
        {

            const receivedData = await fetchDailyData();

            this.setState({dailyData: receivedData});

        }


        render(){
            let lineChart = null;
            let barChart = null;

           if(this.props.globalStatus === false && this.props.countryData) {
              lineChart = <Bar data={{labels:['Deaths','Recovered','Infected'],datasets:[{label:'People',backgroundColor:['#D70F28','#12D1A1','#3333ff'],data:[this.props.countryData.deaths.value,this.props.countryData.recovered.value,this.props.countryData.confirmed.value],}]}} options={{legend:{display:false} , title:{display:true ,text:`Current state in ${this.props.selectedCountry}`}}} />
           }
           else {
               console.log("CHART");
               console.log(this.props.countryData);


               if (!this.state.dailyData) {
                   lineChart = "Loading";
               } else {

                   lineChart = <Line  data={
                       {
                           labels: this.state.dailyData.map(item => {
                               return (item.date)
                           }),
                           datasets: [{
                               data: this.state.dailyData.map(item => {
                                   return (item.confirmed)
                               }),
                               label: 'Infected',
                               borderColor: '#3333ff',
                               fill: true
                           },
                               {
                                   data: this.state.dailyData.map(item => {
                                       return (item.deaths)
                                   }),
                                   label: 'Deaths',
                                   borderColor: 'red',
                                   backgorundColor: 'rgba(255,0,0,0.5)',
                                   fill: true
                               }

                           ]


                       }}></Line>
               }
           }


        return(
         <div className="container">
             <div className="row ">
                 <div className="col-lg-10 ">
                     {lineChart}
                 </div>
                 <div className="col-lg-2 mt-4 align-items-center">
                     <CountryPicker changeCountry={this.props.changeCountry}></CountryPicker>
                 </div>
             </div>

         </div>
        )
        }
    }

