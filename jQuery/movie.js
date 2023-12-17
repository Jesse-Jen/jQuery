$(document).ready(function(e){
    $('form').on('submit', function(e){
        e.preventDefault()
        let movieName = $('input').eq(0).val()
        let movieRating = $('input').eq(1).val()
        $('#movieListCreator input').eq(0).val('') 
        $('#movieListCreator input').eq(1).val('') 
        appendStuff(movieName, movieRating)
    })

        function appendStuff(movieName, movieRating){
            let bigDiv = $('<div>')
           let movieInput = $('<div>', {text: 'Title: ' + movieName})
           let ratingInput = $('<div>', {text: 'Rating: ' + movieRating})
           
           //creating delete button
           let removeBtn = $('<button>',{text: 'X'})
           removeBtn.on('click', function(e){
            $(this).parent('div').remove()
           })

           //appending stuff
           bigDiv.append(movieInput)
           bigDiv.append(ratingInput)
           bigDiv.append(removeBtn)
           $('.container').append(bigDiv)

        }

        //Sorting alphabetical




        //Sorting by rating
    
})