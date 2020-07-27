import React,{Component} from "react";
import './Cards.css';
export default class Cards extends Component{
constructor(props) {
    super(props);
}
render(){
    let data = null;
    let boolData= false;

    let boolCountry = false;
    console.log(this.props.data);
  if(this.props.data && this.props.countryData) {

      console.log("123333334444")

       data = this.props.countryData;
       boolData=true;
  }
  else if(this.props.data){
        console.log("123333333333333333333333");
      data = this.props.data;
      boolCountry = true;
  }
  else{
      return "loading";
  }
if(boolData && !data.deaths){
    return 'loading';
}
else if(boolCountry && !data){
    return 'loading';
}


    return(

        <div className="container">
            <div className="row justify-content-around ">
                <div className=" card col-lg-3 mt-3 mt-lg-0">

                    <div className="row card-upper-container pt-4" >
                        <div className="col-6 ">
                            <div id="img-container-1" className="fa fa-user fa-3x "></div>
                        </div>
                        <div className="col-6 ">
                           <h4>Deaths</h4>
                            <h3>{data.deaths.value}</h3>
                        </div>
                    </div>
                    <div className="row card-middle-container align-items-end">
                        <div className="col-12 ">
                            <h5>{new Date(data.lastUpdate).toDateString()}</h5>
                            <p className="lead">Number of  Deaths caused by Covid-19</p>
                        </div>
                    </div>

                    <div className="row card-bottom-container-1 align-items-end">
                        <div className="col-12 "></div>
                    </div>


                </div>
                <div className=" card  col-lg-3 mt-3 mt-lg-0">

                    <div className="row card-upper-container pt-4  ">
                        <div className="col-6 col-lg-5  ">
                            <div id="img-container-2" className="fa fa-user fa-3x "></div>
                        </div>
                        <div className="col-6 col-lg-7 ">
                            <h4>Recovered</h4>
                            <h3>{data.recovered.value}</h3>
                        </div>
                    </div>
                    <div className="row card-middle-container align-items-end">
                        <div className="col-12 ">
                            <div className="col-12 ">
                                <h5>{new Date(data.lastUpdate).toDateString()}</h5>
                                <p className="lead">Number of  Recovery cases by Covid-19</p>
                            </div>
                        </div>
                    </div>
                    <div className="row card-bottom-container-2 align-items-end">
                        <div className="col-12 "></div>
                    </div>


                </div>
                <div className=" card  col-lg-3  mt-3 mt-lg-0">

                    <div className="row card-upper-container pt-4 ">
                        <div className="col-5 ">
                            <div id="img-container-3" className="fa fa-user fa-3x "></div>
                        </div>
                        <div className="col-7 ">
                            <h4>Infected</h4>
                            <h3>{data.confirmed.value}</h3>
                        </div>
                    </div>
                    <div className="row card-middle-container align-items-end">
                        <div className="col-12 "> <div className="col-12 ">
                            <h5>{new Date(data.lastUpdate).toDateString()}</h5>
                            <p className="lead">Number of  Active cases of Covid-19</p>

                        </div></div>
                    </div>
                    <div className="row card-bottom-container-3 align-items-end">
                        <div className="col-12 "></div>
                    </div>


                </div>
            </div>
        </div>


    )
}

}
