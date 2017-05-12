# rpi-websockets-servo-control

Node.js script controlling pan/tilt head servos attached to Raspberry Pi using WebSockets.

## Installation

1. Clone this repository
2. `$ npm install`

## Configuration

Tweak the GPIO ports for your servos in the `src/servo.js` script.

You may also want to adjust min/max values to avoid buzzing when reaching edge values.

## Usage

1. Run the server script with root privilages: `$ sudo node src/server.js`.
2. Open the control panel - `http://<raspberry-pi-address:8080/` - in your web browser.
3. Move the blue dot to control the pan/tilt head position.
3. Press `ctrl+c` to stop the server.

## License

(The MIT License)

Copyright (c) 2017 Greg Pabian greg.pabian@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.