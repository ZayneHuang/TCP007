import numpy as np
import struct

filepath = '../data/pcaps/'
savepath = '../data/packets/'
namelist = range(1, 19, 1)
bit_list = range(0, 8, 1)
def str2bylist(mylist):
    bylist = []
    # print(mylist)
    for i, ch in enumerate(mylist):
        # print(i)
        for each_bit in bit_list:
            bylist.append((ch >> each_bit) % 2)
    return bylist

output_file_num = 1
index2bitlist = []
for filename in namelist:
    fullpath = filepath + str(filename) + '.pcap'

    with open(fullpath, 'rb') as f:
        pcap_heaf = f.read(24)
        (_magic_number, _version_major, _version_minor, _thiszone, _sigfigs, _snaplen, _link_type) = struct.unpack("=L2p2pLLLL", pcap_heaf)
        packet_head = f.read(16)
        while packet_head:
            (_second, _microsecond, _maxlen, _len) = struct.unpack("=LLLL", packet_head)
            mylist = f.read(_maxlen)
            if _maxlen > 1600:
                mylist = mylist[:1600]
            bylist = str2bylist(list(mylist))
            # print(bit_list)
            index2bitlist.append(bylist)
            if len(index2bitlist) == 10000:
                np.save(savepath + str(output_file_num) + '.npy', index2bitlist, allow_pickle=True)
                index2bitlist = []
                output_file_num += 1

            packet_head = f.read(16)
