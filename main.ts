input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    dice = randint(1, 6)
    basic.showNumber(dice)
})
let dice = 0
basic.showString("Hello!")
