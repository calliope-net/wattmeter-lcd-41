lcd.init_display(lcd.eDisplay.qwiic_16_2)
pins.wattmeter_reset()
loops.everyInterval(500, function () {
    lcd.write_text(0, 0, 6, pins.get_bus_voltage_V(), lcd.eAlign.left)
    lcd.write_text(0, 7, 7, lcd.lcd_text("V"))
    lcd.write_text(0, 9, 12, pins.get_current_mA(), lcd.eAlign.right)
    lcd.write_text(0, 14, 15, lcd.lcd_text("mA"))
})
