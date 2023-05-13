input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    dice = randint(1, 7)
    basic.showNumber(dice)
    if (dice == 1) {
        music.playMelody("C - - - - - - - ", 120)
    }
    if (dice == 2) {
        music.playMelody("- D - - - - - - ", 120)
    }
    if (dice == 3) {
        music.playMelody("- - E - - - - - ", 120)
    }
    if (dice == 4) {
        music.playMelody("- - - F - - - - ", 120)
    }
    if (dice == 5) {
        music.playMelody("- - - - G - - - ", 120)
    }
    if (dice == 6) {
        music.playMelody("- - - - - A - - ", 120)
    }
    if (dice == 7) {
        music.playMelody("- - - - - - B - ", 120)
    }
})
let dice = 0
basic.showString("sing")
