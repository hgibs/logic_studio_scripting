from PIL import Image
import numpy as np

rand_array = np.random.randint(255, size=(800,3), dtype=np.uint8)

image_array = np.reshape(rand_array, )

np.copyto(image_array, rand_array)

image_array.head()
# img  = Image.fromarray(pic_array, mode = "RGB")
# img.show()
