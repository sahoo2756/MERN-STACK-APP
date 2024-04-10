const arr = [1 , 2 , 3 , 4 , 15 , 10]


arr.some(number => {
    console.log(number)
    return number > 6
})

