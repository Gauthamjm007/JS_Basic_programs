/*
Input

The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters
Output

Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.
Examples

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND

 */

function songDecoder(str) {
    let result = []
    str = str.split('WUB')
    str.forEach(function(strT) {
        if (strT != '') {
            result.push(strT)
        } else {}
    })
    console.log(result.join(' '))
    return result.join(' ')
}

function songDecoder1(song) {
    return song.replace(/(WUB)+/g, " ").trim()
}

function songDecoder2(song) {
    return song.split('WUB').filter(Boolean).join(' ');
}

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
songDecoder("AWUBBWUBC")
songDecoder("AWUBWUBWUBBWUBWUBWUBC")
songDecoder("WUBAWUBBWUBCWUB")