input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    pins.servoWritePin(AnalogPin.P1, 140)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    basic.pause(500)
    basic.clearScreen()
})
basic.forever(function () {
    if (input.lightLevel() <= 200) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        pins.analogWritePin(AnalogPin.P2, 1)
        basic.pause(5000)
        pins.analogWritePin(AnalogPin.P2, 0)
        music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        basic.clearScreen()
    }
})
