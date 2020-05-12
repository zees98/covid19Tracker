var totalReq = new XMLHttpRequest();
totalReq.open("GET", "https://covid-19-data.p.rapidapi.com/totals?format=json");
totalReq.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");
totalReq.setRequestHeader("x-rapidapi-key", "dda0736e34msh31d2e3a59051e6ap1fc34ejsnbca1a9df55c6");

totalReq.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
    $(".total-cases").html(data[0].confirmed);
    $(".total-deaths").html(data[0].deaths);
    $(".total-recovered").html(data[0].recovered);
    $(".last-update").html(data[0].lastChange);
};
totalReq.send();