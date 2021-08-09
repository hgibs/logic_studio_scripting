from PIL import Image
import numpy as np
import pandas as pd
import colorsys
import json

pixel_data = None

## Takes an 8x8 RGB(A) image and converts it to the corresponding pad numbers.


IMG_PATH = "../pixel_art/creature_ball.png"


def img_to_array(image_path):
    with Image.open(image_path) as im:
        pixel_data = np.array(im)

    no_alpha = np.delete(pixel_data, 3, 2)

    def get_color_data():
        rgb = pd.read_csv("rgb.csv")
        # rgb = rgb.drop(columns='Pad')
        rgb[['Hue','Saturation','Value']] = (0,0,0)
        for index, row in rgb.iterrows():
            rgb.loc[index, ['Hue','Saturation','Value']] = colorsys.rgb_to_hsv(row['Red']/256.0, row['Green']/256.0, row['Blue']/256.0)
        # rgb[['Hue','Saturation','Value']] = rgb[['Hue','Saturation','Value']] * 256
        return rgb

    rgb = get_color_data()
    rgb_only = rgb.drop(columns=['Pad', 'Hue', 'Saturation', 'Value'])
    rgb_arr = rgb_only.to_numpy()

    linear_flat = no_alpha.flatten()
    linear_rgb = linear_flat.reshape((8*8,3))

    value = linear_rgb[40]

    def find_nearest_color(value):
        #Computing linear distance
        pad_num = np.sum(np.abs(rgb_arr - value), axis=1).argmin()
        #TODO do euclidean distance?
        return pad_num

    nearest_padnums = []
    for pixel in linear_rgb:
        nearest_padnums.append(find_nearest_color(pixel))

    # for checking matches:
    # pad_arr = np.array(nearest_padnums).reshape((8*8,1))
    # np.concatenate((linear_rgb, pad_arr), axis=1)

    linear_data = np.array(nearest_padnums).reshape((8,8)).astype(dtype='uint8').tolist()
    return linear_data


if __name__ == "__main__":
    lin_data = img_to_array(IMG_PATH);

    print("const {} = ".format('img_array2d'), end='')
    print(json.dumps(lin_data), end=';\n')
