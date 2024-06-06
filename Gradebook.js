function getAverage(scores) {
  let score = 0;
  for (let i = 0; i<score.length; i++) {
    score += scores[i];
  }
  return score / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  if(getGrade(score) !== "F";){
    return true; 
  }
}

function studentMsg(totalScores, studentScore) {
  if(hasPassingGrade(studentScore)){
    return "Class average: "+getAverage(totalScores)+". Your grade: "+getGrade(studentScore)+ ". You passed the course."
  }
  else{
    return "Class average: "+getAverage(totalScores)+". Your grade: "+getGrade(studentScore)+ ". You failed the course."
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));


/*
Output: 
Class average: 71.7. Your grade: F. You failed the course.
*/
