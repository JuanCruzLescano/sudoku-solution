function group(obj, index, item) {
  if (obj[index]) {
    obj[index].push(item)
  } else {
    obj[index] = [item]
  }
  return obj
} // Agrupa cada objeto correspondiente

function isValid(obj) {
  let valid = false
  Object.values(obj).forEach(objValue => {
    let tmp = objValue.reduce((acc, curr) => acc + curr)
    if (tmp === 45) {
      valid = true
    } else {
      valid = false
    }
  })
  return valid
} // Verifica si todas las propiedades de los objetos son validas.

function checkSudoku(board) {

  let row = {}
  let col = {}
  let box = {}

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let boardRowItem = board[i][j]
      let boardColItem = board[j][i]
      let boardBoxItem = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]

      group(row, i, boardRowItem)
      group(col, i, boardColItem)
      group(box, i, boardBoxItem)
    }
  }

  if (isValid(row) && isValid(col) && isValid(box)) {
    return 'Finished!'
  }
  return 'Try again!'
}

// ---------------------- TESTS --------------------

console.log(
  checkSudoku([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
) // Finished!

console.log(
  checkSudoku([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
  ])
) // Try again!

console.log(
  checkSudoku([
    [8, 3, 5, 4, 1, 6, 9, 2, 7],
    [2, 9, 6, 8, 5, 7, 4, 3, 1],
    [4, 1, 7, 2, 9, 3, 6, 5, 4],
    [5, 6, 9, 1, 3, 4, 7, 8, 2],
    [1, 2, 3, 6, 7, 8, 5, 4, 3],
    [7, 4, 8, 5, 2, 9, 1, 6, 5],
    [6, 5, 2, 7, 8, 1, 3, 9, 4],
    [9, 8, 1, 3, 4, 5, 2, 7, 8],
    [3, 7, 4, 9, 6, 2, 8, 1, 2],
  ])
) // Try again!

// Para correrlo: utilizar el comando "node sudoku.js" en la consola.