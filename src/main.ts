console.log('we in thissss')

const canvas = document.getElementById('main-canvas') as HTMLCanvasElement

const ctx = canvas!.getContext('2d') as CanvasRenderingContext2D

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)

ctx.font = '24px serif'
ctx.fillStyle = 'white'
ctx.fillText('We In this', 24, 24)

// notes
// border type and color for pre-plays
  // needs to be turned on in menu
