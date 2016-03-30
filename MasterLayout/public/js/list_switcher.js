function list_switcher(list, lists_container) {

    // SHOW AND HIDE LISTS FUNCTION

    var data_list_id = null;

    function hide_all_lists() {
        lists_container.find('.item-list').each(function () {
            $(this).hide();
        });
    }

    function remove_active_class() {
        list.find('.list-link').each(function () {
            if ($(this).find('a').hasClass('active')) {
                $(this).find('a').removeClass('active');
            }
        });

    }


    hide_all_lists();
    lists_container.find('.item-list:eq(0)').fadeIn();
    // RESPONSIVE LIST NAV



        if (document.documentElement.clientWidth < 992) {

            list.click(function () {
                remove_active_class();
                list.find('.list-link').each(function () {
                    $(this).on('click', function () {
                        data_list_id = $(this).attr('data-list-id');
                        hide_all_lists();
                        var active_link = $(this).find('a').html() + '<span class="caret"></span>';
                        console.log(active_link);
                        list.find('button').empty().html(active_link);
                        $(data_list_id).fadeIn();
                        list.find('#list_screener a').addClass('active');
                    });
                })
            });

        }
        else {

            $('#list_screener').remove();
            remove_active_class();


            list.find('.list-link:eq(0) a').addClass('active');

            list.find('.list-link').each(function () {

                $(this).on('click', function () {
                    data_list_id = $(this).attr('data-list-id');
                    hide_all_lists();
                    $(data_list_id).fadeIn();
                    remove_active_class();
                    $(this).find('a').addClass('active');
                });
            })
        }
}

