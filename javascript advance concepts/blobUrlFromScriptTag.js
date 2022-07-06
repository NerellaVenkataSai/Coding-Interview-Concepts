var blob = new Blob([document.querySelector('#FindPrimes').textContent]); 
blobURL = window.URL.createObjectURL(blob);

<script id="FindPrimes" type="javascript/worker">
   
   onmessage = function(event) {  
     var primes = findPrimes(event.data.from, event.data.to);
     postMessage(
      {messageType: "PrimeList", data: primes}
     );
   };
   
   function findPrimes(fromNumber, toNumber) {
     // Create an array containing all integers between the two specified numbers.
     var list = [];
     for (var i=fromNumber; i<=toNumber; i++) {
       if (i>1) list.push(i);
     }
   
     // Test for primes.
     var maxDiv = Math.round(Math.sqrt(toNumber));
     var primes = [];
   
     var previousProgress;
   
     for (var i=0; i<list.length; i++) {
       var failed = false;
       for (var j=2; j<=maxDiv; j++) {
         if ((list[i] != j) && (list[i] % j == 0)) {
           failed = true;
         } else if ((j==maxDiv) && (failed == false)) {
           primes.push(list[i]);
         }
       }
   
       // Give a progress update.
       var progress = Math.round(i/list.length*100);
       if (progress != previousProgress) {
         postMessage(
          {messageType: "Progress", data: progress}
         );
         previousProgress = progress;   
       }
     }
   
     return primes;
   }
   
     </script>