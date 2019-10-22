$(document).ready(function () {

    let topics = ['German Shepherd', 'Labradoodle', 'Corgi', 'Australian Shepherd', 'Saint Bernard', 'Mountain Bernese'] ;
// console.log (topics);

//function for displayimng array data, starting empty 
function displayButtons(){
    $('#buttons').empty();
    //looping through the array
    for (let i = 0; i < topics.length; i++) {
        var b = $("<button>");
        b.addClass("breed");
        b.attr("data-breed", topics[i]);
        b.text(topics[i]);
        $('#buttons').append(b);
    }
}

displayButtons();


$('button').on("click", function() {
    var dogBreed = $(this).attr("data-breed");
    console.log("dog breed " + dogBreed);
    
    // let api_key = 'HfGRRO78dm2tvcRZ0xr3g7Z2KNg9cL1L&q';
    const giphy_url = "https://api.giphy.com/v1/gifs/search?api_key=HfGRRO78dm2tvcRZ0xr3g7Z2KNg9cL1L&q=german%20shepherd&limit=25&offset=0&rating=PG-13&lang=en";
    console.log ('giphyURL'+ giphy_url);
    
    $.ajax({
        url: giphy_url,
        method: "GET"
      })
.then(function(data) {
    console.log(data);
    var results = response.data;
    console.log(results);

    // $('.container').html(data.joke);


// $('#searchSubmit').on('click', function () {
//     const searchText = $('#gifSearch').val();
//     const queryUrl =
//         'https://api.giphy.com/v1/gifs/search?api_key=' +
//         api_key +
//         '&q=' +
//         searchText +
//         '&limit=25&offset=0&rating=G&lang=en';
//     console.log(queryUrl);

//     $.ajax({
//         method: 'GET',
//         url: queryUrl
//     }).then(response => {
//         const data = response.data;
//         console.log(data);
//         // data.forEach(element => {
//         //     console.log(element.images.fixed_height.url);

//         //     $('.gifContainer').append(
//         //         `<img src="${element.images.fixed_height.url}">`
})
})
})