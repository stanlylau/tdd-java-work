var path = require('path');

var tddPath = process.env.HOMEPATH + path.sep + 'tdd-java';
var eclipseWorkspacePath = "C:" + process.env.HOMEPATH + path.sep + 'workspace';
var exercisesPath = __dirname + path.sep + 'exercises';


task('clean-tdd-java', function (params) {
  jake.rmRf(tddPath);
});

task('install-tdd-java', ['clean-tdd-java'], function (params) {
  jake.mkdirP(tddPath);
  jake.cpR(exercisesPath + path.sep + 'TicTacToe', eclipseWorkspacePath);
  jake.cpR(exercisesPath + path.sep + 'Trivia', eclipseWorkspacePath);
  
  // eclipse win64 https://docs.google.com/a/odd-e.com/uc?export=download&confirm=kIup&id=0B6720ltL_325Q053T1U3RGZTdzA
  // eclipse ubuntu https://drive.google.com/a/odd-e.com/uc?export=download&confirm=8n9k&id=0B6720ltL_325eDJLLVVaXzlWbm8
});