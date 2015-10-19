var emoji_list = {
	"lgtm-aikatsu1": "https://cloud.githubusercontent.com/assets/9249450/10409011/f3822612-6f41-11e5-9b99-78357bdfbc75.png",
	"lgtm-aikatsu2": "https://cloud.githubusercontent.com/assets/9249450/10409012/f386409e-6f41-11e5-97da-c8a2d5079e1a.png",
	"lgtm-aikatsu3": "https://cloud.githubusercontent.com/assets/9249450/10409013/f38a8cee-6f41-11e5-8b54-5a131eaa781e.png",
	"lgtm-haruhi1": "https://cloud.githubusercontent.com/assets/9249450/10409014/f397f974-6f41-11e5-9a68-351caf919d84.png",
	"lgtm-hyoka1": "https://cloud.githubusercontent.com/assets/9249450/10409015/f3ab208a-6f41-11e5-8859-222a98ec7ec3.png",
	"lgtm-hyoka2": "https://cloud.githubusercontent.com/assets/9249450/10409016/f3c0f81a-6f41-11e5-80de-7efe35dd294b.png",
	"lgtm-joshiraku1": "https://cloud.githubusercontent.com/assets/9249450/10409017/f3c796b6-6f41-11e5-9cf0-92ea1af42128.png",
	"lgtm-k-on1": "https://cloud.githubusercontent.com/assets/9249450/10409018/f3ce7260-6f41-11e5-8807-0bcbb5219e42.png",
	"lgtm-love-lab1": "https://cloud.githubusercontent.com/assets/9249450/10409019/f3d95f9a-6f41-11e5-9b5f-bb8c5528f9ea.png",
	"lgtm-love-lab2": "https://cloud.githubusercontent.com/assets/9249450/10409020/f3ebfbd2-6f41-11e5-9434-824269618ac2.png",
	"lgtm-lovelive1": "https://cloud.githubusercontent.com/assets/9249450/10409022/f4018e48-6f41-11e5-9c4d-21785f8027bc.png",
	"lgtm-lovelive2": "https://cloud.githubusercontent.com/assets/9249450/10409023/f40bce44-6f41-11e5-8e01-a645fd399f86.png",
	"lgtm-lovelive3": "https://cloud.githubusercontent.com/assets/9249450/10409024/f40f2df0-6f41-11e5-9533-9d276914b4f3.png",
	"lgtm-lovelive4": "https://cloud.githubusercontent.com/assets/9249450/10409025/f41b57ba-6f41-11e5-8988-ca9365cfb9d8.png",
	"lgtm-lovelive5": "https://cloud.githubusercontent.com/assets/9249450/10409026/f4217762-6f41-11e5-92fd-e5f22718ca22.png",
	"lgtm-lovelive6": "https://cloud.githubusercontent.com/assets/9249450/10409027/f42f24ca-6f41-11e5-83f9-04b12d52322e.png",
	"lgtm-lovelive7": "https://cloud.githubusercontent.com/assets/9249450/10409028/f444fd86-6f41-11e5-8fd8-5771bb3085a7.png",
	"lgtm-lovelive8": "https://cloud.githubusercontent.com/assets/9249450/10409029/f44feb6a-6f41-11e5-8859-3b6699645eb0.png",
	"lgtm-lovelive9": "https://cloud.githubusercontent.com/assets/9249450/10409030/f455203a-6f41-11e5-8402-e49e230fcdbf.png",
	"lgtm-lovelive10": "https://cloud.githubusercontent.com/assets/9249450/10409031/f45d5840-6f41-11e5-92af-edce3b67bd58.png",
	"lgtm-mikakunin1": "https://cloud.githubusercontent.com/assets/9249450/10409032/f46f2c6e-6f41-11e5-80f1-df6ee409d42e.png",
	"lgtm-mikakunin2": "https://cloud.githubusercontent.com/assets/9249450/10409033/f47fb782-6f41-11e5-9500-fe2f7d18be96.png",
	"lgtm-nichijou1": "https://cloud.githubusercontent.com/assets/9249450/10409034/f48349f6-6f41-11e5-9408-2687df72a226.png",
	"lgtm-nichijou2": "https://cloud.githubusercontent.com/assets/9249450/10409035/f492d24a-6f41-11e5-9083-29077ff071d9.png",
	"lgtm-sakura-trick1": "https://cloud.githubusercontent.com/assets/9249450/10409036/f49a2874-6f41-11e5-9c9b-53fd370bdc20.png",
	"lgtm-sakuta-trick2": "https://cloud.githubusercontent.com/assets/9249450/10409037/f49dd438-6f41-11e5-8008-49cf5a1c4e3b.png",
	"lgtm-sakuta-trick3": "https://cloud.githubusercontent.com/assets/9249450/10409038/f4b0d7d6-6f41-11e5-8458-95ccb168a06f.png",
	"lgtm-tari-tari1": "https://cloud.githubusercontent.com/assets/9249450/10409039/f4c38e76-6f41-11e5-93ad-676500eebbaa.png",
	"lgtm-yuruyuri1": "https://cloud.githubusercontent.com/assets/9249450/10409040/f4d5625e-6f41-11e5-829a-9a550546149a.png",
	"lgtm-yuruyuri2": "https://cloud.githubusercontent.com/assets/9249450/10409041/f4deefb8-6f41-11e5-9cd8-29ea84e1c4e3.png"};

var emoji = (function(){
	var api = {}, internal = {};
	api.run = function(){
		var container = internal.find_container();
        var button = internal.generate_button();
        container.append(button);
	};

    internal.generate_button = function(){
        var container = $('<div class="code-emoji"></div>');
        var button = $('<a class="tabnav-extra"><img style="width:18px;margin-bottom: -5px;" src="https://cloud.githubusercontent.com/assets/9249450/10409443/ed26cfb4-6f52-11e5-9c25-da09f9f4a1b6.png"></span></a>');
        button.click(function(){
            var emoji = internal.get_emoji();
            var input = internal.find_textarea();
            input.value += '\n![emoji]('+emoji+')';

        });
        container.append(button);
        return container;
    };



    internal.find_container = function(){
        return $('.timeline-comment .comment-form-head .right:last').eq(0);
    };

    internal.find_textarea = function(){
        return document.getElementById('new_comment_field');
    };

    internal.count = function (dict){
         var n=0;
         for(var key in dict){
             ++n;
         }
         return n;
     };
    internal.random = function(min, max){
        return Math.floor(Math.random() * (max- min) + min);
    };

    internal.get_emoji = function(){
        var index = internal.random(0, internal.count(emoji_list));
        var i = 0;
        for(var key in emoji_list){
            if(i == index){
                return emoji_list[key];
            }else{
                i++;
            }
        }
    };

	return api;
})();

$(function(){
	 emoji.run();
});


