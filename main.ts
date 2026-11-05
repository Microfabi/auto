input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
    servos.P0.run(80)
    servos.P1.run(20)
})
radio.onReceivedNumber(function (receivedNumber) {
    servos.P0.run(20)
    servos.P1.run(80)
})
input.onButtonPressed(Button.A, function () {
    servos.P0.run(0)
    servos.P1.run(0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.setGroup(1)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.run(100)
    servos.P1.run(100)
})
music.play(music.stringPlayable("C D D E E F E G ", 90), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("F E F D D C C - ", 90), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    # . . . #
    . . . . .
    # . . . #
    . . . . .
    `)
basic.showLeds(`
    . # . # .
    # . . . #
    # . . . #
    # . . . #
    . # . # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # # . # #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # # . # #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # . # .
    # . . . #
    # . . . #
    # . . . #
    . # . # .
    `)
basic.showLeds(`
    . . . . .
    # . . . #
    . . . . .
    # . . . #
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
