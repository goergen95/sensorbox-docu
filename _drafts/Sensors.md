# Sensors

Here you will find some information on the different sensors we used in the implementation of the Sensorbox. Of course, other sensors for measuring the same or even other environmental variables could be used as well. The listed sensors were chosen due to their low prices but also because they measure the variables of interest to us accurately. For the microphone we tested two different versions, one significantly more expensive than the other one. If the quality of the records of the cheaper microphone would prove well enough, costs could be reduced.



### Camera

------



<span class="image main"><img src="images/cam.jpg" alt="" /></span>

#### Manufacturer product description:

Raspberry Pi Camera Module v2.1

#### Technical product information:

- Sensor: Sony IMX219 8 Megapixel sensor
- Supported formats: 1080p@30Hz, 720p@60Hz and 640x480p@60/90Hz 
- Ribbon cable for CSI-port : 30 cm
- Dimensions: 25x24x9 (mm, HxWxL)

#### Manufacturer information:

[Raspberry Pi foundation](https://www.raspberrypi.org/products/camera-module-v2/)

Depending on your local retailer available for about 26 €

#### Sensor usage:

The camera is used to monitor the canopy from below crown surface. The collected data can be used to calculate the greenness-index to compare it with UAV generated aerial RGB-images. Further it can be used to monitor vegetational growth and animal wildlife detection.







### Microphone - expensive version

------

<span class="image main"><img src="images/micro1.jpg" alt="" /></span>

#### Manufacturer product description:

RØDE - Smartlav+

#### Technical product information:

- Microphone type: pressure gradient
- Transmission range: 20Hz to 20kHz
- Output impedance: 0Ω
- Sensitivity: -32.0dB re 1 Volt/Pascal (25.50mV @ 94 dB SPL) +/- 2 dB @ 1kHz
- Dimensions: 118x4.50x4.50 (mm; HxWxD)

#### Retailer information:

[RØDE Microphones](http://www.rode.com/microphones/smartlav)

Available for approximately 50€

#### Sensor usage:

The microphone is used to record the singing of birds. This data can be used by a machine learning algorithm to identify bird species. Bird species are an important indicator for biodiversity in forest ecosystems.

In the first stage of development two different models of microphones are tested to evaluate if a cheaper microphone is also suitable for bird species identification.







### Microphone - cheap version

------

<span class="image main"><img src="images/micro2.jpg" alt="" /></span>

#### Manufacturer product description:

Foxnovo SF-555

#### Technical product information:

- Microphone type: condenser
- Transmission range: 50Hz to 16kHz
- Output impedance: <2.2Ω
- Sensitivity: -55.0dB  +/- 2 dB @ 1kHz
- Dimensions: 67x12x14 (mm; HxWxD)

#### Retailer information:

[Purchased at Amazon](https://www.amazon.de/Foxnovo-Portable-USB-2-0-Kondensator-Mikrofon-Chat/dp/B00XA01IQC)

Available for approximately 10€.

#### Sensor usage:

The microphone is used to record the singing of birds. This data can be used by a machine learning algorithm to identify bird species. Bird species are an important indicator for biodiversity in forest ecosystems.

In the first stage of development two different models of microphones are tested to evaluate if a cheaper microphone is also suitable for bird species identification.







### Temperature & Humidity Sensor

------

<span class="image main"><img src="images/temp.jpg" alt="" /></span>

#### Manufacturer product description:

DHT22 (AM2302) temperature-humidity sensor

#### Technical product information:

- Operating voltage: 3-5V
- Sensitivity humidity: 0-100% ± 2-5% 
- Sensitivity temperature: -40-80°C ±0.5°C
- Dimensions: 15.1x25x7.7 (mm, HxBxD)

#### Manufacturer information:

[Adafruit](<https://www.adafruit.com/product/385>)

Depending on your local retailer available for about 10 €

#### Sensor usage:

The temperature and humidity sensor is used to measure micro-climatic data. The lift-system allows to collect the data in a vertical range for advanced climatic modelling.







### Light Sensor

------

<span class="image main"><img src="images/light.jpg" alt="" /></span>

#### Manufacturer product description:

Adafruit TSL2591 High Dynamic Range Digital Light Sensor

#### Technical product information:

- Sensitivity: 188 uLux sensitivity, up to 88,000 Lux input measurements.
- Temperature range: -30 to 80 °C
- Operating voltage: 3.3-5V 
- Dimensions: 19x16x1(mm, HxBxD)

#### Retailer information:

[Adafruit](<https://www.adafruit.com/product/1980>)

Depending on your local retailer available for about 6 €

#### Sensor usage:

The digital light sensor gathers information about the light intensity in the visible an near infrared spectrum. The data can be used to model vegetation density and light distribution at different height-levels. On the SensorBox it is faced upwards and takes measurements at different heights. It is planned to use to data to model forest structural parameters in conjunction with aerial images collected by UAVs. 







### Hall Sensor

------

<span class="image main"><img src="images/hall.jpg" alt="" /></span>

#### Manufacturer product description:

JOY-IT KY-024 Hall Sensor

#### Technical product information:

- Chipset: A3141
- OP-amplifier: LM393


#### Retailer information:

[SensorKit X40](<http://sensorkit.en.joy-it.net/index.php?title=KY-024_Linear_magnetic_Hall_Sensor#Technical_data_.2F_Short_description>)

Available for approximately [3€](<https://www.reichelt.de/entwicklerboards-magnetischer-hallsensor-debo-sens-hall-p239090.html>) depending on your local retailer

#### Sensor usage:

The hall sensor are responsible to control the lift system. The attached magnets at the upper and lower end of the lift build a magnetic field which is measured by the hall sensors. The engine powering the cable car is stopped when the SensorBox reaches the correct level of measurement.







### Real-time clock

------

<span class="image main"><img src="images/clock.jpg" alt="" /></span>

#### Manufacturer product description:

DS3231 real-time clock

#### Technical product information:

- Accuracy ±2ppm from 0°C to +40°C
- Accuracy ±3.5ppm from -40°C to +85°C
- Battery Backup Input for Continuous
  Timekeeping
- Operating Temperature Ranges
  Commercial: 0°C to +70°C
  Industrial: -40°C to +85°C
- Low-Power Consumption
- Real-Time Clock Counts Seconds, Minutes,
  Hours, Day, Date, Month, and Year with Leap Year
  Compensation Valid Up to 2100
- Two Time-of-Day Alarms
- Programmable Square-Wave Output
- Fast (400kHz) I2C Interface
- 3.3V Operation
- Digital Temp Sensor Output: ±3°C Accuracy
- Register for Aging Trim
- RST Input/Output
- UL Recognized

#### Retailer information:

[Eckstein GmbH](<https://eckstein-shop.de/DS3231-RTC-Modul-LIR2032>)

Available for approximately [4€](<https://eckstein-shop.de/DS3231-RTC-Modul-LIR2032>) depending on your local retailer

#### Sensor usage:

The real-time clock is used to ensure that the Raspberry Pi always uses the correct physical time.

This is important that even after a system restart the sensors work with the correct timestamp. 
