# Hopfield color recognition

Trains a [Hopfield](http://en.wikipedia.org/wiki/Hopfield_network) recurrent neural network to recognize colors after which it interprets all PNG images in the ```input``` folder and saves the results to the ```output``` folder.

## Usage

Clone this repository and make sure the ```output``` folder exists before running

```bash
$ npm install
$ node main.js
```

Edit the beginning of ```main.js``` if you want to use different colors.

The transparency of each pixel is based on the uncertainty of the neural network's response to its color.

## Observations

* When trained to recognize red, green, blue and black (```#ff0000```, ```#00ff00```, ```#0000ff``` and ```#000000``` respectively), the inverses cyan, yellow and magenta (```#00ffff```, ```#ff00ff``` and ```#ffff00``` respectively) emerge as solid states as noted in the 'Spurious patterns' section of the [Wikipedia article](http://en.wikipedia.org/wiki/Hopfield_network#Spurious_patterns).
* Applying a network trained to recognize black and white (```#000000``` and ```#ffffff``` respectively) on a circular color spectrum produces fractal-like patterns.

## Examples

Below are a few examples of Hopfield networks trained to remember different combinations of colors. Think of the output as a reflection of what the network "sees" when interpreting the input.

### Black and white

The following images are inputs and outputs of a network which recognizes black and white (```#000000``` and ```#ffffff``` respectively) colors.

Input | Output
:------------:|:------------:
![Input circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum.png) | ![Output circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-bw.png)
![Input linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum-linear.png) | ![Output linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-linear-bw.png)
![Input canonical spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum-canonical.png) | ![Output canonical spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-canonical-bw.png)
![Input nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/nature.png) | ![Output nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/nature-bw.png)

### Green and black

The following images are inputs and outputs of a network which recognizes green and black (```#ff0000``` and ```#000000``` respectively) colors.

Input | Output
:------------:|:------------:
![Input circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum.png) | ![Output circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-g.png)
![Input linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum-linear.png) | ![Output linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-linear-g.png)
![Input canonical spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum-canonical.png) | ![Output canonical spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-canonical-g.png)
![Input nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/nature.png) | ![Output nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/nature-g.png)

## Red, green, blue and black

The following images are inputs and outputs of a network which recognizes red, green, blue and black (```#ff0000```, ```#00ff00```, ```#0000ff``` and ```#000000``` respectively) colors.

Input | Output
:------------:|:------------:
![Input circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum.png) | ![Output circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-rgb.png)
![Input linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum-linear.png) | ![Output linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-linear-rgb.png)
![Input canonical spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum-canonical.png) | ![Output canonical spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-canonical-rgb.png)
![Input nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/nature.png) | ![Output nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/nature-rgb.png)

## Contribute

Feel free to fork and submit pull requests.