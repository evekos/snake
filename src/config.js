const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const width = canvas.width
const height = canvas.height
const amountOfBlocks = 27
const blockSize = width / amountOfBlocks;
console.log(blockSize)
const widthInBlocks = width / blockSize
const heightInBlocks = height / blockSize
let score = 0
