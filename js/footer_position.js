
    function footerPosition(){

        $("footer").removeClass("fixed-bottom");
        var contentHeight = $(document.body).height(),//document.body.scrollHeight網頁正文全文高度
            winHeight = $(window).height()//window.innerHeight;//可視窗口高度,不包括上方工具欄
        
        console.log(contentHeight,winHeight);    
        if(!(contentHeight > winHeight)){
            //當網頁正文高度小於窗口高度，為footer類添加fixed-bottom
            $("footer").addClass("fixed-bottom");
        }

        if($("footer").hasClass('hide_footer')){
            $("footer").removeClass('hide_footer')
        }

    }


    window.addEventListener('load',footerPosition)

    $(window).resize(footerPosition);


    $(".tree_li1,.tree_li3").click(function(){
        footerPosition();
    }) 


  $(function(){


     
    
    



});

