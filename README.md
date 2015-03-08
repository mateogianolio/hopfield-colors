# Hopfield color filter

Trains a [Hopfield](http://en.wikipedia.org/wiki/Hopfield_network) recurrent neural network to recognize colors and subsequently extracts them from all PNG images in the ```input``` folder. Output is saved to the ```output``` folder.

## Usage

Clone this repository and make sure the ```output``` folder exists before running

```bash
$ node main.js
```

Edit ```colors.js``` if you want to use different colors. The average error of the network output is subtracted from the transparency of each pixel.

## Observations

* When trained to recognize red, green, blue and black (```#ff0000```, ```#00ff00```, ```#0000ff``` and ```#000000``` respectively), cyan, yellow and magenta emerge as solid states.
* Applying a network trained to recognize black and white (```#ffffff``` and ```#000000``` respectively) on a circular color spectrum produces fractal-like patterns.

## Examples

The following images are inputs and outputs of a network which recognizes green (```#ff0000```) color.

Original image | Processed image
:-------------:|:--------------:
![Original circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum.png) | ![Processed circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-g.png)

Original image | Processed image
:-------------:|:--------------:
![Original linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum-linear.png) | ![Processed linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-linear-g.png)

Original image | Processed image
:-------------:|:--------------:
![Original nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/nature.png) | ![Processed nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/nature-g.png)

The following images are inputs and outputs of a network which recognizes red, green and blue (```#ff0000```, ```#00ff00``` and ```#0000ff```) colors.

Original image | Processed image
:-------------:|:--------------:
![Original circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum.png) | ![Processed circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-rgb.png)

Original image | Processed image
:-------------:|:--------------:
![Original linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum-linear.png) | ![Processed linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/spectrum-linear-rgb.png)

Original image | Processed image
:-------------:|:--------------:
![Original nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/nature.png) | ![Processed nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/examples/nature-rgb.png)

## Contribute

Feel free to fork and submit pull requests.