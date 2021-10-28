function tableMult(n) { 
    let x = [];
    for (let i = 0; i <= n; i++) {
        x[i] = [];
        for (let j = 0; j <= n; j++) {
            x[i][j] = i*j;
        }
    }
    console.table(x)
}
tableMult();