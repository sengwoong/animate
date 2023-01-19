
console.log("a");

class BGEffect{
    constructor(mHstml,rowB,columnsB){
      
        this.objBack=$('.ggang_effect');
        // 링크
        this.mHstml = mHstml;
        //값
        this.rowB = rowB;
        //오른쪽
        this.columnsB=columnsB;
        //위쪽
        this.rowHeight=100/rowB +'%';
        //개당크기
        this.columnsWidth = 100/columnsB +'%';
        //개당크기
    }
    
        get mHstml() {

            return `<div class ="img_box" style="width:`+this.columnsWidth+`; height:`+this.rowHeight+`;"`+this._mHtml+`>`+ `</div>`;
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
          let a ='';
          for(var i=0;  i<this.rowB; i++){

            // console.log('-행-:'+i);
            for(var j=0; j<this.columnsB; j++){
        
              a += this.mHstml
              // console.log('열:'+j);
            }
          }

        $(this.objBack).append(a);
        //console.log(this.objBack)
        console.log('makeHtml');
        console.log(a)
        console.log('obj');
        console.log(this.objBack)
        console.log("전체")
        console.log(	 $(this.objBack).append(a));
        console.log(this.mHstml);

        console.log("이미지찾기")
        console.log($(this.objBack).find('.img_box'))
        setTimeout(() => $(this.objBack).find('.img_box').addClass('active'),2000);
    
       
}}



// //반복
// for(i=0;i<BGEffet2.rowB;i++){
//     console.log("r");
//     for(j=0;j<BGEffet2.columnsB;j++){
//         console.log("c");
//     }
// }


console.log("makeclass");

$(function(){

  let BGEffet3 = new BGEffect(' ',4,8);
	BGEffet3.ggangImgEffect();

})
