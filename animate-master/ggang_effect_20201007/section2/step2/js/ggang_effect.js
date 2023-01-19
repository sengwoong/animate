
console.log("a");
//타입스크립트로 transform_origin String
//클래스 기본값 설정
class BGEffect{
    constructor(objBack,rowB,columnsB,speed,transform_origin,translateX,sclae,skew,rotate){
      //태그
   
        this.objBack= objBack;
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
        //여러효과만들기
        this.transform_origin=transform_origin;
        this.setStyle =`transform:translateX(`+translateX+`%) scale(`+sclae+`) skew(`+skew+`deg) rotate(`+rotate+`deg);`
        this.translateX = translateX;
        this.sclae = sclae;
        this.skew = skew;
        this.rotate = rotate;
        //효과설정하기


        // var 인스큐 = 'transform:skew(40deg);';
        // var 인스케얼 = 'transform:scale(0.2);';
        // var 인로테이트 = 'transform:rotate(90deg);';
    
        // var 인라이트 = 'transform:translateX(100%);';
        // var 인맥스 = 'transform:translateX(100%) scale(0.2) skew(40deg) rotate(90deg);';
        // var 강이팩 = 'transform:scale(0.2) skew(40deg) rotate(90deg);';


    }
        get TranslateX() {
          return this.translateX;
        }
        get Sclae() {
          return this.sclae;
        }
        get Skew() {
          return this.skew;
        }
        get Rotate() {
          return this.rotate;
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

              
              a += `<div class ="img_box" style="transform-origin:`+this.transform_origin+`; `+this.setStyle+` ;width:`+this.columnsWidth+`; height:`+this.rowHeight+'; transition-delay:'+ delaySpeed +'s; ">';
              a += '<div class="img_position" style="width:'+this.imgWidth+'; height:'+this.imgHeight +'; left:'+left+'; top:'+top+';"></div>';
              a += `</div>`
              // console.log('열:'+j);
            }
          }
          console.log(a);

          //찾은태그적용
        $(this.objBack).append(a);

        //딜레이
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
         console.log($(this.objBack[0]))
         console.log($(this.objBack[1]))
        
        
        }
       
}

 //let BGEffet2 = new BGEffect(4,8,1,0,0.2,40,90);

// //반복
// for(i=0;i<BGEffet2.rowB;i++){
//     console.log("r");
//     for(j=0;j<BGEffet2.columnsB;j++){
//         console.log("c");
//     }
// }


console.log("makeclass");

$(function(){
 // let BGEffet2 = new BGEffect(4,8,1,0,0.2,40,90);
 let BGEffet3= new BGEffect($('.ggang_effect2'),4,8,1,"center",0,0.2,40,90);
 BGEffet3.ggangImgEffect(); //프로그램 시작


  let BGEffet2 = new BGEffect($('.ggang_effect'),4,8,1,"center",100,0,0,0);
	BGEffet2.ggangImgEffect(); //프로그램 시작
 
});
