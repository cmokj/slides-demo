// 初始化
$('.images > img:nth-child(1)').addClass('current');
$('.images > img:nth-child(2)').addClass('stay');
$('.images > img:nth-child(3)').addClass('stay');

// 移动过程
let n = 1;
function x(n) {
    if(n>3){
        n = n%3;
        if(n === 0) {
            n =3;
        }
    }
    return n;
}
setInterval(() => {
    $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
        .one('transitionend',(y) => {
            $(y.currentTarget).removeClass('leave').addClass('stay');
        })
    $(`.images > img:nth-child(${x(n+1)})`).removeClass('stay').addClass('current');
    n += 1;
    console.log(x(n));
},1000)

// setInterval(() => {
//     $('.images > img:nth-child(1)').removeClass('current').addClass('leave')
//         .one('transitionend',(y) => {
//             $(y.currentTarget).removeClass('leave').addClass('stay');
//         })
//     $('.images > img:nth-child(2)').removeClass('stay').addClass('current');
// },1000)
// setInterval(() => {
//     $('.images > img:nth-child(2)').removeClass('current').addClass('leave')
//         .one('transitionend',(y) => {
//             $(y.currentTarget).removeClass('leave').addClass('stay');
//         })
//     $('.images > img:nth-child(3)').removeClass('stay').addClass('current');
// },2000)
// setInterval(() => {
//     $('.images > img:nth-child(3)').removeClass('current').addClass('leave')
//         .one('transitionend',(y) => {
//             $(y.currentTarget).removeClass('leave').addClass('stay');
//         })
//     $('.images > img:nth-child(1)').removeClass('stay').addClass('current');
// },3000)
// setInterval(() => {
//     $('.images > img:nth-child(1)').removeClass('current').addClass('leave')
//         .one('transitionend',(y) => {
//             $(y.currentTarget).removeClass('leave').addClass('stay');
//         })
//     $('.images > img:nth-child(2)').removeClass('stay').addClass('current');
// },4000)