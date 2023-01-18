/*
****** 2020 깡코딩 LICENSE 안내 ******
이 프로그램은 저작권법의 보호를 받습니다.
이 프로그램의 로직과 수식의 저작권은 깡코딩에 있음을 알려드립니다.
이 프로그램은 깡코딩 강의를 수강한 수강생들에게 무료로 제공됩니다.
이 프로그램에서 사용된 오픈소스 slick js, jquery는 해당 개발사의 무료 license 규정를 따릅니다.(해당 사이트 참고)
이 프로그램은 웹,앱 프로젝트에 자유롭게 사용할 수 있지만
웹사이트, 커뮤니티, 블로그에 배포하거나 인터넷 강의, 유튜브등 유료 무료 강좌에 배포, 사용하는
행위는 민사 및 형사법에 의해 엄격히 규제되어 있으며, 기소 사유가 됩니다.
 */

/**
* 함수명 : ggangImgEffect
* 역할 : 이펙트를 생성
* 매개변수 : -
* 히스토리 : -
*/

function ggangImgEffect(){


}

$(function(){

	$('.test_slider').slick({ //슬라이드 생성 필수옵션
	  infinite: false, //인덱스
	  useCSS:false, //css전환 비활성화
	  speed:0, //슬라이드 모션을 동작하지 않도록함
	  slidesToShow: 1 //보여질 갯수는 1로 설정
	});

	$('.test_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){

	});

	ggangImgEffect(); // 최초 처음실행

});












