var array = []
array[(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)]

function impar(array) {
  var sumimp = 0
  for (i = 0; i < array.length; i++) {
    If(array[i] % 2 > 0)
    sumimp = sumimp + array[i]
  }
  console.log(sumimp)
}
