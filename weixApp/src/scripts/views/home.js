var indexHtml=require("../temps/home.string");
SPA.defineView("home",{
	html:indexHtml,
	plugins: ['delegated'],
	bindActions:{
		"click-tab":function(e){
			var mySwiper = new Swiper('.swiper-container',{
				
			});
//			console.log($(e.el).index());
			$(e.el).addClass("active").siblings().removeClass("active");
			mySwiper.slideTo($(e.el).index(), 1000, false);//切换到第一个slide，速度为1秒
		}
	},
	bindEvents:{
		"show":function(){
			var swiper=new Swiper(".swiper-container",{
				onSlideChangeEnd: function(swiper){
					$("nav i").eq(swiper.activeIndex).addClass("active").siblings().removeClass("active");
			    }
			});
		}
	}
})
