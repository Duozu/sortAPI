
// sortAPI v1.0.0
// trashed by: Duozu
// Discord: Duozu#5050

// <script src="sortAPI.js"></script>

// Constructor Information
// sort(array, inverted, log, time);

// array | The array/list you want to be sorted.
// inverted | Should the list be inverted? | False = Ascending, True = Descending | False by default
// log | Should the progress of the sorting be logged into console? | For debugging. | False by default
// time | The interval in which steps are carried | Leave Blank | 0 by default

function sort(array, inverted=false, log=false, time=0){
    class Sorting {
        constructor(array){
            let pointer = 0;
            let fin = 2;
            this.array = array;
            setInterval(() => {
                if (this.array[pointer] < this.array[pointer + 1] || this.array[pointer] == this.array[pointer + 1]){
                    pointer += 1;
                    if (log == true){
                        console.log(this.array)
                        console.log("Passed");
                    }
                } else if (this.array[pointer] > this.array[pointer + 1]){
                    var temp = this.array[pointer + 1];
                    fin = 1;
                    this.array[pointer + 1] = this.array[pointer];
                    this.array[pointer] = temp;
                    if (log == true){
                        console.log(this.array);
                        console.log("Swapped");
                    }
                }
                if (pointer == this.array.length - 1){
                    if (fin == 1){
                        pointer = 0;
                        fin = 0;
                        if (log == true){
                            console.log("Restarting");
                        }
                    } else if (fin == 0){
                        if (inverted == true){
                            array.reverse();
                        }
                        if (log == true){
                            console.log("Finished Sorting");
                            console.log(array)
                        }
                        fin = 2; 
                    }
                }
            }, time);
        }
    }
    var array = new Sorting(array);
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

// Constructor Information
// jumble(array, cycles, time);

// array | The array/list you want to be sorted.
// cycles | Amount of times it randomizes the array | Doesn't do much
// time | The interval in which steps are carried | Leave Blank | 0 by default

function jumble(array, cycles=1, time=0){
    class Jumble {
        constructor(array){
            this.array = array;
            let pointer = this.array.length;
            for (let i = 0; i < cycles; i++){
                while (pointer != 0){
                    let randomIndex = Math.floor(Math.random()*pointer);
                    pointer--;
                    [this.array[pointer], this.array[randomIndex]] =
                    [this.array[randomIndex], this.array[pointer]];
                }
            }
            
        }
    }
    var array = new Jumble(array);
}
