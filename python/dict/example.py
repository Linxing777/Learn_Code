def Merge(dict1, dict2):
    # 使用**运算符合并两个字典
    res = {**dict1, **dict2}
    return res
# js 对象字面量 字典 key：value 键值对
dict1 = {'name': 'pys', 'age': 22}
dict2 = {'name': 'wzy', 'age': 22}
dict3 = Merge(dict1, dict2)
print(dict3)
