$(document).ready(function(){
    $('.header-nav-link').click(function() {
        $('.header-nav-link').css({"color":""}); // �������� ��� ���� ������ �����
        $(this).css({"color":"#29abc7" });       // ������������� ��� ������� ����� ������
        $(this).css({"text-decoration":"none" });// � ���������� ���� � ���������
    });
    $('.header-logo-link').click(function() {
        $(this).css({"text-decoration":"none"}); //��� ������������� ����� ����� BisLite
    });
    $('.header-nav-item:has(i)').css({"margin-right":"0"}); //��������� ��������, ��� ���� �������
    // ����� ������� �������� Single Item
    $('.slider').slick({
        dots: true
    });
    // ����� ������� �������� Responsive Display
    $('.works-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
    //���-�� ������� � �����������
    // �� ����������
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
//--�����-���-�������-��������-���-����������-������--

$('.works-left').click(function(){
    $(".works-slider").slick('slickNext')
});
$('.works-right').click(function(){
    $(".works-slider").slick('slickPrev')
});
//��������� ������ ���� ������� div-�� � ������ �������� ������:
$("div.download-bottom").height(function(){
    return $("div.download-text").outerHeight()
});
// ��� �������� ��������� ������ ����� �� ������
$("div.mid-1").outerHeight(function(){
    return $("div.mid-2").outerHeight()
});
//����������� �������� ����
//��� ������� �� ���������
$(function(){
    $('.header-nav-list').slicknav({
        prependTo: '.header-nav',
        closedSymbol: '',
        openedSymbol: ''
    });
});








