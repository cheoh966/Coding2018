function loadSlide(nSlide)
    {
        $('#thumbs img.current').removeClass('current');
        $(nSlide).addClass('current');

        var src = $(nSlide).attr('src').replace('thumb', 'large');
        $("#largeImage").fadeOut(function() 
        {
            this.src = src;
            $(this).fadeIn();

        }).center();
    $("#overlay").css({"opacity" : "0.7"})
                            .fadeIn("slow");    
    $('#close a, #close').fadeIn();
    $('#prev, #next').css('display', 'block');




    }

    $('#next').click(function()
    {   
        var cSlide = $('#thumbs img.current');
        if($(cSlide).next('img').length > 0)
            var nSlide = $(cSlide).next('img');
        else
            var nSlide = $('#thumbs img:first');

        loadSlide(nSlide);
    });

    $('#prev').click(function()
    {
        var cSlide = $('#thumbs img.current');  
        if($(cSlide).prev('img').length > 0)
            var nSlide = $(cSlide).prev('img');
        else
            var nSlide = $('#thumbs img:last');

        loadSlide(nSlide);
    });

    $('#thumbs img').click(function(){
        loadSlide(this);
    });



        $("#panel").click(function(){
            $(this).fadeOut("slow");
            $("#overlay").fadeOut("slow");
        });


    $('#close a').click(function(){

        $(this).fadeOut('slow');
        $('#overlay, #panel, #prev, #next, #largeImage').fadeOut('slow');
    $("#thumbs").css('display', 'block');

    });

    $('#thumbs img').click(function(){
    $("#thumbs").css('display', 'none');


    });



});
