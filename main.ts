lcd.init_display(lcd.eDisplay.qwiic_16_2)
pins.wattmeter_reset()
loops.everyInterval(500, function () {
    lcd.write_text(0, 0, 3, pins.roundWithPrecision(pins.get_bus_voltage_V(), 2))
    lcd.write_text(0, 5, 5, lcd.lcd_text("V"))
    lcd.write_text(1, 0, 3, pins.get_current_mA())
    lcd.write_text(1, 5, 6, lcd.lcd_text("mA"))
})
