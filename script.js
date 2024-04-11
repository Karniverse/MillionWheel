$(document).ready(function(){
    // Set default degree (360*5)
    var degree = 1800;
    // Number of clicks = 0
    var clicks = 0;

    /* WHEEL SPIN FUNCTION */
    $('#spin').click(function(){
        // Add 1 every click
        clicks ++;

        // Multiply the degree by number of clicks
        // Generate random number between 1 - 360, 
        // then add to the new degree
        var newDegree = degree * clicks;
        var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
        var totalDegree = newDegree + extraDegree;

        /* Let's make the spin btn to tilt every
        time the edge of the section hits 
        the indicator */
        $('#wheel .sec').each(function(){
            var t = $(this);
            var noY = 0;
            var c = 0;
            var n = 700;	
            var interval = setInterval(function () {
                c++;				
                if (c === n) { 
                    clearInterval(interval);				
                }	

                var aoY = t.offset().top;

                /* 23.7 is the minimum offset number that 
                each section can get, in a 30 angle degree.
                So, if the offset reaches 23.7, then we know
                that it has a 30 degree angle and therefore, 
                exactly aligned with the spin btn */
                if(aoY < 23.89){
                    $('#spin').addClass('spin');
                    setTimeout(function () { 
                        $('#spin').removeClass('spin');
                    }, 100);	
                }
            }, 10);

            $('#inner-wheel').css({
                'transform' : 'rotate(' + totalDegree + 'deg)'			
            });
        });
    });
});
