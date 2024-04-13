for(let i=0; i<10;i++){ // 
    const esPar = i % 2 === 0
    if (esPar){
        continue
    }
    console.log(i)

    if(i === 7){
        break
    }
}