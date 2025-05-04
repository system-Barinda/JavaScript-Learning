function betterThanAverage(classPoints, yourPoints) {
    
    const total = classPoints.reduce((sum, score) => sum + score, 0);
    

    const average = (total + yourPoints) / (classPoints.length + 1);
    
    
    return yourPoints > average;
  }
  console.log(betterThanAverage([90, 95, 100], 85));
  