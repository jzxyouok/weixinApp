var indexHtml=require("../temps/index.string");
SPA.defineView("index",{
	html:indexHtml, 
	plugins: ['delegated'],
	modules: [{
	    name: 'content', // 子视图的名字，用作后边引用的句柄
	    views: ['home'], // 定义子视图的列表数组
	    defaultTag: 'home', // 定义默认视图
	    container: '.sun-view' // 子视图的容器
	  }]
})
