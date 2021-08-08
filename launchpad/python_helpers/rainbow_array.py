import pandas as pd
import numpy as np
import json
import colorsys

def get_color_data():
    rgb = pd.read_csv("rgb.csv")
    # rgb = rgb.drop(columns='Pad')
    rgb[['Hue','Saturation','Value']] = (0,0,0)
    for index, row in rgb.iterrows():
        rgb.loc[index, ['Hue','Saturation','Value']] = colorsys.rgb_to_hsv(row['Red']/256.0, row['Green']/256.0, row['Blue']/256.0)
    # rgb[['Hue','Saturation','Value']] = rgb[['Hue','Saturation','Value']] * 256
    return rgb

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

def list_pads_in_order(df, name):
  print("const {} = ".format(name), end='')
  print_array = []
  for index in range(len(df)):
    print_array.append(int(df['Pad'].iloc[index]))
  print(json.dumps(print_array))

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

    colors = colors.drop(119)
    list_pads_in_order(colors, "colors_ascending")
    list_pads_in_order(colors[::-1], "colors_descending")

indexnum = 18
norm_color = get_color_by_brightness(indexnum, bins=indexnum)
rainbow(norm_color)
