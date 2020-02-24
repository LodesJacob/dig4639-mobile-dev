const simpleArray = [5, 3, 4, 2, 6]
const objLiteral = { a: 5, b: 6 }

console.log('simpleArray is %o', simpleArray)
console.log('objLiteral is %o', objLiteral)

/**
 * objects %o or %0
 * integers %d or %i
 * strings %s
 * floats %f
 */

// traditional
let sum = 0
for (const item of simpleArray) {
  sum += item
}
console.log('sum is %i', sum)

// new array
const newArray = []
for (const item of simpleArray) {
  newArray.push(item + 2)
}
console.log('newArray is %o', newArray)

// create new array using map
function addTwo (value) {
  return value + 2
}
const newArray2 = newArray.map(addTwo)
console.log('newArray2 is %o', newArray2)

// create new array using map
const newArray3 = newArray.map((value) => value + 3)
console.log('newArray3 is %o', newArray3)

// modified array
for (let i = 0; i < simpleArray.length; i++) {
  simpleArray[i] += 2
}
console.log('simpleArray is now %o', simpleArray)

// filtered array
const filteredArray = []
for (let i = 0; i < simpleArray.length; i++) {
  if (simpleArray[i] % 2 === 0) {
    filteredArray.push(simpleArray[i])
  }
}
console.log('filteredArray is now %o', filteredArray)

const filteredArray2 = simpleArray.filter((value) => value % 2 === 0)
console.log('filteredArray2 is now %o', filteredArray2)

const todoList1 = [
  { completed: true, priority: 1, content: 'Complete demo' },
  { completed: true, priority: 2, content: 'Complete demo 2' },
  { completed: false, priority: 3, content: 'Complete demo 3' }
]

console.log(todoList1)
function printTodoList (todoList) {
  const elements = todoList.map((value) => {
    return `<p ${value.completed ? 'class="done"' : ''} priority="${value.priority}">
        ${value.content}
    </p>`
  })
  console.log(elements)
  return elements
}

const filteredTodoList = todoList1.filter((value) => value.completed)
printTodoList(filteredTodoList)

const sortedTodoList = todoList1.sort((a, b) => a.priority - b.priority)

printTodoList(todoList1)
printTodoList(sortedTodoList)
