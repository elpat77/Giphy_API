$(document).ready(function () {

    let topics = ['German Shepherd', 'Labradoodle', 'Australian Shepherd', 'Saint Bernard', 'Akita'];
    // console.log (topics);

    //function for displayimng array data, starting empty 
    $('#add-breed').on('click', event => {
        event.preventDefault();
        var userBreed = $('#breed-input').val().trim();
        console.log(userBreed);
        topics.push(userBreed);
        console.log(topics);
        displayButtons();
    })

    function displayButtons() {
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

    $('button').on("click", function () {
        var dogBreed = $(this).attr("data-breed");
        console.log("dog breed " + dogBreed);

        const giphy_url = "https://api.giphy.com/v1/gifs/search?api_key=HfGRRO78dm2tvcRZ0xr3g7Z2KNg9cL1L&q=" + dogBreed + "&limit=10&offset=0&rating=R&lang=en";
        console.log('giphyURL ' + giphy_url);

        // Performing an AJAX request with the queryURL
        $.ajax({
            method: 'GET',
            url: giphy_url
        }).
            // After data comes back from the request
            then(response => {
                console.log('response ' + response);
                $("#gif").empty();
                // storing the data from the AJAX request in the data variable
                const data = response.data;
                console.log('data' + data);

                // Looping through each of the data items
                for (let i = 0; i < data.length; i++) {
                    // Creating and storing a div tag
                    var breedDiv = $("<div>");

                    // Creating and storing an image tag
                    var breedImage = $("<img>");

                    //getting the gif title
                    var title = data[i].title;
                    //adding the titel to a p element
                    var gifTitle = $("<p>").text("The title for the following is: " + title);
                    //getting the gif ratings
                    var rating = data[i].rating;
                    //adding  the ratings to a p element
                    var gifRating = $("<p>").text("The MPAA rating is " + rating);

                    // Setting the src attribute of the image to a property pulled off the result item
                    breedImage.attr("src", data[i].images.original_still.url);
                    breedImage.attr("data-still", data[i].images.original_still.url);
                    breedImage.attr("data-animate", data[i].images.original.url);
                    breedImage.attr("data-state", "still");
                    breedImage.attr("class", "gifStart");
                    // Appending the rating and image tags to the breedDiv
                    breedDiv.prepend(gifTitle);
                    breedDiv.append(gifRating);
                    breedDiv.append(breedImage);

                    breedDiv.append(breedImage);

                    // Prependng the animalDiv to the HTML page in the "#gif" div
                    $("#gif").prepend(breedDiv);
                }
                // This line grabs the input from the textbox

                // adding function that detects user clicks
                $(".gifStart").on("click", function () {
                    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                    var state = $(this).attr("data-state");
                    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                    // Then, set the image's data-state to animate
                    // Else set src to the data-still value
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                        console.log(state)
                    }
                    else if (state === "animate") {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                        console.log(state)
                    }
                });


            })
    })

})

