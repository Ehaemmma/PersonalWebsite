function startArrowAnimations(){
  let AnimationSpeed = options.speed * 3;
  $('.first.right').animate({
    left: '50%',
    opacity: 1
  },AnimationSpeed,function(){
    $('.first.right').css({left: '0', opacity:0})
  });
  $('.second.right').animate({
    left: '100%',
    opacity: 0
  },AnimationSpeed,function(){
    $('.second.right').css({left: '50%', opacity:1})
  });
  $('.first.left').animate({
    right: '50%',
    opacity: 1
  },AnimationSpeed,function(){
    $('.first.left').css({right: '0', opacity:0})
  });
  $('.second.left').animate({
    right: '100%',
    opacity: 0
  },AnimationSpeed,function(){
    $('.second.left').css({right: '50%', opacity:1});
    startArrowAnimations();
  });

}
