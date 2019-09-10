import numpy as np

filepath = '../data/pcaps/'
savepath = '../data/lables/'
namelist = range(1, 19, 1)
output_file_num = 1
index2protocol = []

index = 1

for filename in namelist:
    fullpath = filepath + str(filename)
    with open(fullpath, 'rb') as f:
        lines = f.readlines()
        for line in lines:
            message = str(line).split(" ")
            message = list(filter(lambda x: x != ' ' and x != '', message))
            each_protocol = []
            each_protocol.append(int(message[1]))
            each_protocol.append(message[5])
            print(each_protocol)
            index2protocol.append(each_protocol)

            if len(index2protocol) == 10000:
                np.save(savepath + str(output_file_num) + '.npy', index2protocol, allow_pickle=True)
                index2protocol = []
                output_file_num += 1

