
    function duplicates(str){
        let dupArr=[];
        let seen=[];
        for(let eachchar of str){
            if(!dupArr.includes(eachchar)){
                dupArr.push(eachchar)
            }
            else{
                seen.push(eachchar)
            }
        }
        return [seen,dupArr];

    }
    console.log(duplicates("Soorya"));
