import json
import numpy as np
import pandas as pd

rgb_pads = pd.read_csv("rgb.csv")
rgb0 = rgb_pads.drop(columns='Pad')
# grays = rgb0[rgb0.apply(pd.Series.nunique, axis=1) == 1]
grays = rgb_pads[rgb_pads[['Red','Green','Blue']].apply(pd.Series.nunique, axis=1) == 1]
grays['brightness'] = grays['Red'] + grays['Green'] + grays['Blue']

grays_sorted_asc = grays.sort_values(['brightness'], ascending=True)
grays_sorted_desc = grays.sort_values(['brightness'], ascending=False)

def list_pads_in_order(df, name):
  print("const {} = ".format(name), end='')
  print_array = []
  for index in range(len(df)):
    print_array.append(int(df['Pad'].iloc[index]))
  print(json.dumps(print_array))
  # print(print_array)

list_pads_in_order(grays_sorted_desc, "grays_descending")
list_pads_in_order(grays_sorted_asc, "grays_ascending")
