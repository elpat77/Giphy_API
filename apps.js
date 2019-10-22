$(document).ready(function () {

    let topics = ['German Shepherd', 'Labradoodle', 'Corgi', 'Australian Shepherd', 'Saint Bernard', 'Akita'] ;
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
    const giphy_url = "https://api.giphy.com/v1/gifs/search?api_key=HfGRRO78dm2tvcRZ0xr3g7Z2KNg9cL1L&q=" + dogBreed + "&limit=10&offset=0&rating=PG-13&lang=en";
    console.log ('giphyURL '+ giphy_url);
    
    // Performing an AJAX request with the queryURL
    $.ajax({
        method: 'GET',
        url: giphy_url
    }).
    // After data comes back from the request
    then(response => {
         console.log('response '+response);
         
    // storing the data from the AJAX request in the data variable
        const data = response.data;
        console.log('data' + data);
        
        // Looping through each of the data items
        for (let i = 0; i < data.length; i++) {
            // Creating and storing a div tag
            var breedDiv = $("<div>");
            
            // Creating and storing an image tag
            var breedImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            breedImage.attr("src", data[i].images.original_still.url);
            
            // Appending thea image tag to the animalDiv
            breedDiv.append(breedImage);
            
            // Prependng the animalDiv to the HTML page in the "#gif" div
            $("#gif").prepend(breedDiv);
            
                    
        // data.forEach(element => {
        //     console.log(element.images.original_still.url);
            
        //     $('.gif').append(
        //         `<img src="${element.images.original_still.url}">`

        //     // $('.gif_container').append(
        //     //     `<img src="${element.images.fixed_height.url}">`

        }
 })
 })        
 })
 
            
