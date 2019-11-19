$(document).ready(function () {
    var ht = $(window).height();
    $("section").height(ht);
    $(window).resize(function () {
        var ht = $(window).height();
        $("section").height(ht);
    });
    $(window).scroll(function () {
        ht = $(window).height();
        var sc = $(window).scrollTop(); // 현재의 문서가 스크롤된 거리 저장
        for (var i = 0; i < 6; i++) {
            if (sc >= ht * i && sc < ht * (i + 1)) {
                $("#pager li").removeClass("on");
                $("#pager li").eq(i).addClass("on");
            }
        }
        if (sc >= ht * 2 && sc < ht * 3) {

        } else {

        }

    }); //scroll end

    $("section").on("mousewheel", function (e, delta) {
        var i = $(this).index();
        //마우스 휠을 올렸을때
        if (delta > 0) {
            var prev = $(this).prev().offset().top;
            //문서 전체를 prev에 저장된 위치로 이동
            $("html,body").stop().animate({
                scrollTop: prev
            }, 1400);
        }
        //마우스휠을 내렸을 때
        else if (delta < 0) {
            var next = $(this).next().offset().top;
            //문서 전체를 next에 저장된 위치로 이동
            $("html,body").stop().animate({
                scrollTop: next
            }, 1400);
            if (i == 0) {
                $("article .right p").addClass("on");
            }
            if (i == 1) {
                $("article.choco ul").addClass("on");
                $("article.choco ul li").eq(i).css({
                    "transition": "all" + i * 0.6 + "s"
                });
            }
        }
        console.log(i);
    }); //mousewheel

    $(".box1").click(function (e) {
        e.preventDefault();
        $(this).css({
            "z-index": 20
        });
        $(".box2").css({
            "z-index": 10
        });
    });

    $(".box2").click(function (e) {
        e.preventDefault();
        $(this).css({
            "z-index": 20
        });
        $(".box1").css({
            "z-index": 10
        });
    });



});
