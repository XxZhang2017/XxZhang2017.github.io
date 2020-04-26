# Bloom Filter 概览以及思考
#### **Bloom Filter简介**
Bloom Filter是一种空间效率很高的随机数据结构，它利用位数组很简洁地表示一个集合，并能判断一个元素是否属于这个集合。
* 优点 *：存储空间的极大节省
* 缺陷 *：可能会把不属于这个集合的元素误认为属于这个集合（false positive）
* 适用场合 *：低错误率容忍度
* 原理 *：多个不同的Hash函数来解决“冲突

#### *关键技术*：
位数组 hash 

#### *衡量指标*：
错误率  空间  hash个数（关乎hash计算次数）

#### *技术难点*：
hash函数选取、空间与错误率的妥协

#### *思考问题*：
1. 如何估计错误率
2. 最优的哈希函数个数
3. 位数组大小

* 参考解答 *：
https://blog.csdn.net/jiaomeng/article/details/1495500

####应用举例：
TBOX中的使用：
* 参考代码 *：
https://tboox.org/cn/2016/02/03/bloom-filter/