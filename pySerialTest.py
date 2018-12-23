import time
import serial
ser = serial.Serial('/dev/ttyACM0', 9600)

time.sleep(2)
ser.write('1')
serial.close()
