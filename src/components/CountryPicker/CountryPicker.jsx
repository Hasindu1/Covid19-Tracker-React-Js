import React,{Component} from "react";
import './CountryPicker.css';
import {fetchCountryData} from "../../api/api";

export default class CountryPicker extends Component{

    constructor(props) {
        super(props);
        this.state={
            countries:[]
        }

    }

    async componentDidMount() {
        const countryData = await fetchCountryData();
        this.setState({countries:countryData});
    }



    render(){
        if(!this.state.countries){
            return "Loading";
        }

        return(


            <div className="dropdown show">
                <select onClick={(e)=>{this.props.changeCountry(e.target.value);}} className="btn btn-secondary dropdown-toggle" >

                    <option  key ="0" value="Global">Global</option>
                    {this.state.countries.map((country,index)=>{return(  <option  key={index+1}value={country}>{country}</option>);})}


                </select>
        </div>
        )
    }

}
