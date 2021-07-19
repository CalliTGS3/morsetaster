control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.analogWritePin(AnalogPin.C17, 1023)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.analogWritePin(AnalogPin.C17, 0)
})
pins.digitalWritePin(DigitalPin.P1, 0)
pins.analogWritePin(AnalogPin.C17, 1023)
