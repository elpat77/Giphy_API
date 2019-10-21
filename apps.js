$(document).ready(function () {
    
    let topics = ['German Shepherd', 'Labradoodle', 'Corgi', 'Australian Shepherd', 'Saint Bernard', 'Mountain Bernese'] ;
console.log (topics);

//function for displayimng array data, starting empty 
function displayButtons(){
    $('#buttons').empty();
    //looping through the array
    for (let i = 0; i < topics.length; i++) {
        var b = $("<button>");
        b.addClass("breed");
        b.attr("data-name", topics[i]);
        b.text(topics[i]);
        $("#buttons").append(b);
    }
}

displayButtons();

// let api_key = 'z9HhR5kUuAW21CZS2yQ2XSzwkJtOwf5o&q';


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

// Creating array of dog breeds



//         // data.forEach(element => {
//         //     console.log(element.images.fixed_height.url);

//         //     $('.gifContainer').append(
//         //         `<img src="${element.images.fixed_height.url}">`
//         //     );
//         // });
//     // });

// });
// });}
})
