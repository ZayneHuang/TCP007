import numpy as np

protocol_path = '../data/lables/'
bitlist_path = '../data/packets/'
dictionary_path = '../data/protocol_dictionary.npy'
# save_path_1 = 'C:\\Users\\lenovo\\Desktop\\train_file_1.npy'
# save_path_2 = 'C:\\Users\\lenovo\\Desktop\\test_file_1.npy'
save_path = '../data/model_input/'

# for i in index2bitlist:
#     # print(len(i[1]))
#     maxlen = max(maxlen, len(i[1]))
# print(maxlen)
# while maxlen % 128 != 0:
#     maxlen += 1
# print(maxlen)

namelist = range(1, 100, 1)
maxlen = 1600 * 8
width = 16 * 8
height = int(maxlen / width)

input_file_num = 1
model_input = []

protocol_dic = np.load(dictionary_path, allow_pickle=True)
protocol_dic =protocol_dic[()]

for filename in namelist:

    index2protocol = np.load(protocol_path + str(filename) + '.npy', allow_pickle=True)
    index2bitlist = np.load(bitlist_path + str(filename) + '.npy', allow_pickle=True)

    for index in range(0, len(index2bitlist), 1):
        bit_map = np.zeros((height, width))
        for bit_index in range(0, len(index2bitlist[index]), 1):
            x = int(bit_index / width)
            y = bit_index % width
            bit_map[x][y] = 1
        model_input.append([bit_map, protocol_dic.get(index2protocol[index][1])])
        if len(model_input) == 10000:
            np.save(save_path + str(input_file_num) + '.npy', model_input, allow_pickle=True)
            model_input = []
            input_file_num += 1
            print(input_file_num)
        # print([protocol_dic.get(index2protocol[index][1]), index2protocol[index][1]])



