'use strict';

{
  let n = 0;
  const maou = document.getElementById('maou');
  const hime = document.getElementById('hime');
  const btn = document.querySelector('button')
  const cmt = document.getElementById('comment')

  btn.addEventListener('click', () => {
   n++;
   if(n >= 5) {
   hime.classList.remove('inactive');
   maou.classList.add('inactive');
   cmt.textContent = "魔王を倒し、お姫様を救出しました。ゲームクリア！！その後、勇者はお姫様と結婚し、幸せに暮らしました。"
   }
   life.textContent = 5 - n;
});
}