let proteção = 0
function alarmeOn () {
    for (let index = 0; index < 4; index++) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        basic.pause(1000)
    }
}
basic.forever(function () {
    proteção = pins.analogReadPin(AnalogPin.P0)
    if (proteção < 300) {
        pins.analogWritePin(AnalogPin.P1, 1023)
        alarmeOn()
    }
    if (proteção > 300) {
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.showIcon(IconNames.Happy)
        basic.showNumber(proteção)
    }
})
