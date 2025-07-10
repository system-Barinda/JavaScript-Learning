function duplicateCount(text) {
    const lowerText = text.toLowerCase();
    const count = {};
    let duplicates = 0;

    for (const char of lowerText) {
        count[char] = (count[char] || 0) + 1;
    }

    for (const char in count) {
        if (count[char] > 1) {
            duplicates++;
        }
    }

    return duplicates;
}
console.log(duplicateCount('bbarindaa'))