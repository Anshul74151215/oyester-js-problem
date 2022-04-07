function migratoryBirds(arr) {

    //use map for count occurence
    let seenBirds = {}
    arr.forEach((bird) => {
        if(!seenBirds[bird]){
            seenBirds[bird] = 1
        }else{
            seenBirds[bird]++
        }
    })
    
    //to check min and max occurence
    let min = Number.MAX_VALUE, max = Number.MIN_VALUE
    let maxId=0, minId = 0
    for(let key in seenBirds){
        //if it is seen more?
        if(seenBirds[key]>max){
            max = seenBirds[key]
            maxId = key
        }
        else if(seenBirds[key]<min){
            min = seenBirds[key]
            minId = key
        }
        //handling same number of occurence
        else if(seenBirds[key] == max){
            if(maxId > key)
                maxId = key
        }
        else{
            if(minId > key)
                minId = key
        }
    }
    //returning array [maxOccur, minOccur]
    return [maxId, minId]
}


let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
console.log(migratoryBirds(arr))
