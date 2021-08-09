import json
import os

from import_picture import img_to_array

pixel_data = None

## Takes a series of images in order
# i.e. 1.jpg 2.jpg 3.jpg ...
# or picA.png picB.png picC.png

IMAGES_DIR = "../pixel_art/animated/heart_full/"

images = sorted(os.listdir(path=IMAGES_DIR))

stages = []
for im_file in images:
    print(im_file, end=' ')
    im_arr = img_to_array(IMAGES_DIR + im_file)
    stages.append(im_arr)

print()
print("const {} = ".format('img_animated'), end='')
print(json.dumps(stages), end=';\n')
