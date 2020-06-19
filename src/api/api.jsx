
import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export let featchData=async ()=>{
        try{
          const response = await axios.get(url);
          const data = response.data;
          let wantedData= {
              confirmed:data.confirmed,
              recovered:data.recovered,
              deaths:data.deaths,
              lastUpdate:data.lastUpdate

          }
          return wantedData;
        }catch(error){

        }

}
export let fetchDailyData=async ()=>{
    try{
        const response = await axios.get(url+"/daily");


        let wantedData = response.data.map(item=>{
            return({
                confirmed: item.confirmed.total,
                deaths:item.deaths.total,
                date:item.reportDate

            });
        })

        return  wantedData;

    }catch(error){

    }
}

export let fetchCountryData = async (country)=>{
    if( !country ) {
        const response = await axios.get(`${url}/countries`);
        console.log("----------------------------------------------------------------------------------------------------------------------------=");
        console.log("----------------------------------------------------------------------------------------------------------------------------=");
        console.log("----------------------------------------------------------------------------------------------------------------------------=");
        console.log("----------------------------------------------------------------------------------------------------------------------------=");
        console.log("----------------------------------------------------------------------------------------------------------------------------=");
        console.log("----------------------------------------------------------------------------------------------------------------------------=");
        console.log("----------------------------------------------------------------------------------------------------------------------------=");
        console.log("----------------------------------------------------------------------------------------------------------------------------=");


        let wantedData = response.data.countries.map(country => country.name);

        return wantedData;
    }else{
        const response = await axios.get(`${url}/countries/${country}`);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=");
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=");
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=");
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=");
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=");
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=");
        const wantedData = {
            confirmed: response.data.confirmed,
            recovered: response.data.recovered,
            deaths: response.data.deaths,
            lastUpdate: response.data.lastUpdate
        }

        // const wantedData=["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium"]
     //  }
       return wantedData;


    }

}
// export let fetchCountrySpecificData =(country)=>{
//     if(country)
//
// }
