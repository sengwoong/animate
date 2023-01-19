
console.log("a");

class BGEffect{
    constructor(rowB,columnsB,speed){
      
        this.objBack=$('.ggang_effect');
        // 링크
        
        //값
        this.rowB = rowB;
        //오른쪽
        this.columnsB=columnsB;
        //위쪽
        this.rowHeight=100/rowB +'%';
        //개당크기
        this.columnsWidth = 100/columnsB +'%';
        //개당크기
        this.delaySpeed ;
        //딜레이스피드
        this.speed = speed*100;
        // 이미지 가운데 정렬
        this.imgWidth = 100 * columnsB + '%';
	    this.imgHeight = 100 * rowB + '%';


    }
    
        get mHstml() {
            

            return ;
        }
 
        set mHstml(v){
          
                this._mHtml = v;
        }

        get rowB() {
            return this._rowB;
          }
        set rowB(v){
                this._rowB =v;
        }

        get columnsB() {
            return this._columnsB;
          }
        set columnsB(v){
                this._columnsB = v;
        }
   
        ggangImgEffect(){
          let a =' ';


          for(let i=0;  i<this.rowB; i++){

            // console.log('-행-:'+i);
            for(let j=0; j<this.columnsB; j++){
                let delaySpeed =  ((this.columnsB-j)-(i*0.5)*0.1);
              
                var left = -j*100 + '%';
                var top = -i*100 + '%';

                
              a += `<div class ="img_box" style="width:`+this.columnsWidth+`; height:`+this.rowHeight+'; transition-delay:'+ delaySpeed +'s; ">';
              a += '<div class="img_position" style="width:'+this.imgWidth+'; height:'+this.imgHeight +'; left:'+left+'; top:'+top+';"></div>';
              a += `</div>`
              // console.log('열:'+j);
            }
          }

        $(this.objBack).append(a);
        setTimeout(() =>$(this.objBack).find('.img_box').addClass('active'), this.speed);
        console.log("스피드")
        console.log(this.speed)
        //console.log(this.objBack)
        // console.log('makeHtml');
        // console.log(a)
        // console.log('obj');
        // console.log(this.objBack)
        // console.log("전체")
        // console.log(	 $(this.objBack).append(a));
        // console.log(this.mHstml);
        console.log("위치")
         console.log($(this.objBack))
	
        
        
        }
       
}

 let BGEffet2 = new BGEffect(4,8,1);

// //반복
// for(i=0;i<BGEffet2.rowB;i++){
//     console.log("r");
//     for(j=0;j<BGEffet2.columnsB;j++){
//         console.log("c");
//     }
// }


console.log("makeclass");

$(function(){

  let BGEffet3 = new BGEffect(4,8,1);
	BGEffet3.ggangImgEffect();

})
