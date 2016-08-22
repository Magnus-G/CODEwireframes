
$(function() {
  var spinner = $( "#spinner" ).spinner();

  $( "#disable" ).click(function() {
    if ( spinner.spinner( "option", "disabled" ) ) {
      spinner.spinner( "enable" );
    } else {
      spinner.spinner( "disable" );
    }
  });
  $( "#destroy" ).click(function() {
    if ( spinner.spinner( "instance" ) ) {
      spinner.spinner( "destroy" );
    } else {
      spinner.spinner();
    }
  });
  $( "#getvalue" ).click(function() {
    alert( spinner.spinner( "value" ) );
  });
  $( "#setvalue" ).click(function() {
    spinner.spinner( "value", 5 );
  });

  $( "button" ).button();
});

////////////////////

$(document).ready(function() {
    $('#example1').erToc({'goTopNode':'#example1', 'startLevel': 'h1', 'maxLevel': 'h1', 'numbered': false, 'numberedSuffix':'. '});
});

////////////////////

(function( $ ) {

    var events = [ "create", "start", "stop", "slide", "change" ];

    $.widget( "app.slider", $.ui.slider, {
        _getCreateEventData: function() {
            return { values: this.values() };
        },
        _init: function() {
            var steps = this.options.steps;
            if ( $.isArray( steps ) ) {
                this.option( "min", 0 );
                this.option( "max", steps.length - 1 );
            }
        },
        _trigger: function( name, e, ui ) {
            var steps = this.options.steps;
            if ( !$.isArray( steps ) ) {
                return this._superApply( arguments );
            }

            if ( $.inArray( name, events ) >= 0 ) {
                return this._superApply([
                    name,
                    e,
                    $.extend( ui, {
                        stepValue: [steps[ui.values[0]], steps[ui.values[1]]]
                    })
                ]);
            }
            return this._superApply(arguments);
        }
    });
})(jQuery);

$(document).ready(function () {
  var values = [15000, 18000, 22000, 27000, 30000, 50000, 75000, 125000, 150000, 270000, 350000, 600000, 750000];
  var slider = $('#price-slider').slider({
        range: true,
        steps: values,
        create: function(e, ui){
        $('#price-slider').slider('values', 1, values.length - 1);
        $('#min_price').val(values[0]);
        $('#max_price').val(values[values.length - 1]);
        },
       slide: function(event, ui){
         $('#min_price').val(ui.stepValue[0]);
         $('#max_price').val(ui.stepValue[1]);
       }
    });

  var slider2 = $('#price-slider2').slider({
        range: true,
        steps: values,
        create: function(e, ui){
        $('#price-slider2').slider('values', 1, values.length - 1);
        $('#min_price2').val(values[0]);
        $('#max_price2').val(values[values.length - 1]);
        },
       slide: function(event, ui){
         $('#min_price2').val(ui.stepValue[0]);
         $('#max_price2').val(ui.stepValue[1]);
       }
    });
});

// Drag and Drop ///////////////////////////////////////////////////////

  function allowDrop(ev) {
      ev.preventDefault();
  }

  function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
  }

// Icon Menu Content ///////////////////////////////////////////////////////

$(document).ready(function () {
  $(".icon-menu .icon").click(function(event) {
    event.preventDefault();

    $(".icon-menu-content").hide();

    var activeIconMenuItem = $(this).attr("rel");
    $("#"+activeIconMenuItem).show();

    $(".icon-menu-content").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

// Aside Menu Content ///////////////////////////////////////////////////////

$(document).ready(function () {
  $(".aside-menu-item").click(function(event) {
    event.preventDefault();

    $(".aside-menu-content").hide();

    var activeAsideItem = $(this).attr("rel");
    $("#"+activeAsideItem).show();

    $(".aside-menu-content").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

// Product Detail View ///////////////////////////////////////////////////////

$(document).ready(function () {
  $(".product-thumb").click(function(event) {
    event.preventDefault();

    $(".product-large").hide();

    var activeProductLarge = $(this).attr("rel");
    $("#"+activeProductLarge).show();

    $(".product-large").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

// Accordion ///////////////////////////////////////////////////////

$(document).ready(function () {
  $('.js-accordion-trigger').bind('click', function(e){
    jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
    jQuery(this).parent().toggleClass('is-expanded');
    e.preventDefault();
  });
});

/////////////////////////////////////////////////////////

$(document).ready(function () {
  $('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

/////////////////////////////////////////////////////////

$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

/////////////////////////////////////////////////////////

$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");
  
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
});

/////////////////////////////////////////////////////////

$(document).ready(function() {
  $(".dropdown-button").click(function() {
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings(".dropdown-menu");
    $menu.toggleClass("show-menu");
    $menu.children("li").click(function() {
      $menu.removeClass("show-menu");
      $button.html($(this).html());
    });
  });
});

/////////////////////////////////////////////////////////

$(document).ready(function() {
  $('.expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });
});

/////////////////////////////////////////////////////////

$(document).ready(function() {
  var element = document.getElementById("js-fadeInElement");
  $(element).addClass('js-fade-element-hide');

  $(window).scroll(function() {
    if( $("#js-fadeInElement").length > 0 ) {
      var elementTopToPageTop = $(element).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element).addClass('js-fade-element-show');
      }
      else if(elementTopToWindowBottom < 0) {
        $(element).removeClass('js-fade-element-show');
        $(element).addClass('js-fade-element-hide');
      }
    }
  });
});

/////////////////////////////////////////////////////////

$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});

/////////////////////////////////////////////////////////

$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});

/////////////////////////////////////////////////////////

$(document).ready(function() {
  var menuToggle = $("#js-navigation-centered-mobile-menu").unbind();
  $("#js-navigation-centered-menu").removeClass("show");
  
  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-navigation-centered-menu").slideToggle(function(){
      if($("#js-navigation-centered-menu").is(":hidden")) {
        $("#js-navigation-centered-menu").removeAttr("style");
      }
    });
  });
});

/////////////////////////////////////////////////////////

$(document).ready(function() {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

/////////////////////////////////////////////////////////

$(window).scroll(function(e) {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

/////////////////////////////////////////////////////////

(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') {
        defaults.selector = options;
      }

      options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };
})(jQuery);


jQuery(function(){  
  jQuery.mark.jump();
});


/////////////////////////////////////////////////////////

$(document).ready(function(){
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});

/////////////////////////////////////////////////////////

$(document).ready(function () {
  $(".js-vertical-tab-content").hide();
  $(".js-vertical-tab-content:first").show();

  /* if in tab mode */
  $(".js-vertical-tab").click(function(event) {
    event.preventDefault();

    $(".js-vertical-tab-content").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).show();

    $(".js-vertical-tab").removeClass("is-active");
    $(this).addClass("is-active");

    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
  });

  /* if in accordion mode */
  $(".js-vertical-tab-accordion-heading").click(function(event) {
    event.preventDefault();

    $(".js-vertical-tab-content").hide();
    var accordion_activeTab = $(this).attr("rel");
    $("#"+accordion_activeTab).show();

    $(".js-vertical-tab-accordion-heading").removeClass("is-active");
    $(this).addClass("is-active");

    $(".js-vertical-tab").removeClass("is-active");
    $(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
  });
});

// Predictive Search ///////////////////////////////////////////////////////

$(document).ready(function () {
  $(function(){
    var currencies = [
      { value: 'Afghan afghani', data: 'AFN' },
      { value: 'Bahamian dollar', data: 'BSD' },
      { value: 'Bhutanese ngultrum', data: 'BTN' },
      { value: 'Cambodian riel', data: 'KHR' },
      { value: 'Danish krone', data: 'DKK' },
      { value: 'Egyptian pound', data: 'EGP' },
      { value: 'Falkland Islands pound', data: 'FKP' },
      { value: 'Georgian lari', data: 'GEL' },
      { value: 'Haitian gourde', data: 'HTG' },
      { value: 'Icelandic krona', data: 'ISK' },
      { value: 'Jamaican dollar', data: 'JMD' },
      { value: 'Kenyan shilling', data: 'KES' },
      { value: 'Lao kip', data: 'LAK' },
      { value: 'Macanese pataca', data: 'MOP' },
      { value: 'Moroccan dirham', data: 'MAD' },
      { value: 'Nepalese rupee', data: 'NPR' },
      { value: 'Norwegian krone', data: 'NOK' },
      { value: 'Omani rial', data: 'OMR' },
      { value: 'Polish zloty', data: 'PLN' },
      { value: 'Qatari riyal', data: 'QAR' },
      { value: 'Romanian leu', data: 'RON' },
      { value: 'Solomon Islands dollar', data: 'SBD' },
      { value: 'Tajikistani somoni', data: 'TJS' },
      { value: 'Ugandan shilling', data: 'UGX' },
      { value: 'Vanuatu vatu', data: 'VUV' },
      { value: 'Zimbabwean dollar', data: 'ZWD' },
    ];
    
    // setup autocomplete function pulling from currencies[] array
    $('#autocomplete').autocomplete({
      lookup: currencies,
      onSelect: function (suggestion) {
        var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
        $('#outputcontent').html(thehtml);
      }
    });
  });
});

(function(e){"function"===typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function g(a,b){var c=function(){},c={autoSelectFirst:!1,appendTo:"body",serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:g.formatResult,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:c,onSearchComplete:c,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",lookupFilter:function(a,b,c){return-1!==
a.value.toLowerCase().indexOf(c)},paramName:"query",transformResult:function(a){return"string"===typeof a?e.parseJSON(a):a}};this.element=a;this.el=e(a);this.suggestions=[];this.badQueries=[];this.selectedIndex=-1;this.currentValue=this.element.value;this.intervalId=0;this.cachedResponse=[];this.onChange=this.onChangeInterval=null;this.isLocal=this.ignoreValueChange=!1;this.suggestionsContainer=null;this.options=e.extend({},c,b);this.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"};
this.initialize();this.setOptions(b)}var h={extend:function(a,b){return e.extend(a,b)},createNode:function(a){var b=document.createElement("div");b.innerHTML=a;return b.firstChild}};g.utils=h;e.Autocomplete=g;g.formatResult=function(a,b){var c="("+b.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","g"),"\\$1")+")";return a.value.replace(RegExp(c,"gi"),"<strong>$1</strong>")};g.prototype={killerFn:null,initialize:function(){var a=this,b="."+a.classes.suggestion,c=a.classes.selected,
d=a.options,f;a.element.setAttribute("autocomplete","off");a.killerFn=function(b){0===e(b.target).closest("."+a.options.containerClass).length&&(a.killSuggestions(),a.disableKillerFn())};if(!d.width||"auto"===d.width)d.width=a.el.outerWidth();a.suggestionsContainer=g.utils.createNode('<div class="'+d.containerClass+'" style="position: absolute; display: none;"></div>');f=e(a.suggestionsContainer);f.appendTo(d.appendTo).width(d.width);f.on("mouseover.autocomplete",b,function(){a.activate(e(this).data("index"))});
f.on("mouseout.autocomplete",function(){a.selectedIndex=-1;f.children("."+c).removeClass(c)});f.on("click.autocomplete",b,function(){a.select(e(this).data("index"),!1)});a.fixPosition();if(window.opera)a.el.on("keypress.autocomplete",function(b){a.onKeyPress(b)});else a.el.on("keydown.autocomplete",function(b){a.onKeyPress(b)});a.el.on("keyup.autocomplete",function(b){a.onKeyUp(b)});a.el.on("blur.autocomplete",function(){a.onBlur()});a.el.on("focus.autocomplete",function(){a.fixPosition()})},onBlur:function(){this.enableKillerFn()},
setOptions:function(a){var b=this.options;h.extend(b,a);if(this.isLocal=e.isArray(b.lookup))b.lookup=this.verifySuggestionsFormat(b.lookup);e(this.suggestionsContainer).css({"max-height":b.maxHeight+"px",width:b.width+"px","z-index":b.zIndex})},clearCache:function(){this.cachedResponse=[];this.badQueries=[]},clear:function(){this.clearCache();this.currentValue=null;this.suggestions=[]},disable:function(){this.disabled=!0},enable:function(){this.disabled=!1},fixPosition:function(){var a;"body"===this.options.appendTo&&
(a=this.el.offset(),e(this.suggestionsContainer).css({top:a.top+this.el.outerHeight()+"px",left:a.left+"px"}))},enableKillerFn:function(){e(document).on("click.autocomplete",this.killerFn)},disableKillerFn:function(){e(document).off("click.autocomplete",this.killerFn)},killSuggestions:function(){var a=this;a.stopKillSuggestions();a.intervalId=window.setInterval(function(){a.hide();a.stopKillSuggestions()},300)},stopKillSuggestions:function(){window.clearInterval(this.intervalId)},onKeyPress:function(a){if(!this.disabled&&
!this.visible&&40===a.keyCode&&this.currentValue)this.suggest();else if(!this.disabled&&this.visible){switch(a.keyCode){case 27:this.el.val(this.currentValue);this.hide();break;case 9:case 13:if(-1===this.selectedIndex){this.hide();return}this.select(this.selectedIndex,13===a.keyCode);if(9===a.keyCode&&!1===this.options.tabDisabled)return;break;case 38:this.moveUp();break;case 40:this.moveDown();break;default:return}a.stopImmediatePropagation();a.preventDefault()}},onKeyUp:function(a){var b=this;
if(!b.disabled){switch(a.keyCode){case 38:case 40:return}clearInterval(b.onChangeInterval);if(b.currentValue!==b.el.val())if(0<b.options.deferRequestBy)b.onChangeInterval=setInterval(function(){b.onValueChange()},b.options.deferRequestBy);else b.onValueChange()}},onValueChange:function(){var a;clearInterval(this.onChangeInterval);this.currentValue=this.element.value;a=this.getQuery(this.currentValue);this.selectedIndex=-1;this.ignoreValueChange?this.ignoreValueChange=!1:a.length<this.options.minChars?
this.hide():this.getSuggestions(a)},getQuery:function(a){var b=this.options.delimiter;if(!b)return e.trim(a);a=a.split(b);return e.trim(a[a.length-1])},getSuggestionsLocal:function(a){var b=a.toLowerCase(),c=this.options.lookupFilter;return{suggestions:e.grep(this.options.lookup,function(d){return c(d,a,b)})}},getSuggestions:function(a){var b,c=this,d=c.options,f=d.serviceUrl;(b=c.isLocal?c.getSuggestionsLocal(a):c.cachedResponse[a])&&e.isArray(b.suggestions)?(c.suggestions=b.suggestions,c.suggest()):
c.isBadQuery(a)||(d.params[d.paramName]=a,!1!==d.onSearchStart.call(c.element,d.params)&&(e.isFunction(d.serviceUrl)&&(f=d.serviceUrl.call(c.element,a)),e.ajax({url:f,data:d.ignoreParams?null:d.params,type:d.type,dataType:d.dataType}).done(function(b){c.processResponse(b,a);d.onSearchComplete.call(c.element,a)})))},isBadQuery:function(a){for(var b=this.badQueries,c=b.length;c--;)if(0===a.indexOf(b[c]))return!0;return!1},hide:function(){this.visible=!1;this.selectedIndex=-1;e(this.suggestionsContainer).hide()},
suggest:function(){if(0===this.suggestions.length)this.hide();else{var a=this.options.formatResult,b=this.getQuery(this.currentValue),c=this.classes.suggestion,d=this.classes.selected,f=e(this.suggestionsContainer),g="";e.each(this.suggestions,function(d,e){g+='<div class="'+c+'" data-index="'+d+'">'+a(e,b)+"</div>"});f.html(g).show();this.visible=!0;this.options.autoSelectFirst&&(this.selectedIndex=0,f.children().first().addClass(d))}},verifySuggestionsFormat:function(a){return a.length&&"string"===
typeof a[0]?e.map(a,function(a){return{value:a,data:null}}):a},processResponse:function(a,b){var c=this.options,d=c.transformResult(a,b);d.suggestions=this.verifySuggestionsFormat(d.suggestions);c.noCache||(this.cachedResponse[d[c.paramName]]=d,0===d.suggestions.length&&this.badQueries.push(d[c.paramName]));b===this.getQuery(this.currentValue)&&(this.suggestions=d.suggestions,this.suggest())},activate:function(a){var b=this.classes.selected,c=e(this.suggestionsContainer),d=c.children();c.children("."+
b).removeClass(b);this.selectedIndex=a;return-1!==this.selectedIndex&&d.length>this.selectedIndex?(a=d.get(this.selectedIndex),e(a).addClass(b),a):null},select:function(a,b){var c=this.suggestions[a];c&&(this.el.val(c),this.ignoreValueChange=b,this.hide(),this.onSelect(a))},moveUp:function(){-1!==this.selectedIndex&&(0===this.selectedIndex?(e(this.suggestionsContainer).children().first().removeClass(this.classes.selected),this.selectedIndex=-1,this.el.val(this.currentValue)):this.adjustScroll(this.selectedIndex-
1))},moveDown:function(){this.selectedIndex!==this.suggestions.length-1&&this.adjustScroll(this.selectedIndex+1)},adjustScroll:function(a){var b=this.activate(a),c,d;b&&(b=b.offsetTop,c=e(this.suggestionsContainer).scrollTop(),d=c+this.options.maxHeight-25,b<c?e(this.suggestionsContainer).scrollTop(b):b>d&&e(this.suggestionsContainer).scrollTop(b-this.options.maxHeight+25),this.el.val(this.getValue(this.suggestions[a].value)))},onSelect:function(a){var b=this.options.onSelect;a=this.suggestions[a];
this.el.val(this.getValue(a.value));e.isFunction(b)&&b.call(this.element,a)},getValue:function(a){var b=this.options.delimiter,c;if(!b)return a;c=this.currentValue;b=c.split(b);return 1===b.length?a:c.substr(0,c.length-b[b.length-1].length)+a},dispose:function(){this.el.off(".autocomplete").removeData("autocomplete");this.disableKillerFn();e(this.suggestionsContainer).remove()}};e.fn.autocomplete=function(a,b){return 0===arguments.length?this.first().data("autocomplete"):this.each(function(){var c=
e(this),d=c.data("autocomplete");if("string"===typeof a){if(d&&"function"===typeof d[a])d[a](b)}else d&&d.dispose&&d.dispose(),d=new g(this,a),c.data("autocomplete",d)})}});

///////////////////////////////////////////

