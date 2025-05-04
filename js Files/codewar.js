function getGrade(s1, s2, s3) {
 
    const averageScore = (s1 + s2 + s3) / 3;
    
    
    if (averageScore >= 90 && averageScore <= 100) {
        return 'A';
    } else if (averageScore >= 80 && averageScore < 90) {
        return 'B';
    } else if (averageScore >= 70 && averageScore < 80) {
        return 'C';
    } else if (averageScore >= 60 && averageScore < 70) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log(getGrade(90,90,90));