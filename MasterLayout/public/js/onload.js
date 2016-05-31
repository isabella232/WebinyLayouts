/**
 *  ==== sven dodao ====
 */
function fooShowWizard(wName){
	$('body').addClass('wizard-active');
	$('#'+wName).show();
}

function fooHideWizard(wName){
	$('body').removeClass('wizard-active');
	$('#'+wName).hide();
}


	$(document).ready(function(){
		function toggleCodes(on) {
        var obj = document.getElementById('icons');
        
        if (on) {
          obj.className += ' codesOn';
        } else {
          obj.className = obj.className.replace(' codesOn', '');
        }
      }
		
        // tooltip
		$('.sign-in-holder a, a[data-toggle="tooltip"], span[data-toggle="tooltip"], button[data-toggle="tooltip"]').tooltip();

        // .tablet_nav
        $("a.tablet-navigation").bind('click', function(){
            $("body").toggleClass('opened-tablet-nav');
            return false; 
        });
        
        // .navbar-header button.nav
        $(".navbar-header button.nav").bind('click', function(){
            $("body").toggleClass('opened-mobile-nav');
            return false; 
        });
        

        
        // .navbar-nav li a
        $(".navbar-nav li a").bind('click', function(){
            
           var this_a = $(this);
           var parent_li  = $(this).closest('li');
           var scrl_panel = $(this).closest('.left-menu');
           
           // mobile
           if( $("ul", parent_li).size() ){
               
                $(parent_li).toggleClass('expanded');
                $(parent_li).toggleClass('opened-tablet-subnav');
                
                $(scrl_panel).toggleClass('expanded');
               //  return false;
           } 
           
           

           
            // find next
            if( $(this_a).attr('data-open-submenu') ){
                
               // desktop
               $(".left-menu-submenu").show();

               $(".navbar-collapse .subnavigation[data-this-menu!='"+$(this_a).attr('data-open-submenu')+"']").hide();

               $(".navbar-collapse .subnavigation[data-this-menu='"+$(this_a).attr('data-open-submenu')+"']").toggle();
               if( !$(".navbar-collapse .subnavigation[data-this-menu='"+$(this_a).attr('data-open-submenu')+"']").is(':visible') ){
                   $(".left-menu-submenu").hide();
               }

               $('.left-menu-submenu').perfectScrollbar();

               return false;

            }
        });
        
        $('select').select2({
          allowClear: true
        });

        $('select').select2().on('select2:open', function() {
          var container = $('.select2-container').last();
          /*Add some css-class to container or reposition it*/
          container.appendTo($(this).siblings('.select2-container').find('.dropdown-wrapper'));
        });

        // perfectScrollbar
        $('.left-menu').perfectScrollbar();
        // $('.scrl_wrapper_submenu').perfectScrollbar();

        $('.ftree__folder--has-subfolder').bind('click', function() {
          if ($(this).hasClass('ftree__folder--expanded')) {
            $(this).removeClass('ftree__folder--expanded');
          } else {
            $(this).addClass('ftree__folder--expanded');
          }
        });

        $('.browser__header-actions a[data-viewtype]').bind('click', function() {
          var browser_view = $(this).attr('data-viewtype');
          var this_browser = $(this).parents('.browser');
          var this_browser_content = this_browser.find('.browser__content');

          this_browser.find('a[data-viewtype]').removeClass('active');
          
          this_browser_content.removeClass('browser__content--list');
          this_browser_content.removeClass('browser__content--grid');
          this_browser_content.addClass('browser__content--'+browser_view);

          $(this).addClass('active');
        });
        
	});