function fakeBinary(num) {

    let first = [], last = ''; //let result=''

    for (var i = 0; i < num.length; i++) {
        if (num[i] >= 5) {
            first.push(1)         //result=result+0
            last += first[i]
        }

        else {
            first.push(0)         //result=result+1
            last += first[i]
        }
    }


    return last                    //result


}
console.log(fakeBinary('12367812'))//'00011100'