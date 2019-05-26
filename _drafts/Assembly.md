<h2>SensorBox Assembly</h2>
<hr/>
<h3>The Casing </h3>
The casing of the SensorBox needs to be prepared to safely host the microcontroller and protect it from environmental influences such as rain and UV-radiation. Also, the cables transmitting the signals from the environmental sensors need to reach the microcontroller without moisture entering the inside of the casing. Thirdly, the box needs wheels attached to it to ensure it can be used as a cable car between two ropes stretched along a tree. <p>

We created some <a href="assets/templates.pdf" >templates</a> which can be used to ensure to locate the correct positions to drill the holes. Make sure you use the short sides of the boxes to attach the wheels, while the upper long side of the box will be used to attach the sensor tower later. The attached wheels and the entrance of the cables from the sensor tower should look like this:
<div class="row">
   <div class="column">
       <img src="images/Rollen.jpeg" width="100%" />
    </div>
    <div class="column">
       <img src="images/sensor_tower_drill.jpeg" width="100%" />
    </div>
</div>
<p>
<h3>The Inlet</h3>
In the next step we attached a <a href="images/raspi_hex_mount_plate_V1.stl" >3D-printed plastic inlet</a> which is used to mount the Raspberry Pi as well as to stabilize the power-bank. After fixing the inlet, we place the Raspberry Pi with 4 small screws onto the placeholder for the microcontroller. We also stick an energy board with hot glue to connect the positive and negative line with the 3V-Input Pin and the Ground-Pin, respectively. 
<p><span class="image main"><img src="images/assembly_inlet.jpg" width="60%" /></span></p>
<h3>The Sensor Tower</h3>
The sensor tower is attached to the outside of the box and hosts the environmental sensor: the light sensor, the temperature and humidity sensor as well as the camera and the microphone are all attached to the sensor tower. First, the <a href="https://github.com/Nature40/Sensorboxes-Images/tree/master/printdesigns/version_1/gondola"> 3-D printed components</a> of the sensor tower need to be assembled. This includes the camera holder as well as the lamellas which will host the light and temperature sensor. After finishing the assembly of the individual plastic components we recommend to treat all parts with UV-protection spray to add a thick protection layer against incoming radiation. To achieve this, it might be a good idea to add several layers separatly. We will have to wait until the sprayed layer has dried out to proceed with attaching the electronic parts to the tower.
<p><div class="row">
   <div class="column">
       <img src="images/cam_rdy.jpg" width="100%" />
    </div>
    <div class="column">
       <img src="images/mic_best_rdy.jpg" width="100%" />
    </div>
</div></p>
<h3>Camera</h3>
The 3D-printable holder of the camera was designed to host the Raspberry Pi Camera Module v2.1. Obviously, if you wanted to use other hardware which better fits your needs, the design of the camera holder will need some changes. We attached a 30cm ribbon cable to the camera since the shorter 15cm version, which is shipped with the camera module, is to short to reach to the microcontroller in our current design of the SensorBox. 

<h3>Lumen Sensor</h3>
Before attaching the lumen sensor to the sensor tower, it needs some basic preparation like soldering jumpercables for power supply, the data transfer and the real-time clock signal. We also soldered a simple (linear pin rack?!) directly to the sensor to ease the attachment of the jumpercables. Then the sensor is ready to solder the cables to it. We created 30cm jumpers by soldering two 15cm jumpers together. This length is needed to get from the sensor to the energy board and the microcontroller. Be advised to use a common color scheme, as well. Here we choose white for energy (+), brown for ground (GND), yellow for the clock(SCK), and blue for the data (SDA). You will find the same color code in the fritzzing scheme below, which includes all the relevant information on color conventions and pin usages used in our setup of the SensorBox.


<h3>Temperature Sensor</h3>
put temp sensor on lowest lamella

<h3>The Hall Sensors</h3>

- connect jumper calbes to sensores and raspy
- paste sensors 

<h3>The Real Time Clock</h3>
attach all cables to the raspy/clock 
seal cable channels with silicon
seal connections of phalanx to box with silikon
if needed paste temp tower with gluegun to phalanx

<h3> The Fritzzing Plan<h3>
<img src="images/frizzing.PNG" width="80%" />