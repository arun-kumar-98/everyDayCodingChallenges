/**
 *
 *  #################################################
 *  #                    DAY-----1                  #
 *  #                 03-03-23                      #
 *  #################################################
 */

//  USING FOR LOOP
// NOT RECOMENDED

const myMums = [1, 2, 3, 4, 5];
//let sum = 0;
// for (let i = 0; i < myMums.length; i++) {
//   sum += myMums[i];
// }

//console.log(sum);

//===================================================//

//USING FOREACH LOOP'

// myMums.forEach((i) => {
//   sum += i;
// });

// console.log("forEach sum calculation " + sum);

//===============================================//

// USING  REDUCE
const sum = myMums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);
