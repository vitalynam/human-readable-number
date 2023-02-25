module.exports = function toReadable (number) {

    let sumToStr = number.toString();
    let arr = [];    // массив для чисел
    let result = []; // массив для чисел пропесью

    for(let i =0; i < sumToStr.length; i++){
        arr.push(sumToStr[i]);
    }

    if(arr.length == 1){
        if(arr[0] == 0){
            result.push('zero');
        }
    }
    if( arr.length == 3){
        if(arr[0] == 1){
            result.push('one hundred');
        }else if(arr[0] == 2){
            result.push('two hundred');
        }else if(arr[0] == 3){
            result.push('three hundred');
        }else if(arr[0] == 4){
            result.push('four hundred');
        }else if(arr[0] == 5){
            result.push('five hundred');
        }else if(arr[0] == 6){
            result.push('six hundred');
        }else if(arr[0] == 7){
            result.push('seven hundred');
        }else if(arr[0] == 8){
            result.push('eight hundred');
        }else if(arr[0] == 9){
            result.push('nine hundred');
        }
        arr.shift();
    };
    
    if( arr.length == 2){
        if(arr[0] == 1){
            if(arr[1] == 0){
                result.push('ten');
                arr.shift();
            }
            if(arr[1] == 1){
                result.push('eleven');
                arr.shift();
            }
            if(arr[1] == 2){
                result.push('twelve');
                arr.shift();
            }
            if(arr[1] == 3){
                result.push('thirteen');
                arr.shift();
            }
            if(arr[1] == 4){
                result.push('fourteen');
                arr.shift();
            }
            if(arr[1] == 5){
                result.push('fifteen');
                arr.shift();
            }
            if(arr[1] == 6){
                result.push('sixteen');
                arr.shift();
            }
            if(arr[1] == 7){
                result.push('seventeen');
                arr.shift();
            }if(arr[1] == 8){
                result.push('eighteen');
                arr.shift();
            }
            if(arr[1] == 9){
                result.push('nineteen');
                arr.shift();
            }
        }else if(arr[0] == 2){
            result.push('twenty');
        }else if(arr[0] == 3){
            result.push('thirty');
        }else if(arr[0] == 4){
            result.push('forty');
        }else if(arr[0] == 5){
            result.push('fifty');
        }else if(arr[0] == 6){
            result.push('sixty');
        }else if(arr[0] == 7){
            result.push('seventy');
        }else if(arr[0] == 8){
            result.push('eighty');
        }else if(arr[0] == 9){
            result.push('ninety');
        }
        arr.shift();
    };

    
    if( arr.length == 1){
        if(arr[0] == 1){
            result.push('one');
        }else if(arr[0] == 2){
            result.push('two');
        }else if(arr[0] == 3){
            result.push('three');
        }else if(arr[0] == 4){
            result.push('four');
        }else if(arr[0] == 5){
            result.push('five');
        }else if(arr[0] == 6){
            result.push('six');
        }else if(arr[0] == 7){
            result.push('seven');
        }else if(arr[0] == 8){
            result.push('eight');
        }else if(arr[0] == 9){
            result.push('nine');}
        // else if(arr[0] == 0){
        //     result.push('zero');
        // }
        arr.shift();
    };

    return result.join(' ');
}
