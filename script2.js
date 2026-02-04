// Part 1: Procedure
function dotProductProcedure(v1, v2, result) {
    result.ps = 0;
    const length = Math.min(v1.length, v2.length);
    
    for (let i = 0; i < length; i++) {
        result.ps += v1[i] * v2[i];
    }
}

// Part 2: Check orthogonality using procedure
function checkOrthogonalityWithProcedure(vectorPairs) {
    console.log("\n=== Using PROCEDURE ===\n");
    
    for (let i = 0; i < vectorPairs.length; i++) {
        const v1 = vectorPairs[i][0];
        const v2 = vectorPairs[i][1];
        const result = { ps: 0 };
        
        dotProductProcedure(v1, v2, result);
        
        console.log(`Pair ${i + 1}: [${v1}] · [${v2}] = ${result.ps}`);
        console.log(`  → ${result.ps === 0 ? 'ORTHOGONAL ✓' : 'NOT ORTHOGONAL ✗'}\n`);
    }
}

// Part 3: Function
function dotProductFunction(v1, v2) {
    let ps = 0;
    const length = Math.min(v1.length, v2.length);
    
    for (let i = 0; i < length; i++) {
        ps += v1[i] * v2[i];
    }
    
    return ps;
}

// Part 3: Check orthogonality using function
function checkOrthogonalityWithFunction(vectorPairs) {
    console.log("\n=== Using FUNCTION ===\n");
    
    for (let i = 0; i < vectorPairs.length; i++) {
        const v1 = vectorPairs[i][0];
        const v2 = vectorPairs[i][1];
        
        const ps = dotProductFunction(v1, v2);
        
        console.log(`Pair ${i + 1}: [${v1}] · [${v2}] = ${ps}`);
        console.log(`  → ${ps === 0 ? 'ORTHOGONAL ✓' : 'NOT ORTHOGONAL ✗'}\n`);
    }
}

// Test data: n pairs of vectors
const vectorPairs = [
    [[1, 2], [2, -1]],       // 1*2 + 2*(-1) = 0 → Orthogonal
    [[3, 4], [4, -3]],       // 3*4 + 4*(-3) = 0 → Orthogonal
    [[1, 0, 0], [0, 1, 0]],  // 0 → Orthogonal
    [[1, 2, 3], [4, 5, 6]],  // 32 → Not orthogonal
    [[2, 3], [-3, 2]],       // -6 + 6 = 0 → Orthogonal
    [[5, 0], [0, 5]]         // 0 → Orthogonal
];

// Run both versions
checkOrthogonalityWithProcedure(vectorPairs);
checkOrthogonalityWithFunction(vectorPairs);
```
