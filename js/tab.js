window.onload=function(){
	var guoji=getClass("guojidapai");
	var xuan=getClass("tabb");
	for(var i=0;i<guoji.length;i++){
		guoji[i].index=i;
		guoji[i].onclick=function(){
			for(var j=0;j<xuan.length;j++){
				xuan[j].style.display="none";
				guoji[j].style.fontWeight="normal";
				guoji[j].style.textDecoration="none";
			}
			xuan[this.index].style.display="block";
			this.style.fontWeight="bold";
			this.style.textDecoration="underline";
		}
	}
//桃心
	var tu=getClass("tabb1");
	var xin=getClass("xin");
	for(var i=0;i<tu.length;i++){
		tu[i].index=i;
		tu[i].onmouseover=function(){
			xin[this.index].style.display="block";
		}
	    tu[i].onmouseout=function(){
	    	xin[this.index].style.display="none";
	    }
	}
    
//文本获取焦点
 var wenben=$(".text")[0];
 wenben.onfocus=function(){
    if(wenben.value=="猫猫狗狗购物狂欢，给它最好的"){
        wenben.value="";
    }
 }
 wenben.onblur=function(){
    if(wenben.value){

    }else{
        wenben.value="猫猫狗狗购物狂欢，给它最好的";
    }
 }

//导航轮播
    var imgs=$(".imgs");
    var dian=$(".dian1");
    var  num=1;
    var bigbanbox=$(".bigbanbox")[0];
    var bigarr=["#b90af9","#e1e1e1","#fff701","#e1e1e1","#67c9a3","#e22253","#b90af9"];
    function move(){
    	if(num==6){
    		num=0;
    	}
    	for(var i=0;i<imgs.length;i++){
            imgs[i].style.zIndex=2;
            dian[i].style.background="black";
    	}

      imgs[num].style.zIndex=3;
      dian[num].style.background="red";	
      bigbanbox.style.background=bigarr[num];
      num++;
    }
    var t=setInterval(move,2000);
    for(var i=0;i<dian.length;i++){
    	dian[i].index=i;
    	dian[i].onmouseover=function(){
    		for(var j=0;j<imgs.length;j++){
    			imgs[j].style.zIndex=2;
    			dian[j].style.background="black";
    		}
    		clearInterval(t);
    		imgs[this.index].style.zIndex=3;
    		dian[this.index].style.background="red";
            bigbanbox.style.background=bigarr[this.index];
    	}
    	dian[i].onmouseout=function(){
    		t=setInterval(move,2000);
    		num=this.index+1;
    	}
    }
    //左导航
    var shudhlj=$(".shudhlj")[0];
    var shudhljbox=$(".shudhljbox")[0];
     var jxsc=$(".jxsc")[0];
     var jingxuan=$(".jingxuan")[0]; 
     var sidebar=$(".sidebar")[0];

     jxsc.onmouseover=function(){
        jingxuan.setAttribute("src","img/daohang1-2.png");
        sidebar.style.zIndex=5;

     }
     jxsc.onmouseout=function(){
        jingxuan.setAttribute("src","img/daohang1.png");
        sidebar.style.zIndex=0;
     }
     //1
     var nz=$(".nz");
     var nv=$(".nv")[0];
    nz[0].onmouseover=function(){ 
    nv.setAttribute("src","img/daohang2-2.png");
    shudhlj.style.display="block";
    animate(shudhlj,{left:5},Tween.Linear);
        }
    nz[0].onmouseout=function(){
            nv.setAttribute("src","img/daohang2.png");
           shudhlj.style.display="none";
            animate(shudhlj,{left:4},Tween.Linear);

        }
    //2
     var nanzhuang=$(".nanzhuang")[0];
    nz[1].onmouseover=function(){ 
           nanzhuang.setAttribute("src","img/daohang3-2.png");
           shudhlj.style.display="block";
           animate(shudhlj,{left:5},Tween.Linear);
        }
    nz[1].onmouseout=function(){
           nanzhuang.setAttribute("src","img/daohang3.png");
           shudhlj.style.display="none";
           animate(shudhlj,{left:4},Tween.Linear);
        }
    //3
     var nvxie=$(".nvxie")[0];
    nz[2].onmouseover=function(){ 
           nvxie.setAttribute("src","img/daohang4-2.png");
           shudhlj.style.display="block";
           animate(shudhljbox,{left:178},Tween.Linear);
        }
    nz[2].onmouseout=function(){
           nvxie.setAttribute("src","img/daohang4.png");
           shudhlj.style.display="none";
           animate(shudhljbox,{left:171},Tween.Linear);
        }
     //4
     var hzp=$(".hzp")[0];
    nz[3].onmouseover=function(){ 
           hzp.setAttribute("src","img/daohang5-2.png");
           shudhlj.style.display="block";
           animate(shudhljbox,{left:178},Tween.Linear);
        }
    nz[3].onmouseout=function(){
           hzp.setAttribute("src","img/daohang5.png");
           shudhlj.style.display="none";
           animate(shudhljbox,{left:171},Tween.Linear);
        }
    //5
     var sj=$(".sj")[0];
    nz[4].onmouseover=function(){ 
           sj.setAttribute("src","img/daohang6-2.png");
           shudhlj.style.display="block";
           animate(shudhljbox,{left:178},Tween.Linear);
        }
    nz[4].onmouseout=function(){
           sj.setAttribute("src","img/daohang6.png");
           shudhlj.style.display="none";
           animate(shudhljbox,{left:171},Tween.Linear);
        }
    //6
    var muying=$(".muying")[0];
    nz[5].onmouseover=function(){ 
           muying.setAttribute("src","img/daohang7-2.png");
           shudhlj.style.display="block";
           animate(shudhljbox,{left:178},Tween.Linear);
        }
    nz[5].onmouseout=function(){
           muying.setAttribute("src","img/daohang7.png");
           shudhlj.style.display="none";
           animate(shudhljbox,{left:171},Tween.Linear);
        }
        //7
    var lingshi=$(".lingshi")[0];
    nz[6].onmouseover=function(){ 
           lingshi.setAttribute("src","img/daohang8-2.png");
           shudhlj.style.display="block";
           animate(shudhljbox,{left:178},Tween.Linear);
        }
    nz[6].onmouseout=function(){
           lingshi.setAttribute("src","img/daohang8.png");
           shudhlj.style.display="none";
           animate(shudhljbox,{left:171},Tween.Linear);
        }
         //8
    var dajiadian=$(".dajiadian")[0];
    nz[7].onmouseover=function(){ 
           dajiadian.setAttribute("src","img/daohang9-2.png");
           shudhlj.style.display="block";
           animate(shudhljbox,{left:178},Tween.Linear);
        }
    nz[7].onmouseout=function(){
           dajiadian.setAttribute("src","img/daohang9.png");
           shudhlj.style.display="none";
           animate(shudhljbox,{left:171},Tween.Linear);
        }
    //9
    var jiaju=$(".jiaju");
    var jjjc=$(".jjjc")[0];
    jiaju[0].onmouseover=function(){ 
           jjjc.setAttribute("src","img/daohang10-2.png");
           shudhlj.style.display="block";
           animate(shudhljbox,{left:178},Tween.Linear);
        }
    jiaju[0].onmouseout=function(){
           jjjc.setAttribute("src","img/daohang10.png");
           shudhlj.style.display="none";
           animate(shudhljbox,{left:171},Tween.Linear);
        }
        //10
    var wanbiao=$(".wanbiao")[0];
    jiaju[1].onmouseover=function(){ 
           wanbiao.setAttribute("src","img/daohang11-2.png");
           shudhlj.style.display="block";
           animate(shudhljbox,{left:178},Tween.Linear);
        }
    jiaju[1].onmouseout=function(){
           wanbiao.setAttribute("src","img/daohang11.png");
           shudhlj.style.display="none";
           animate(shudhljbox,{left:171},Tween.Linear);
        }
        //11
    var qichepj=$(".qichepj")[0];
    jiaju[2].onmouseover=function(){ 
           qichepj.setAttribute("src","img/daohang12-2.png");
           shudhlj.style.display="block";
           animate(shudhljbox,{left:178},Tween.Linear);
        }
    jiaju[2].onmouseout=function(){
           qichepj.setAttribute("src","img/daohang12.png");
           shudhlj.style.display="none";
           animate(shudhljbox,{left:171},Tween.Linear);
        }
        //12
    var jiafang=$(".jiafang")[0];
    jiaju[3].onmouseover=function(){ 
           jiafang.setAttribute("src","img/daohang13-2.png");
           shudhlj.style.display="block";
           animate(shudhljbox,{left:178},Tween.Linear);
        }
    jiaju[3].onmouseout=function(){
           jiafang.setAttribute("src","img/daohang13.png");
           shudhlj.style.display="none";
           animate(shudhljbox,{left:171},Tween.Linear);
        }
        //13
    var yybj=$(".yybj")[0];
    jiaju[4].onmouseover=function(){ 
           yybj.setAttribute("src","img/daohang14-2.png");
           shudhlj.style.display="block";
           animate(shudhljbox,{left:178},Tween.Linear);
        }
    jiaju[4].onmouseout=function(){
           yybj.setAttribute("src","img/daohang14.png");
           shudhlj.style.display="none";
           animate(shudhljbox,{left:171},Tween.Linear);
        }
        //14
    var chuju=$(".chuju")[0];
    jiaju[5].onmouseover=function(){ 
           chuju.setAttribute("src","img/daohang15-2.png");
           shudhlj.style.display="block";
           animate(shudhljbox,{left:178},Tween.Linear);
        }
    jiaju[5].onmouseout=function(){
           chuju.setAttribute("src","img/daohang15.png");
           shudhlj.style.display="none";
           animate(shudhljbox,{left:171},Tween.Linear);
        }
        //15
    var tsyx=$(".tsyx")[0];
    jiaju[6].onmouseover=function(){ 
           tsyx.setAttribute("src","img/daohang16-2.png");
           shudhlj.style.display="block";
           animate(shudhljbox,{left:178},Tween.Linear);
        }
    jiaju[6].onmouseout=function(){
           tsyx.setAttribute("src","img/daohang16.png");
           shudhlj.style.display="none";
           animate(shudhljbox,{left:171},Tween.Linear);
        }



    //顶部固定搜索框
    var dingtext=$(".dingtext")[0];
    dingtext.onfocus=function(){
        if(dingtext.value="输入想要搜索的商品名"){
            dingtext.value="";
        }
    }
    dingtext.onblur=function(){
        if(dingtext.value){

        }else{
            dingtext.value="输入想要搜索的商品名";
        }
    }
    
    //顶部搜索框的显示与隐藏
    var search=$(".search")[0];
    var floor=$(".floor");
    var flagdown=true;
    var flagup=true;
    var jump=$(".jump")[0];
    var btn=$("li",jump);
    //按需加载条件
    var floorjia=$(".floor");
    var ch=document.documentElement.clientHeight;
    /*alert(floor.offsetTop);*/
    //跳转按钮单击事件
    for(var i=0;i<btn.length;i++){
       btn[i].index=i;
       btn[i].onclick=function(){
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        animate(obj,{scrollTop:floor[this.index].t})
       }
    }
    window.onscroll=function(){
        var scrollT=getScrollT();
        if(scrollT>=1198){
            if(flagdown){
                animate(search,{top:0});
                flagdown=false;
                flagup=true;
            }

        }else{
            if(flagup){
                animate(search,{top:-50});
                flagup=false;
                flagdown=true;
            }
            
        }
        //跳转楼层的显示与隐藏
        if(scrollT>1160){
            jump.style.display="block";
        }else{
             jump.style.display="none";
        }
        //滚动条，按钮跳转
       for(var i=0;i<floor.length;i++){
            floor[i].t=floor[i].offsetTop;
            if(floor[i].t-300<scrollT){
                for(var j=0;j<btn.length;j++){
                    btn[j].style.borderColor="black";
                }
                 btn[i].style.borderColor="white";
            }
        } 

        //按需加载
    var scrollT=getScrollT();
    document.title=scrollT;
    for(var i=0;i<floorjia.length;i++){
       if(floorjia[i].offsetTop<ch+scrollT){//当前楼层到顶部的高度，如果小于页面内容超出浏览器的距离加上浏览器的距离时
        var imgsjia=$("img",floorjia[i]);//获取当前楼层的所有图片
        for(var j=0;j<imgsjia.length;j++){//遍历图片
            imgsjia[j].src=imgsjia[j].getAttribute("bb");
            //aa属性的值赋值给src
        }
       
       }
      }
        
    
}

    //楼层左部小轮播  一层
    var imgbox=$(".imgbox")[0];
    var btnleft=$(".box1")[0];
    var btnright=$(".box3")[0];
    function moveleft(){
        animate(imgbox,{left:-110},600,Tween.Linear)
        var first=getFirst(imgbox);
        var last=getLast(imgbox);
        imgbox.insertAfter(first,last);
        imgbox.style.left=0;
    }
    function moveright(){
        var last=getLast(imgbox);
        var first=getFirst(imgbox);
        imgbox.insertBefore(last,first);
        imgbox.style.left=-110+"px";
        animate(imgbox,{left:0},600,Tween.Linear);

    }
    var t=setInterval(moveleft,800);
    btnleft.onclick=function(){
        moveleft();
    }
    btnright.onclick=function(){
        moveright();
    }
    btnleft.onmouseover=function(){
        clearInterval(t);
    }
    btnleft.onmouseout=function(){
        t=setInterval(moveleft,800);
    }
    btnright.onmouseover=function(){
        clearInterval(t);
    }
    btnright.onmouseout=function(){
        t=setInterval(moveright,800);
    }
    //楼层左部小轮播  二层
    var imgbox1=$(".imgbox")[1];
    var btnleft1=$(".box1")[1];
    var btnright1=$(".box3")[1];
    function moveleft1(){
        animate(imgbox1,{left:-110},600,Tween.Linear)
        var first=getFirst(imgbox1);
        var last=getLast(imgbox1);
        imgbox1.insertAfter(first,last);
        imgbox1.style.left=0;
    }
    function moveright1(){
        var last=getLast(imgbox1);
        var first=getFirst(imgbox1);
        imgbox1.insertBefore(last,first);
        imgbox1.style.left=-110+"px";
        animate(imgbox1,{left:0},600,Tween.Linear);

    }
    var t1=setInterval(moveleft1,800);
    btnleft1.onclick=function(){
        moveleft1();
    }
    btnright1.onclick=function(){
        moveright1();
    }
    btnleft1.onmouseover=function(){
        clearInterval(t1);
    }
    btnleft1.onmouseout=function(){
        t1=setInterval(moveleft1,800);
    }
    btnright1.onmouseover=function(){
        clearInterval(t1);
    }
    btnright1.onmouseout=function(){
        t1=setInterval(moveright1,800);
    }
    //右测购物车
    
    var gouwuli=$("li",jumpright)[2];
    var gouwu=$("img",gouwuli)[0];
    var jumpright=$(".jumpright")[0];
     var ch1=document.documentElement.clientHeight;
    jumpright.style.height=ch1+"px";
    gouwuli.onmouseover=function(){
        gouwu.setAttribute("src","img/yougouwuche2.png");
        
    }
    gouwuli.onmouseout=function(){
        gouwu.setAttribute("src","img/yougouwuche.png");

    }
    //钱币
    var qianbibox=$(".qianbibox");
    var qianbi=$(".qianbi");
    var huiding=$("#huiding");
    for(var i=0;i<qianbibox.length;i++){
    qianbibox[i].index=i;
    qianbibox[i].onmouseover=function(){
    qianbi[this.index].style.display="block";
    animate(qianbi[this.index],{right:28},400)
    }

    qianbibox[i].onmouseout=function(){
        //for(var p=0;p<qianbibox.length;p++){
            // qianbibox[p].style.backgroundColor="black";
            //qianbi[p].style.marginLeft=0;
        //}
   // qianbibox[this.index].style.backgroundColor="red";
      
    animate(qianbi[this.index],{right:35},400,Tween.Cubic.easeInOut);
    qianbi[this.index].style.display="none";
    }




   }
  
  huiding.onclick=function(){
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    animate(obj,{scrollTop:0});
  }

    /*for(var i=4;i<youceyd.length;i++){
        youceyd[i].index=i;
        youceyd[i].onmouseover=function(){
            for(var j=0;j<qianbi.length;j++){
                animate(qianbi[j],{left:10},600)
                qianbi[j].style.display="none";
            }
            qianbi[this.index-4].style.display="block"; 
        }
        youceyd[i].onmouseout=function(){
            qianbi[this.index-4].style.display="none";
        }
           
    }
    */

    //楼层右侧图片左移
    function moveleft(aa){
    var moveleft=$(".moveleft")[aa];
    var moveimg=$(".moveimg",moveleft);
    for(var i=0;i<moveimg.length;i++){
        moveimg[i].index=i;
        moveimg[i].onmouseover=function(){
            moveimg[this.index].style.cssText="position:relative;left:-3px;"
        }
        moveimg[i].onmouseout=function(){
            moveimg[this.index].style.cssText="position:relative;left:0px;" 
        }
        
      }
    }
   /* moveleft(0);*/
    for(var i=0;i<6;i++){
        moveleft(i);
    }



    //按需加载  详情151-163行
    /*var floorjia=$(".floor");
    var ch=document.documentElement.clientHeight;
    window.onscroll=function(){
    var scrollT=getScrollT();
    document.title=scrollT;
    for(var i=0;i<floorjia.length;i++){
       if(floorjia[i].offsetTop<ch+scrollT){//当前楼层到顶部的高度，如果小于页面内容超出浏览器的距离加上浏览器的距离时
        var imgsjia=$("img",floorjia[i]);//获取当前楼层的所有图片
        for(var j=0;j<imgsjia.length;j++){//遍历图片
            imgsjia[j].src=imgsjia[j].getAttribute("bb");
            //aa属性的值赋值给src
        }
       
       }
      }
    }*/

    //下拉列表
    var yiji=$(".yiji");
    var erjibox=$(".erjibox");
    var jiantou=$(".jiantou");
    for(var i=0;i<yiji.length;i++){
        yiji[i].index=i;
       hover(yiji[i],function(){
            var lis=$("li",erjibox[this.index]);
            var h=lis[0].offsetHeight;
            erjibox[this.index].style.height=0+"px";
            animate(erjibox[this.index],{height:lis.length*h},600,Tween.Linear);
            jiantou[this.index].style.cssText="transform:rotate(-180deg);transition:all 1s easeInOut;";
        },function(){
            animate(erjibox[this.index],{height:0},600,Tween.Linear);
            jiantou[this.index].style.cssText="transform:rotate(0deg);transition:all 1s ease;";  
        })
  
        }
    var erjisj=$(".erjisj")[0];
    var erjishouji=$(".erjishouji")[0];
    erjisj.onmouseover=function(){
        erjishouji.style.display="block";
    }
    erjisj.onmouseout=function(){
        erjishouji.style.display="none";
    }
         /*yiji[i].onmouseover=function(){
            for(var j=0;j<erjibox.length;j++){
                erjibox[j].style.display="none";
            }
            erjibox[this.index].style.display="block";
        }
        yiji[i].onmouseout=function(){
            for(var j=0;j<erjibox.length;j++){
                erjibox[j].style.display="none";
            }
          }
*/
        /*/*var p=$("p",yiji)[0];
    p.onmouseover=function(){
           erjibox.style.display="block";
    }
    p.onmouseout=function(){
           erjibox.style.display="none";
    }
*/


}

