// Charts and list view switch

$(document).ready(function(){

    $('.switch-graph').click(function(){
       $(this).parents('.block').find('.block-content .table-data').hide();
        $(this).parents('.block').find('.block-content .chart-data').fadeIn();
    });
    $('.switch-list').click(function(){
        $(this).parents('.block').find('.block-content .chart-data').hide();
        $(this).parents('.block').find('.block-content .table-data').fadeIn();
    });

});

$('.scrollable').perfectScrollbar();
$(".scrollable").find(".ps-scrollbar-y-rail").css({"opacity":0.5});

if (document.documentElement.clientWidth < 992) {
    list_switcher($('#list_switch2'), $('#lists_container'));
}
else{
    list_switcher($('#list_switch'), $('#lists_container'));
}


// DATE RANGE PICKER CONFIGURATION AND HOVER STATE

$('#config-demo').daterangepicker({
    "autoApply": true,
    "ranges": {
        "Today": [
            "2016-02-16T10:03:33.153Z",
            "2016-02-16T10:03:33.153Z"
        ],
        "Yesterday": [
            "2016-02-15T10:03:33.153Z",
            "2016-02-15T10:03:33.153Z"
        ],
        "Last 7 Days": [
            "2016-02-16T10:03:33.153Z",
            "2016-02-22T10:03:33.153Z"
        ],
        "Last 30 Days": [
            "2016-01-24T10:03:33.153Z",
            "2016-02-22T10:03:33.153Z"
        ],
        "This Month": [
            "2016-01-31T23:00:00.000Z",
            "2016-02-29T22:59:59.999Z"
        ],
        "Last Month": [
            "2015-12-31T23:00:00.000Z",
            "2016-01-31T22:59:59.999Z"
        ]
    },
    "startDate": "2016-01-31",
    "endDate": "2016-01-31",
    "opens": "left",
    "locale": {
        "format": "YYYY/MM/DD",
        "separator": " - ",
        "applyLabel": "Apply",
        "cancelLabel": "Cancel",
        "fromLabel": "From",
        "toLabel": "To",
        "customRangeLabel": "Custom",
        "daysOfWeek": [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
        ],
        "monthNames": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        "firstDay": 1
    }
}, function(start, end, label) {
    console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
});

$('#config-demo').mouseover(function(){
   $(this).parent().find('span').css('color','#FA5A28');
});
$('#config-demo').mouseleave(function(){
    $(this).parent().find('span').css('color','#767676');
});



// GRAPH and LIST VIEW SWITCHER

$('.switch-graph').on('click', function(){
    $(this).parent().find('.switch-list').removeClass('active');
    $(this).addClass('active');
});
$('.switch-list').on('click', function(){
    $(this).parent().find('.switch-graph').removeClass('active');
    $(this).addClass('active');
});


