let x = 0
let y = 0
let offset = 0
loops.everyInterval(200, function () {
    led.toggle(x, y)
    if (y == offset && x < 4 - offset) {
        x += 1
    } else if (x == 4 - offset && y < 4 - offset) {
        y += 1
    } else if (y == 4 - offset && x > offset) {
        x += 0 - 1
    } else if (x == offset && y > offset) {
        y += 0 - 1
    }
    if (x == offset && y == offset) {
        offset += 1
        x = offset
        y = offset
    }
    if (offset == 3) {
        offset = 0
        x = 0
        y = 0
    }
})
