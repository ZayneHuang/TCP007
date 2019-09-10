import numpy as np


save_path = '../data/model_input/'
namelist = range(0, 40, 1)
train_file = []
valid_file = []
test_file = []

for filename in namelist:
    each_protocol = np.load(save_path + str(filename) + '.npy', allow_pickle=True)
    each_protocol = list(each_protocol)
    print(len(each_protocol))
    print(np.shape(each_protocol))
    train_thres = int(len(each_protocol) * 0.6)
    valid_thres = int(len(each_protocol) * 0.9)
    if filename == 0:
        train_file = each_protocol[:train_thres]
        valid_file = each_protocol[train_thres:valid_thres]
        test_file = each_protocol[valid_thres:]
    else:
        train_file += each_protocol[:train_thres]
        valid_file += each_protocol[train_thres:valid_thres]
        test_file += each_protocol[valid_thres:]
np.save(save_path + 'train_file.npy', train_file, allow_pickle=True)
np.save(save_path + 'valid_file.npy', valid_file, allow_pickle=True)
np.save(save_path + 'test_file.npy', test_file, allow_pickle=True)