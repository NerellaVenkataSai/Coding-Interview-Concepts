function dartGame(score, ip) {
    console.log(ip)
    let gameStarted = false, gameBusted = false, finalScore ;
   for( let i=0; i< ip.length; i=i+3) {
       const ipp = ip.slice(i,i+3);
       //console.log(ipp)
       !gameBusted && score>0 && ipp.forEach((tr, index)=>{
         if(!gameStarted && tr.match(/^D/)) {
          gameStarted = true
          }
          if(gameStarted) {
          //console.log(throwConverter(tr))
              score = score - throwConverter(tr)
          }
         
          if( gameStarted && (score == 0 || score == 1 || score < 0) && !tr.match(/^D/)) {
          gameBusted = true;
              return;
          }
       });
       !gameBusted && (finalScore = score);
   }
   console.log('finalScore',finalScore)
}

function throwConverter(tr) {
 let trScore = 0;
  if(tr.match(/^T/)) {
    const num = tr.match(/\d+/)
    if(num) {
    trScore = Number(num) *3
    }
  } else if(tr.match(/^D/)) {
  const num = tr.match(/\d+/)
    if(num) {
    trScore = Number(num) *2
    } else {
    trScore = 50
    }
  } else if(tr.match(/^S/)) {
  const num = tr.match(/\d+/)
    if(num) {
    trScore = Number(num)
    } else {
    trScore = 25
    }
  } else if(tr.match(/^\d+$/)) {
  const num = tr.match(/\d+/)
     trScore = Number(num)
  }
  return trScore;
}

// 1. Code RUN automatically: type your name
dartGame(301, ["D10", "T2", "18", "17", "D19", "5"])
dartGame(301,["D20", "T20", "T20", "T20", "T10", "1", "T17", "0" , "0"])
dartGame(301,["D20", "T20", "T20", "T20", "T10", "1", "1", "T17" , "0", "11", "0", "0"])
dartGame(301,["D20", "T20", "T20", "T20", "T10", "1", "20", "15", "0" , "T5"])
dartGame(301,["D20", "T20", "T20", "T20", "T10", "1", "20", "15", "0" , "T5", "15"])
dartGame(301,["D20", "T20", "T20", "T20", "T10", "1", "20", "5", "0", "SB"])
dartGame(301,["D20", "T20", "T20", "T20", "T10", "1", "T10", "D10"])
dartGame(301,["17", "T2", "17", "18", "17", "D19", "5"])
dartGame(301,["D20", "T20", "T20", "T20", "T10", "1", "DB"])