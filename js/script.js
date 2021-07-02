$(document).ready(function() {


    
    $('form').submit(function(e) {

        e.preventDefault();


        $('.popup .result').empty();


        //select inputs
        var reg = $('input#reg-number').val(),
            code = $('input#code').val(),
            number = $('input#number');

        $('.popup').fadeIn(400, function() {

            $(this).removeClass('hidden');
            $('body').css('overflow-y', "hidden")

        });
        $('*[data-role="close"]').click(function() {

            $(".popup").fadeOut(200);
            $('body').css('overflow-y', "scroll")
            
        })


        if(isNaN(reg) || isNaN(code)) {
            $('.wait').hide();
            $('.error').show();
            $('.error span').text('الرجاء التحقق من رقم التسجيل و الرقم السري')
        } else if(number.val() != number.data('result')) {
            
            $('.wait').hide();
            $('.error').show();
            $('.error span').text('الرجاء التحقق من صحة العملية الحسابية')
        } else {
            $('.error').hide();
            $('.wait').fadeIn(100).delay(2000).fadeOut(100, function() {
                let random = Math.floor(Math.random() * 7) + 1;
                $('.popup .result').html(`
                    <img src="imgs/troll${random}.jpg" alt="">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${window.location.href}/trolls/troll${random}.html" class="btn btn-primary btn-sm"><i class="fab fa-facebook-f"></i> &nbsp; بارطاجي أودي <i class="fas fa-share"></i></a>

                `) 

            });
            
            
        }

    })
    


})