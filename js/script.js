
$(function(){
    const dutton = $('#signUp')
    dutton.on('click', function(e){
        e.preventDefault()
        $('#popUP').addClass('active')
    });
});
$(function(){
    const clouse = $('#pop_up_clouse')
    clouse.on('click', function(e){
        e.preventDefault()
        $('#popUP').removeClass('active')
    });
});
let offset = 0;
const sliderLine = document.querySelector('.slider-line');
document.querySelector('.next').addEventListener('click', () => {
        offset = offset + 355;
        if(offset > 1420){
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    });
    document.querySelector('.back').addEventListener('click', () => {
        offset = offset - 355;
        if(offset < 0){
            offset = 1420;
        }
        sliderLine.style.left = -offset + 'px';
    });
    let offset1 = 0;
const sliderLine2 = document.querySelector('.slider-line2');
document.querySelector('.next2').addEventListener('click', () => {
        offset1 = offset1 + 355;
        if(offset1 > 1420){
            offset1 = 0;
        }
        sliderLine2.style.left = -offset1 + 'px';
    });
    document.querySelector('.back2').addEventListener('click', () => {
        offset1 = offset1 - 355;
        if(offset1 < 0){
            offset1 = 1420;
        }
        sliderLine2.style.left = -offset1 + 'px';
    });
function accordion(parent){
    if($('.'+parent+' .adults__slides').css('display')=='block') {
        $('.'+parent+' .btn-num').removeClass('opened');
        $('.'+parent+' .adults__slides').css('display', 'none');
    }
    else {
        $('.'+parent+' .adults__slides').css('display', 'block');
        $('.'+parent+' .btn-num').addClass('opened');
    }
}
$('.adults .btn-num').on('click', function(){accordion('adults')});
$('.children .btn-num').on('click', function(){accordion('children')});

$(function(){
    const button2 = $('#btn-num1')
    button2.on('click', function(e){
        e.preventDefault()
        $('#adults__slides1').addClass('active2')
    });
})
$(function(){
    $('#container__btn').on('click', function(){
        $('#window').css('top', 0)
    })
    $('#container__btn2').on('click', function(){
        $('#window').css('top', -3947)
    })
})

$(function(){
    $('#guides-dtn').on('click', function(){
        $('#guides_berger').toggleClass('active2')
    })
})
$(function(){
    $('#guides-dtn2').on('click', function(){
        $('#guides_berger2').toggleClass('active2')
    })
})
$(function(){
    $('#guides-dtn3').on('click', function(){
        $('#guides_berger3').toggleClass('active2')
    })
})
$(function(){
    $('#guides-dtn4').on('click', function(){
        $('#guides_berger4').toggleClass('active2')
    })
})

