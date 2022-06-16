function findPlatforms() {
    const arr = [10, 14, 19, 23].sort((a, b) => a - b);
    const dep = [17, 23, 25, 27].sort((a, b) => a - b);
    console.log(arr, dep);
  
    let p = 1;
    let a = 1;
    let d = 0;
    let e = arr.length;
  
    while (a < e && d < e) {
      if (arr[a] <= dep[d]) {
        p++;
        a++;
      }
      else if (arr[a] > dep[d]) {
        p--;
        d++;
      }
      console.log(p)
    }
    console.log(p);
    return p;
  }
  
  findPlatforms();