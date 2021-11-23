input.onButtonPressed(Button.A, function () {
    WantToPass = 1
})
function ResetLight () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Yellow () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function Pass () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function Wait () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(200)
}
function Green () {
    pins.digitalWritePin(DigitalPin.P0, 1)
}
function Red () {
    pins.digitalWritePin(DigitalPin.P2, 1)
}
let Pieton = 0
let WantToPass = 0
let Time = 0
basic.forever(function () {
    Time += 0.025
    ResetLight()
    if (Time < 5) {
        Red()
        if (Pieton == 1) {
            if (Time < 4.75) {
                Pass()
            } else {
                Wait()
            }
        }
    } else if (Time < 8) {
        Green()
    } else if (Time < 10) {
        Yellow()
    } else {
        Time = 0
        if (WantToPass == 1) {
            Pieton = 1
            WantToPass = 0
        } else {
            Pieton = 0
        }
    }
})
