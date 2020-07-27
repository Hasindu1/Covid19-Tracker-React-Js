import React, {Component} from 'react';
import logo from './logo.svg';
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import {featchData,fetchCountryData} from "./api/api";
import ParticlesBg from "particles-bg";
import './App.css';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            data:{},
            countryData:{},
            selectedCountry:null,
            global:true
        }
    }
    async componentDidMount() {
        const receivedData = await featchData();


        this.setState({data:receivedData,countryData:undefined})


    }
    handleCountryChanged = async(country)=>{


       let receivedData = null;
        if(country !== "Global") {
            receivedData = await fetchCountryData(country);
            console.log(receivedData);
        }
        if(country === "Global") {

            this.setState({ global :true,countryData: this.state.data});
        }
        else
            this.setState({selectedCountry:country,global:false,countryData:receivedData});

    }
    render(){
        return(<React.Fragment>

            <div className="container">   <h1 className="text-center"><span className="img-container container mr-3"></span>COVID 19 Tracker </h1></div>

            <Cards data={this.state.data} countryData={this.state.countryData}></Cards>

            <Chart countryData={this.state.countryData} globalStatus={this.state.global} selectedCountry={this.state.selectedCountry}changeCountry={this.handleCountryChanged }></Chart>

            <ParticlesBg type="cobweb" bg={true}/>
        </React.Fragment>)
    }


}