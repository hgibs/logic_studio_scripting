from PIL import Image
import numpy as np
import pandas as pd
import colorsys

def get_color_data():
    rgb = pd.read_csv("rgb.csv")
    # rgb = rgb.drop(columns='Pad')
    rgb[['Hue','Saturation','Value']] = (0,0,0)
    for index, row in rgb.iterrows():
        rgb.loc[index, ['Hue','Saturation','Value']] = colorsys.rgb_to_hsv(row['Red']/256.0, row['Green']/256.0, row['Blue']/256.0)
    # rgb[['Hue','Saturation','Value']] = rgb[['Hue','Saturation','Value']] * 256
    return rgb

def get_grays():
    rgb = get_color_data()
    grays = rgb[rgb['Saturation'] < 0.1]
    grays_sorted_asc = grays.sort_values(['Value'], ascending=True)
    length = len(grays_sorted_asc)
    grays_sorted_asc2 = grays_sorted_asc.drop(columns=['Hue','Saturation','Value','Pad'])
    gray_arr = grays_sorted_asc2.to_numpy()
    new_shape = (1, gray_arr.shape[0], gray_arr.shape[1])
    grays_1d = np.reshape(gray_arr, new_shape).astype(dtype='uint8')
    return grays_1d

def get_color_by_brightness(region, bins=4):
    rgb = get_color_data()
    colors = rgb[rgb['Saturation'] > 0.01]
    color_arr = colors['Value'].to_numpy()
    hist = np.histogram(color_arr, bins=bins)
    brightness_edges = hist[1]
    brightness_max = brightness_edges[region]
    if(region == 0):
        brightness_min = 0
    else:
        brightness_min = brightness_edges[region - 1]
    color_trim_upp = colors[(colors['Value'] <= brightness_max)]
    color_trimmed = color_trim_upp[(color_trim_upp['Value'] >= brightness_min)]
    return color_trimmed

def rainbow(color_df):
    huesort = color_df.sort_values(['Hue'], ascending=True)
    hue_arr = huesort['Hue'].to_numpy()
    huehist = np.histogram(hue_arr, bins=24)
    # edges = [0] + huehist[1].tolist()
    edges = huehist[1].tolist()[1:] + [1.0]
    colors = pd.DataFrame()
    lastedge = 0
    for e in edges:
        hue_cap = huesort[huesort['Hue'] < e]
        huebin = hue_cap[hue_cap['Hue'] >= lastedge]
        if len(huebin) > 0:
            sorted = huebin.sort_values(['Saturation'], ascending=False)
            colorpoint = sorted.iloc[0]
            colors = colors.append(colorpoint)
        lastedge = e

    print(colors['Pad'])
    colors = colors.drop(119)
    cleaned = colors.drop(columns=['Pad','Hue','Value','Saturation'])
    rainbow_arr = cleaned.to_numpy()
    new_shape = (1, rainbow_arr.shape[0], rainbow_arr.shape[1])
    rainbow_1d = np.reshape(rainbow_arr, new_shape).astype(dtype='uint8')
    return rainbow_1d

def default_color_order():
    rgb = get_color_data()
    rgb_clean = rgb.drop(columns=['Pad','Hue','Saturation','Value'])
    rgb_arr = rgb_clean.to_numpy()
    new_shape = (1, rgb_arr.shape[0], rgb_arr.shape[1])
    rgb_1d = np.reshape(rgb_arr, new_shape).astype(dtype='uint8')
    return rgb_1d

def list_to_image(array):
    img  = Image.fromarray(array, mode = "RGB")
    img_large = img.resize((800,400), resample=Image.NEAREST)
    img_large.show()

# img_data = default_color_order()
# list_to_image(img_data)

# grayscale = get_grays()
# list_to_image(grayscale)

indexnum = 18
norm_color = get_color_by_brightness(indexnum, bins=indexnum)
rainbow_img_data = rainbow(norm_color)
print(rainbow_img_data.shape[1])
list_to_image(rainbow_img_data)
