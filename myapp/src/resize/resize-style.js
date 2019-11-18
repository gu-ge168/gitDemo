function resizeHeader(size){
    const wbody = document.body.clientWidth;
    if(size >= 630 && wbody < 630){
        return {
            size:wbody,
            bool:false
        }
    }else if(size <= 630 && wbody > 630){
        return {
            size:wbody,
            bool:true
        }
    }else{
        return {
            size: wbody,
            bool: wbody >= 630 ? true : false
        }
    }
} 

function resizeSlider(){  
    const wbody = document.body.clientWidth;//获取窗口可视宽度
    const width = (wbody / 24) * 17 ;//计算轮播图宽度大小
    if(wbody < 1200){ 
        if(width > 450 ){
            const height = (width / 2) - 50;
            if(width > 680){
                return{
                    height:height,//设置轮播高度
                    arrows_size:22,//设置初始箭头大小
                    double_size:20,//设置滑块箭头大小
                    arrows_top:height* 0.4 - 16,//设置箭头top值
                    double_top:height* 0.1 - 10,//设置滑块箭头top值
                }
            }else{
                return{
                    height:height,//设置轮播高度
                    arrows_size:20,//设置初始箭头大小
                    double_size:18,//设置滑块箭头大小
                    arrows_top:height* 0.4 - 15,//设置箭头top值
                    double_top:height* 0.1 - 9,//设置滑块箭头top值
                }
            }
        }else{
            const height = 450 / 2;
            return{
                height:height,//设置轮播高度
                arrows_size:18,//设置初始箭头大小
                double_size:16,//设置滑块箭头大小
                arrows_top:height* 0.4 - 14,//设置箭头top值
                double_top:height* 0.1 - 8,//设置滑块箭头top值
            }
        }

    }else{
        return{
            height:375,//设置轮播高度
            arrows_size:24,//设置初始箭头大小
            double_size:22,
            arrows_top:133,//设置箭头top值
            double_top:24.5,//设置滑块箭头top值
        }
    }
}

export {resizeHeader,resizeSlider};