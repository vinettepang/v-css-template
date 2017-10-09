
;jQuery.noConflict();
(function($, window, document,undefined) {
	var $this = $(this);

    //定义IcToast的构造函数
    var IcToast = function(ele, opt) {
    	$this.css({
			position:'relative'
		});
        this.$element = ele,
        this.defaults = {
            position:  			  "absolute", 				//不是body的话就absolute
	    	animateIn:  		  "fadeIn",					//进入的动画
	    	animateOut: 		  "fadeOut",				//结束的动画
			//padding:            "10px 20px",              //padding
			background:           "#fff",                   //背景色
			borderRadius:         "6px",                    //圆角
			duration:             1000,                     //定时器时间
			animateDuration: 	  500, 						//执行动画时间
			fontSize:             16,                   	//字体大小
			content:              "这是一个提示信息",       //提示内容
			color:                "#482929",                //文字颜色
			top:            	  "50%",                	//bottom底部的位置    具体的数值 或者center  垂直居中
			zIndex:               9999999,                	//层级
			isCenter:   		  true, 					//是否垂直水平居中显示
			closePrev: 			  true, 					//在打开下一个toast的时候立即关闭上一个toast
			type:                 "success", 				//提示类型
        },
        this.options = $.extend({}, this.defaults, opt)
    }
    //定义IcToast的方法
    IcToast.prototype = {
        init: function() {
            return this.$element.css({
                'color': this.options.color,
                'fontSize': this.options.fontSize,
                'textDecoration': this.options.textDecoration
            });
        },
        isLowerIe9 : function(){
			return (!window.FormData);
		},
		createMessage : function(){
			var box = '';   //消息元素
			
			setTimeout(function(){
			  	box.addClass('show');
			},10);

			top = this.isCenter===true? '50%':this.top;

			if(this.options.closePrev){
				$('.ic-toast').remove();
			}
			box = $('<div class="animated '+this.options.animateIn+' ic-toast alert-tips alert-tips-'+this.options.type+'"><p><span class="alert-icon"><i class="nc-icon-glyph ui-1_check-bold"></i></span><span class="alert-content">'+this.options.content+'</span></p></div>').css({
				"position":this.options.position,
				"padding":this.options.padding,
				"background":this.options.background,
				"font-size":this.options.fontSize,
				"-webkit-border-radius":this.options.borderRadius,
				"-moz-border-radius":this.options.borderRadius,
				"border-radius":this.options.borderRadius,
				"color":this.options.color,
				"top":top,
				"-webkit-transform":'translate3d(-50%,-50%,0)',
		        "-moz-transform":'translate3d(-50%,-50%,0)',
		        "transform":'translate3d(-50%,-50%,0)',
		        '-webkit-animation-duration':this.options.animateDuration/1000+'s',
    			'-moz-animation-duration':this.options.animateDuration/1000+'s',
    			'animation-duration':this.options.animateDuration/1000+'s',
    			'z-index': this.options.zIndex
			}).appendTo(this.$element);
			this.colseMessage(box);
	    },
	    colseMessage : function(box){
	    	var t = '';
	    	var isLowerIe9 = this.isLowerIe9();

	    	var self = this;
	    	if(!isLowerIe9){
		    	 setTimeout(function(){
		    		box.removeClass(self.options.animateIn).addClass(self.options.animateOut).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
		    			box.remove();
		    		});
		    	},self.options.duration);
	    	}else{
	    		 setTimeout(function(){
		    		box.remove();
		    	},self.options.duration);
	    	}
	    }
    }
    //在插件中使用IcToast对象
    $.fn.icToast = function(options) {
        //创建IcToast的实体
        var icToast = new IcToast(this, options);
        //调用其方法
        return icToast.createMessage();
    }
})(jQuery, window, document);
