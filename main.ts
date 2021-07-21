radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        basic.showIcon(IconNames.No)
    }
    if (receivedNumber == 1) {
        calliBot2.motor(C2Motor.beide, C2Dir.vorwärts, 50)
        basic.showIcon(IconNames.ArrowSouth)
    }
    if (receivedNumber == 2) {
        calliBot2.motor(C2Motor.beide, C2Dir.rückwärts, 50)
        basic.showIcon(IconNames.ArrowNorth)
    }
    if (receivedNumber == 3) {
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 50)
        calliBot2.motorStop(C2Motor.links, C2Stop.Bremsen)
        basic.showString("L")
    }
    if (receivedNumber == 4) {
        calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 50)
        calliBot2.motorStop(C2Motor.rechts, C2Stop.Bremsen)
        basic.showString("R")
    }
})
radio.setGroup(13)
