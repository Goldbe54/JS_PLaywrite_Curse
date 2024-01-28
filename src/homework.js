let correct = ['lethal','leter','letttttttr'];
let incorrect = ['banana','leter','lay'];

function commonText(strs) { 
    if (strs.length == 0) 
        return ""; 
 
    let keyWord = strs[0]; 
 
    for (let i = 1; i < strs.length; i++) { 
        while (strs[i].indexOf(keyWord) !== 0) { 
            keyWord = keyWord.substring(0, keyWord.length - 1); 
 
            if (keyWord === " ") 
                return "  "; 
        } 
    } 
    return keyWord; 
} 

commonText(correct);
commonText(incorrect);
