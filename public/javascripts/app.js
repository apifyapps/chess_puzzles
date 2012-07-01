var puzzlesUrl = "http://apify.heroku.com/api/chess_puzzles_one.json?callback=?";
var puzzleNum = 1;
var maxPuzzleNum = 0;
var score = 0;
var puzzles = []
$(function(){
  $.getJSON(puzzlesUrl, function(data){
    puzzles = JSON.parse(data);
    //tempfix
    _.each(puzzles, function(puzzle){puzzle.solution = puzzle.solution.replace('x','');})
    maxPuzzleNum = puzzles.length;
    displayPuzzle();
  });

  function getRandomNumber(maxValue){
    return Math.floor(Math.random() * maxValue) + 1;
  }

  function displayPuzzle(){
    $('.puzzlenum').html(puzzleNum);
    $('.result').html('');
    var puzzle = puzzles[puzzleNum-1];
    $('#chessBoard').remove();
    $.fn.chess({
      type: 'fen',
      position: puzzle.fen,
      callback: function(move){
        if(move == puzzle.solution){
          won();
        } else {
          lost();
        }
      }
    });
    $('.instructions').html(puzzle.instructions);
  }

  function won(){
    displayScore(score+=100);
    $('.result').removeClass('won').removeClass('lost').addClass('won');
    $('.result').html('You won!!!');
  }

  function lost(){
    $('.result').removeClass('won').removeClass('lost').addClass('lost');
    $('.result').html('Try again! <a href="#" class="reset">Reset</a>')
  }

  function displayScore(){
    $('.points').html(score);
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

  $('.reset').live('click', function(){
    displayPuzzle();
  });

  $('#reset').click(function(){
    $('.result').html('');
  });

});