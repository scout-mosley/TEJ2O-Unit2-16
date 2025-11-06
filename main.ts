/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Scout Mosley
 * Created on: Oct 2025
 * This program uses the bluetooth radios
*/

// setup
let distance = sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.Centimeters)
radio.setGroup(67)
basic.showIcon(IconNames.Happy)
basic.showIcon(IconNames.Happy)

while(true){
    sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.Centimeters)
    if (distance < 10) {
    radio.sendString("TO CLOSE DUDE!")
    radio.sendNumber(distance)
}}
