function checkPrime(num) { 
              
    var n, i, flag = true; 
      
    n = num; 
    n = parseInt(n) ;
    for (i = 2; i <= n - 1; i++) {
        if (n % i == 0) { 
            flag = false; 
            break; 
        } }
          
    // Check and display output 
    if (flag == true) 
        console.log(n + " is prime"); 
    else
        console.log(n + " is not prime"); 

        return flag;

    }


    checkPrime(79);




    function isPrime(num) {
        if (num <= 1) return false; // negatives
        if (num % 2 == 0 && num > 2) return false; // even numbers
        let s = Math.sqrt(num); // store the square to loop faster
        for(let i = 3; i <= s; i++) { // start from 3, stop at the square, increment
            if(num % i === 0) return false; // modulo shows a divisor was found
        }
        return true;
      }

      console.log(isPrime(23));
      
      