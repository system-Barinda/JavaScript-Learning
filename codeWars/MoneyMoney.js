function calculateYears(principal, interest, tax, desired) {
    let years = 0;

    while (principal < desired) {
        
        let yearlyInterest = principal * interest;

        
        let taxed = yearlyInterest * tax;

        
        let net = yearlyInterest - taxed;

       
        principal += net;

       
        years++;
    }

    return years;
}


console.log(calculateYears(1000.00, 0.05, 0.18, 1100.00)); // 3
