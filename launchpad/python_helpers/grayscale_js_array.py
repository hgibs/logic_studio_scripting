import json
import numpy as np
import pandas as pd
import colorsys

# rgb_pads = pd.read_csv("rgb.csv")
# rgb0 = rgb_pads.drop(columns='Pad')
# # grays = rgb0[rgb0.apply(pd.Series.nunique, axis=1) == 1]
# grays = rgb_pads[rgb_pads[['Red','Green','Blue']].apply(pd.Series.nunique, axis=1) == 1]
# grays['brightness'] = grays['Red'] + grays['Green'] + grays['Blue']
#
# grays_sorted_asc = grays.sort_values(['brightness'], ascending=True)
# grays_sorted_desc = grays.sort_values(['brightness'], ascending=False)

def get_color_data():
    rgb = pd.read_csv("rgb.csv")
    # rgb = rgb.drop(columns='Pad')
    rgb[['Hue','Saturation','Value']] = (0,0,0)
    for index, row in rgb.iterrows():
        rgb.loc[index, ['Hue','Saturation','Value']] = colorsys.rgb_to_hsv(row['Red']/256.0, row['Green']/256.0, row['Blue']/256.0)
    # rgb[['Hue','Saturation','Value']] = rgb[['Hue','Saturation','Value']] * 256
    return rgb

def get_grays(sort_ascending=True):
    rgb = get_color_data()
    grays = rgb[rgb['Saturation'] < 0.1]
    grays_sorted_asc = grays.sort_values(['Value'], ascending=sort_ascending)
    grays_sorted_asc = grays_sorted_asc.drop(70) # duplicate pad
    return grays_sorted_asc

def list_pads_in_order(df, name):
  print("const {} = ".format(name), end='')
  print_array = []
  for index in range(len(df)):
    print_array.append(int(df['Pad'].iloc[index]))
  print(json.dumps(print_array), end=';\n')
  # print(print_array)


list_pads_in_order(get_grays(True), "grays_ascending")
list_pads_in_order(get_grays(False), "grays_descending")
