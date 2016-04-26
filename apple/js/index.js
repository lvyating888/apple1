$(function(){
    $btn=$('.nav .btn');
    $nav=$('.nav');
    $max=$('.maxnav');
    $maxa=$('.maxnav a');
    $min=$('.minnav');
    $suo=$('.minnav .suotu');
    console.log($suo)
    $html=$('html');
    flag=true;

    $btn.click(function(){
        $min.css({
            background:"#0000000"
        });
        //$max.slideToggle(500);
        if(flag==true){
            $html.css({
            overflow:"hidden",
            });
            $nav.css({
                background:"#000"
            });
       $max.slideDown(500,function(){
           $suo.css({float:"right"});
           $suo.parent().animate({
               paddingLeft:"35px"
           },1000);
                    $suo.animate({
                marginRight:"-40px"
                    },1000);
                });
            flag=false;
            return;
        }

        if(flag==false) {
       $max.slideUp(500, function () {
                $suo.animate({
          marginRight: "0px"
                },1000);
                $suo.parent().animate({
               paddingLeft:"15px"
                },1000);
            });
            $nav.css({
                background:"rgba(0, 0, 0, 0)"
            });
            $html.css({
                overflow:"scroll"
            });
            flag=true;

        }

    });


    $dih3=$('.diinner h3');
    $flag=true;

   var $dian=function(){
        $a=$(this).next(".diul");
        //$a.slideToggle(500);
        if($flag==true){
            $(this).css({
                fontWeight: "600",
                color: "#333"
            });
            $a.slideDown(500,function(){
                $flag=false;
            });

            return;
        }

        if($flag==false) {
            $a.slideUp(500,function(){
                $flag=true;
            });
            $(this).css({
                fontWeight: "400",
                color: "#333"
            });

        }
    };
    //$dih3.bind("click",$dian);
    //
    $dui=$('.diul');
    $(window).resize(function(){
        if($(window).width()<=759){
        $dih3.bind("click",$dian);
            $dui.css({
                display:"none"
            })
        }else {
            $dih3.unbind("click",$dian);
            $dui.css({
                display:"block"
            })
        }
    });

    $(window).resize();
/* banner */
    var $imgw=$('.ultu li a').width();
    //console.log($imgw)
    var t=setInterval(move,1000);
    var now=0;
    var next=0;
    //move()
    var fff=true;
    var $imglen=$('.ultu li').length;
    var $img=$('.ultu li');
    $img.eq(0).css({
        left:0
    });
    var $anniu=$('.big .anniu li a');
    function move(){

        if(!fff){return}
        fff=false;
        next++;
        if(next==$imglen){
            next=0;
        }
        $img.eq(now).animate({
            left:-$imgw
        },function(){
            fff=true;
        });
        //$img.eq(next).css({
        //    display:"block"
        //});
        $img.eq(next).css({
            left:$imgw
        }).animate({
            left:0
        },function(){
            fff=true;
        });
        $anniu.eq(now).removeClass("bian");

        $anniu.eq(next).addClass("bian");
        now=next;
    }
    function move1(){

        if(!fff){return}
        fff=false;
        next--;
        if(next==-1){
            next=$imglen-1;
        }
        $img.eq(now).animate({
            left:$imgw
        },function(){
            fff=true;
        });
        $img.eq(next).css({
            left:-$imgw
        }).animate({
            left:0
        });
        $anniu.eq(now).removeClass("bian");

        $anniu.eq(next).addClass("bian");
        now=next
    }
    var $big=$('.big');
    var $left=$('.leftbtn');
    var $right=$('.rightbtn');
    $big.hover(
        function(){
            clearInterval(t)
        },
        function(){
            t=setInterval(move,1000);
        }
    );
    $left.click(function(){
        move1();
    });
    $right.click(function(){
        move();
    });
    //console.log($anniu.length);
    $xiao=$(".banner li");
    $xiao.click(function(){
        var indexaa=$(this).index();
      console.log(indexaa);
        if(!fff||now==indexaa){return;}
           fff=false;
          if(indexaa>now){//如果当前的这一张大于即将要显示的那一张
              $img.eq(now).animate({
                  left:-$imgw
               },function(){
                  fff=true;
            });
                 $img.eq($(this).index()).css({
                 left:$imgw
             }).animate({
                left:0
              })
           }if(indexaa<now){
               $img.eq(now).animate({
                  left:$imgw
              },function(){
                   fff=true;
              });
               $img.eq(indexaa).css({
                  left:-$imgw
               }).animate({
                 left:0
               })
            }
          $anniu.eq(now).removeClass("bian");

           $anniu.eq(indexaa).addClass("bian");
            now=next=indexaa;
        })


});