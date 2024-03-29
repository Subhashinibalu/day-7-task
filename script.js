var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload= function(){
    var data = request.response;
    var result = JSON.parse(data);

    // getting all the countries frpm Asian continent

    var res = result.filter((ele)=>ele.region==="Asia");
    console.log(res.map((ele)=>ele.name.common));

    // getting all the countries with less than 2 lakh population

    var pop = result.filter((ele)=>ele.population<200000);
    console.log(pop.map((ele)=>ele.name.common));

    // printing all country name, capital and flag using for each 

    var detail = result.forEach((ele)=>{
        console.log("countryname:",ele.name.common);
        console.log("capital:",ele.capital);
        console.log("flag",ele.flags.png);
    })

    // printing the total population of the countries using resuce function

    var total=result.reduce((sum,i)=>{
        return sum+i.population;

    },0)
    console.log("total population:",total);

    //printing the countries which uses us dollar as currency

    var dol = result.filter((ele)=>ele.currencies?.USD?.name === "United States dollar");
    console.log(dol.map((ele)=>ele.name.common));
    
}