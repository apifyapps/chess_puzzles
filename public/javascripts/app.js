var puzzlesUrl = "";
var puzzleNum = 1;
var maxPuzzleNum = 10;
var score = 0;
var puzzles = [
  {fen: '4k3/R7/1R6/8/8/8/8/4K3', instructions: 'White to Move and Mate in One', solution: 'Rb8'},
  {fen: '4k3/R7/7R/8/8/8/8/4K3', instructions: 'White to Move and Mate in One', solution: 'Rh8'},
  {fen: '1R6/8/8/k6K/8/8/8/7R', instructions: 'White to Move and Mate in One', solution: 'Ra1'},
  {fen: '8/8/7R/8/k1K5/8/8/8', instructions: 'White to Move and Mate in One', solution: 'Ra6'},
  {fen: '7k/8/5RK1/8/8/8/8/8', instructions: 'White to Move and Mate in One', solution: 'Rf8'},
  {fen: '7R/8/8/8/8/1K6/8/1k6', instructions: 'White to Move and Mate in One', solution: 'Rh1'},
  {fen: '5k2/5ppp/8/8/8/8/5PPP/R3R1K1', instructions: 'White to Move and Mate in One', solution: 'Ra8'},
  {fen: 'R7/8/4K3/8/4k3/7R/8/8', instructions: 'White to Move and Mate in One', solution: 'Ra4'},
  {fen: '2k5/ppp5/8/8/8/8/8/3RR1K1', instructions: 'White to Move and Mate in One', solution: 'Re8'},
  {fen: '6k1/R6p/5PpK/8/3P4/2P5/1P6/4R3', instructions: 'White to Move and Mate in One', solution: 'Re8'}
]
$(function(){
  function getRandomNumber(maxValue){
    return Math.floor(Math.random() * maxValue) + 1;
  }

  $('#board').chess({
    type: 'fen',
    position: '4k3/R7/7R/8/8/8/8/4K3'
  });
  displayPuzzle();
  
  function displayPuzzle(){
    $('.puzzlenum').html(puzzleNum);
    $('.result').html('');
    var puzzle = puzzles[puzzleNum-1];
    $('#chessBoard').remove();
    $.fn.chess({
      type: 'fen',
      position: puzzle.fen
    });
    $('.instructions').html(puzzle.instructions);
  }

  $('#prev').click(function(){
    if(puzzleNum > 1){
      puzzleNum -= 1;
      displayPuzzle();
    }
  });
  $('#next').click(function(){
    if(puzzleNum < maxPuzzleNum){
      puzzleNum += 1;
      displayPuzzle();
    }
  });
  $('#random').click(function(){
    puzzleNum = getRandomNumber(maxPuzzleNum);
    displayPuzzle();
  });
  $('#reset').click(function(){
    $('.result').html('');
  });

});