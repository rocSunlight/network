$(function(){
    $('#test').scrollToFixed();    //scrolltofixed方法 固定id为test元素在页面滚动时，元素仍然显示
    $('.res-nav_click').click(function(){    //屏幕缩小到一定尺寸时出现按钮，点击后出现导航条
        $('.main-nav').slideToggle();
        return false

    });

    wow = new WOW(        //实例化一个对象
        {
            animateClass: 'animated',
            offset:       100
        }
    );
    wow.init();  //调用对象里面方法

})

$(window).load(function(){

    $('.main-nav li a,a.link').bind('click',function(event){
        var $anchor = $(this);      //把元素本身存到一个变量里

        $('html, body').stop().animate({      //html跟body滚动到某个元素上时的过度效果
            scrollTop: $($anchor.attr('href')).offset().top - 102
        }, 1500,'easeInOutExpo');

        event.preventDefault();    //阻止事件冒泡
    });



    var $container = $('.portfolioContainer'),
        $body = $('body'),
        colW = 375,
        columns = null;


    $container.isotope({
        // 禁用窗口大小调整  使其自适应   调用isotope.js方法
        resizable: true,
        masonry: {
            columnWidth: colW
        }
    });

    $(window).smartresize(function(){
        // 检查是否列布局已经改变了
        var currentColumns = Math.floor( ( $body.width() -30 ) / colW );
        if ( currentColumns !== columns ) {
            // 设置新列数
            columns = currentColumns;
           
            $container.width( columns * colW )
                .isotope('reLayout');
        }

    }).smartresize(); // 自身触发 调整设置容器的宽度

    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({

            filter: selector,
        });
        return false;
    });
})