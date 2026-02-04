function sumOfDistinctElements(set1, set2) {
    let sum = 0;
    
    // Create arrays to track which elements are distinct
    const countMap = {};
    
    // Count occurrences of each element in set1
    for (let i = 0; i < set1.length; i++) {
        if (countMap[set1[i]] === undefined) {
            countMap[set1[i]] = 1;
        } else {
            countMap[set1[i]]++;
        }
    }
    
    // Count occurrences of each element in set2
    for (let i = 0; i < set2.length; i++) {
        if (countMap[set2[i]] === undefined) {
            countMap[set2[i]] = 1;
        } else {
            countMap[set2[i]]++;
        }
    }
    
    // Sum elements that appear exactly once across both sets
    for (let key in countMap) {
        if (countMap[key] === 1) {
            sum += parseInt(key);
        }
    }
    
    return sum;
}

// Test with the example
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

const result = sumOfDistinctElements(set1, set2);
console.log(`Set 1: [${set1}]`);
console.log(`Set 2: [${set2}]`);
console.log(`Sum of distinct elements: ${result}`);