function gradeResults(results) {
  if(!Array.isArray(results) || validateResults(results)) {
      return 'Please enter an array with scores of data type number between 0 - 100'
  }
  const grades = results.map(result => gradeResult(result))
  return grades
}

function validateResults(results) {
    const found = results.find(result => typeof result !== 'number' || (result > 100 || result < 0) )
    if (found) {
        return true
    }
    return false
}

function gradeResult(result) {
    if(result >= 80) {
        return 'A'
    } else if(result >= 70 && result <= 79) {
        return 'B'
    } else if(result >= 60 && result <= 69) {
        return 'C'
    } else if(result >= 50 && result <= 59) {
        return 'D'
    } else if(result < 40) {
        return 'F'
    }
}


module.exports = {
    gradeResults
}
