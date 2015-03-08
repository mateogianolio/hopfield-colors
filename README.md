# Hopfield color filter

Trains a [Hopfield](http://en.wikipedia.org/wiki/Hopfield_network) recurrent neural network to recognize colors and subsequently extracts them from all PNG images in the ```input``` folder. Output is saved to the ```output``` folder.

## Usage

Clone this repository and make sure the ```output``` folder exists before running

```bash
$ node main.js
```

Edit ```colors.js``` if you want to use different colors. The average error of the network output is subtracted from the transparency of each pixel.

## Observations

* When trained to recognize red, green, blue and black (```#ff0000```, ```#00ff00```, ```#0000ff``` and ```#000000``` respectively), the inverses cyan, yellow and magenta (```#00ffff```, ```#ff00ff``` and ```#ffff00``` respectively) emerge as solid states as noted in the 'Spurious patterns' section of the [Wikipedia article](http://en.wikipedia.org/wiki/Hopfield_network#Spurious_patterns).
* Applying a network trained to recognize black and white (```#000000``` and ```#ffffff``` respectively) on a circular color spectrum produces fractal-like patterns.

## Examples

### Black and white

The following images are inputs and outputs of a network which recognizes black and white (```#000000``` and ```#ffffff``` respectively) colors.

Input | Output
:-------------:|:--------------:
![Original circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum.png) | ![Processed circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-bw.png)

Input | Output
:-------------:|:--------------:
![Original linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum-linear.png) | ![Processed linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-linear-bw.png)

Input | Output
:-------------:|:--------------:
![Original nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/nature.png) | ![Processed nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/nature-bw.png)

### Green and black

The following images are inputs and outputs of a network which recognizes green and black (```#ff0000``` and ```#000000``` respectively) color.

Input | Output
:-------------:|:--------------:
![Original circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum.png) | ![Processed circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-g.png)

Input | Output
:-------------:|:--------------:
![Original linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum-linear.png) | ![Processed linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-linear-g.png)

Input | Output
:-------------:|:--------------:
![Original nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/nature.png) | ![Processed nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/nature-g.png)

## Red, green, blue and black

The following images are inputs and outputs of a network which recognizes red, green, blue and black (```#ff0000```, ```#00ff00```, ```#0000ff``` and ```#000000``` respectively) colors.

Input | Output
:-------------:|:--------------:
![Original circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum.png) | ![Processed circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-rgb.png)

Input | Output
:-------------:|:--------------:
![Original linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum-linear.png) | ![Processed linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-linear-rgb.png)

Input | Output
:-------------:|:--------------:
![Original nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/nature.png) | ![Processed nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/nature-rgb.png)

## Contribute

Feel free to fork and submit pull requests.