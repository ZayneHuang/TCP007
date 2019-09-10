import numpy as np

filepath = '../data/pcaps/'
namelist = range(1, 19, 1)

protocol_list = []
protocol_dic = {}
protocol_num = np.zeros(40, dtype=int)

for filename in namelist:
    fullpath = filepath + str(filename)
    with open(fullpath, 'rb') as f:
        lines = f.readlines()
        for line in lines:
            message = str(line).split(" ")
            message = list(filter(lambda x: x != ' ' and x != '', message))

            if protocol_dic.get(message[5]) is None:
                protocol_dic[message[5]] = len(protocol_dic)
            protocol_num[protocol_dic[message[5]]] += 1

i = 0
for key in protocol_dic:
    protocol_list.append([str(key), protocol_num[i]])
    i += 1

protocol_list.sort(key=lambda x: x[1], reverse=True)
print(protocol_list)

protocol_dic = {}
for each_protocol in protocol_list:
    protocol_dic[each_protocol[0]] = len(protocol_dic)
print(protocol_dic)
np.save('../data/protocol_dictionary.npy', protocol_dic, allow_pickle=True)

with open('../data/statistics_sorted.txt', 'w') as ff:
    for each_protocol in protocol_list:
        data = str(each_protocol[0]) + '   ' + str(each_protocol[1]) + '\n'
        ff.write(data)
