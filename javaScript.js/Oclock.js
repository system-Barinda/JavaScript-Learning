function past(h,m,s){
    if(
        typeof h !== 'number' || typeof m !== 'number' || typeof s !== 'number' ||
        h < 0 || m < 0 || s < 0 ||
        h > 23 || m > 59 || s > 59


    )
    {
        throw new Error("Invalid input: hours (0–23), minutes (0–59), and seconds (0–59) must be non-negative integers.");

    }
    else{
        return ((h * 3600) + (m * 60) + s) * 1000;
    }
}
console.log(past(23,1,1));