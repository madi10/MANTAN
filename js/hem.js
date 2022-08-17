	var theImages = new Array()
 
//Random-loading images
theImages[0] = 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/3/21/8274cfd6-d2e6-4ffb-ad34-8386322ba1f7.png' // replace with names of images
theImages[1] = 'https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/7/24/c5fd8f2d-272b-462e-b562-bd5ac851acb2.jpg' // replace with names of images
theImages[2] = 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/7/13/96953d93-166f-4c21-8c9f-592757018028.jpg' // replace with names of images
theImages[3] = 'https://images.tokopedia.net/img/cache/900/VqbcmM/2021/3/10/0aed5e13-435b-4dc5-afdb-777f95880cf2.jpg' // replace with names of images
theImages[4] = 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/7/28/7c34b68b-030e-4657-aad8-3eb3e4a05030.jpg' // replace with names of images
theImages[5] = 'https://images.tokopedia.net/img/cache/900/product-1/2019/1/23/11487771/11487771_d919d70a-11d5-4c66-a6a8-d5f73a016b99_700_700.jpg' // replace with names of images
theImages[6] = 'https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/8/c68ddd59-361e-49ff-9141-026030af2902.jpg' // replace with names of images
 
var j = 0
var p = theImages.length;
var preBuffer = new Array()
 
for (i = 0; i < p; i++){
preBuffer[i] = new Image()
preBuffer[i].src = theImages[i]
}
var whichImage = Math.round(Math.random()*(p-1));
 
function MKAff(){
    if(whichImage==0){
    document.write('<a href ="https://tokopedia.link/twhGnxpOvsb"><img alt="Med+ Masker Duckbill 50 Pcs / 4Ply Disposable Face Mask Kemenkes - Hitam" class="lazyload loaded" data-src="'+theImages[whichImage]+'" border=0 width=300 height=300></a>');
    }
    else if(whichImage==1){
    document.write('<a href ="https://tokopedia.link/197XfiwLvsb"><img alt="Mini Folding HD Binoculars 30 x 60 - Day and Night Vision" class="lazyload loaded" data-src="'+theImages[whichImage]+'" border=0 width=300 height=300></a>');
    }
    else if(whichImage==2){
    document.write('<a href ="https://tokopedia.link/0VsDxORuWrb"><img alt="SIKAI 2in1 Silikon Strap w/ Bumper Case Cover u/ Huawei / Honor Band 6 - BLACK RED" class="lazyload loaded" data-src="'+theImages[whichImage]+'" border=0 width=300 height=300></a>');
    }
    else if(whichImage==3){
    document.write('<a href ="https://tokopedia.link/oqoS3otYUrb"><img alt="ORICO HDD/SSD Casing/Enclosure 2.5 Inch Type A to C - 2521C3" class="lazyload loaded" data-src="'+theImages[whichImage]+'" border=0 width=300 height=300></a>');
    } 
    else if(whichImage==4){
    document.write('<a href ="https://tokopedia.link/uBbfjdEIwsb"><img alt="Samsung Galaxy A52s 5G 8/128GB - Green" class="lazyload loaded" data-src="'+theImages[whichImage]+'" border=0 width=300 height=300></a>');
    } 
    else if(whichImage==5){
    document.write('<a href ="https://tokopedia.link/19FLaNuIwsb"><img alt="TENDA N301 Router Wireless 300Mbps Easy Setup Router" class="lazyload loaded" data-src="'+theImages[whichImage]+'" border=0 width=300 height=300></a>');
    } 
    else if(whichImage==6){
    document.write('<a href ="https://tokopedia.link/UJzCFyoIwsb"><img alt="Chief Shampoo Complete Treatment 400ml" class="lazyload loaded" data-src="'+theImages[whichImage]+'" border=0 width=300 height=300></a>');
    } 
}
