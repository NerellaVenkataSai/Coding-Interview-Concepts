str='ewew r rrfvfvr';str1=str[0].toUpperCase();
for (var i=1 ;i< str.length;i++) {
    if( str[i -1] === ' ') { 
        str1 += str[i].toUpperCase()
        console.log(str[i], str[i+1], str[i+1].toUpperCase());
    } else {
        str1 += str[i];
    }
}