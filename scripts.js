var accordian = $('#accordian');
var hamBtn = $('.hamBtn');

$('#applyBox').click(function () {
    if (accordian.css.display === 'none') {
        accordian.css.display = 'grid';
        $('.mainWrapper').css.gridTemplateColumns = "[line1] 4% [line2] 15% [line3] 16% [line4] 16% [line5] 16%[line6] 15% [line7] 15% [line8] 4% [end];";
        $('.mainWrapper').css.gridTemplateRows = "[line-1] 100px [line-2] 60px [line-3] 100px [line-4] 350px [line-5] 300px [line-6] 250px [line-7] 250px [line-8] 250px [line-9] 100px [line-10] 100px [line-11] 100px [line-12] 100px [line-13] 100px [line-14] 300px [line-15] 100px [line-16] 300px [end];";
        accordian.css.gridColumn = '3 / span 3';
        accordian.css.gridRow = '6 / span 3';
    }
    else {
        accordian.style.display = 'none';
}
});

$(hamBtn).click(function(){
    $('.nav').css.display = 'block';
});
