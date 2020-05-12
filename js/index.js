$(".searchbar input").click(function() {
    $(".searchbar i").addClass("iconActive");
});

// API Call
var requestFlags = new XMLHttpRequest();

requestFlags.open('GET', 'https://restcountries.eu/rest/v2/all');

requestFlags.onload = function() {
    var data = JSON.parse(this.response);
    amountOfCountries(27, data);
}
requestFlags.send();

// 


// Show more logic


$(".arrowDown").click(function() {
    var data = JSON.parse(requestFlags.response);
    amountOfCountries(data.length, data);
    $(".arrowDown i").addClass("hide");
});


// 



function amountOfCountries(count, data) {
    for (var i = 0; i < count; i++) {
        var newElement = `<div class = "flag col-md-3" ><img src= "${data[i].flag}"><p>${data[i].name}</p></div>`;
        $(".country-flags").append(newElement);
    }
}