var score,round_score,active_player;

reset_func();
document.querySelector('.btn-roll').addEventListener('click',function(){
  if(gamePlaying){


  // fl0or make the number as integer
  dice=Math.floor(Math.random()*6)+1;
  var diceDom= document.querySelector('.dice');
  diceDom.style.display='block';
  diceDom.src = 'dice-'+dice+'.png';
  document.querySelector('#current-'+ active_player).textContent = dice;
  var x = document.querySelector('#score-0').textContent;
  if (dice>1){
    //add scores
    round_score+=dice;
    document.getElementById('current-'+active_player).textContent=round_score;
  }else{

    nextPlayer();

  }}
});
function nextPlayer(){

  //next player
  if (active_player==0) {
    round_score=0;
    active_player++;

  }else{
    active_player--;
    round_score=0;
  }
  document.getElementById('current-'+active_player).textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}
document.querySelector('.btn-hold').addEventListener('click',function (){
  if(gamePlaying){


  document.getElementById('current-'+active_player).textContent = '0';
  scores[active_player] += round_score;
  if(scores[active_player]>=20){
    document.querySelector('#name-'+ active_player).textContent = "Winner!"
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-'+active_player+'-panel').classList.add('winner');
    document.querySelector('.player-'+active_player+'-panel').classList.remove('active');
    document.querySelector('#score-'+ active_player).textContent=scores[active_player];
    gamePlaying=false;

  }else{
    round_score=0;
    document.querySelector('#score-'+ active_player).textContent=scores[active_player];
    nextPlayer();
  }}


});
function reset_func(){
  scores= [0,0];
  round_score=0;
  active_player=0;
  gamePlaying=true;
  // fl0or make the number as integer

  document.getElementById('score-0').textContent='0';
  document.getElementById('score-1').textContent='0';
  document.getElementById('current-0').textContent='0';
  document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent = "Player1";
document.getElementById('name-1').textContent = "Player2";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');

      document.querySelector('.player-1-panel').classList.remove('active');
      document.querySelector('.player-0-panel').classList.add('active');
  //hide the dice from the web
  document.querySelector('.dice').style.display='none';
}
document.querySelector('.btn-new').addEventListener('click',reset_func);
