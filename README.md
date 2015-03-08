# Hopfield color filter

Trains a [Hopfield](http://en.wikipedia.org/wiki/Hopfield_network) recurrent neural network to recognize colors and subsequently extracts them from all images in the ```input``` folder. Output is saved to the ```output``` folder.

## Usage

Clone this repository and run

```bash
$ node main.js
```

Edit ```colors.js``` if you want to use different colors. If a pixel in any of the images is black (```#000000```), it is currently automatically made transparent (for clarity purposes).

## Examples

The following images are inputs and outputs of a network which recognizes green (```#ff0000```) color.

Original image | Processed image
:-------------:|:--------------:
![Original circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum.png) | ![Processed circular spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/output/spectrum.png)

Original image | Processed image
:-------------:|:--------------:
![Original linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/spectrum-linear.png) | ![Processed linear spectrum](https://raw.github.com/mateogianolio/hopfield-color-filter/master/output/spectrum-linear.png)

Original image | Processed image
:-------------:|:--------------:
![Original nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/input/nature.png) | ![Processed nature image](https://raw.github.com/mateogianolio/hopfield-color-filter/master/output/nature.png)