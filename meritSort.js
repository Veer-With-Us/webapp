const meritSort = (merits, sequences) => {
  let output =[[],[]];
  merits.forEach((item) => {
    item.public ? output[0].push(item) : output[1].push(item);
  })

  let sortSubroutine = (arr, sequence, rounds) => {
    if (rounds < 0){
      arr.sort((x,y) => {
        x = x.title ? x.title.toLowerCase() : x[0].title.toLowerCase();
        y = y.title ? y.title.toLowerCase() : y[0].title.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      return arr;
    }
    let sorted = [];
    for (var i=0; i<sequence[rounds].length; i++){
      let index = -1;
      for (var j=0; j<arr.length; j++){
        if (arr[j].id === sequence[rounds][i]){
          index = j;
          break;
        }
      }
      index >= 0 ? sorted.push(arr.splice(index, 1)) : null;
    }
    if (sorted.length > 0){
      arr.push(sorted.reduce((a,b) => a.concat(b)));
    }
    return sortSubroutine(arr, sequence, rounds-1);
  };

  output[0] = sortSubroutine(output[0], sequences, sequences.length-1);
  output[1] = sortSubroutine(output[1], sequences, sequences.length-1);

  return output[0].concat(output[1]).reduce((a,b) => a.concat(b), [])
}

/* This merit sorting function uses a recursive subroutine to group together the merits that form sequences. 
First on lines 2-5 public and private merits are separated.
The subroutine, where most of the logic resides, starts on line 7.
Line 8-15 is the base case. Once items from many sequences are grouped, they are sorted alphabetically, either by the title of the object outside of a group, or the title of the object at the 0th index of a sequence. 
Line 17-26 is where merits that form a sequence are identified and separated. The sorted array is then pushed back into the main array, arr. 
On line 30 sortSubroutine is called again, either moving onto the next sequence or reaching the base case.
Lines 33 and 34 is where sortSubroutine is invoked on the public merits and private merits.
Then on line 36 the public merits are concatenated with the private merits, and reduce is used to flatten everything into a single array. */
