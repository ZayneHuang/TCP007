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

protocol_dic = np.load(dictionary_path, allow_pickle=True)
protocol_dic =protocol_dic[()]
protocol_list = []
model_input = []

for key in protocol_dic:
    protocol_list.append(key)
for i in range(0, 40, 1):
    model_input.append([])
for filename in namelist:
    print(filename)
    index2protocol = np.load(protocol_path + str(filename) + '.npy', allow_pickle=True)
    index2bitlist = np.load(bitlist_path + str(filename) + '.npy', allow_pickle=True)

    for index in range(0, len(index2bitlist), 1):
        if len(model_input[protocol_dic.get(index2protocol[index][1])]) > 3500:
            continue
        bit_map = np.zeros((height, width))
        for bit_index in range(0, len(index2bitlist[index]), 1):
            x = int(bit_index / width)
            y = bit_index % width
            bit_map[x][y] = 1

        model_input[protocol_dic.get(index2protocol[index][1])].append([bit_map, protocol_dic.get(index2protocol[index][1])])
        
for each_protocol in model_input:
    np.save(save_path + str(each_protocol[0][1]) + '.npy', each_protocol, allow_pickle=True)

# train_file = []
# valid_file = []
# test_file = []
# for each_protocol in model_input:
#     train_thres = int(len(each_protocol) * 0.6)
#     valid_thres = int(len(each_protocol) * 0.9)
#     train_file += each_protocol[:train_thres]
#     valid_file += each_protocol[train_thres:valid_thres]
#     test_file += each_protocol[valid_thres:]
# np.save(save_path + 'train_file.npy', train_file, allow_pickle=True)
# np.save(save_path + 'valid_file.npy', valid_file, allow_pickle=True)
# np.save(save_path + 'test_file.npy', test_file, allow_pickle=True)