function reverseColumns(arr)
    {
        for (let i = 0; i < C; i++) {
            for (let j = 0, k = C - 1; j < k; j++, k--) {
                t = arr[j][i];
                arr[j][i] = arr[k][i];
                arr[k][i] = t;
            }
        }
    }