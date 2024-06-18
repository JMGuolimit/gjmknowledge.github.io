# 01、遍历数组

::: tip 版本：1.0
作者：郭嘉铭
</br>
日期：2023.7.18
:::

我们在Java程序基础里介绍了数组这种数据类型。有了数组，我们还需要来操作它。而数组最常见的一个操作就是遍历。

通过for循环就可以遍历数组。因为数组的每个元素都可以通过索引来访问，因此，使用标准的for循环可以完成一个数组的遍历：

```java
// 遍历数组
public class Main {
    public static void main(String[] args) {
        int[] ns = { 1, 4, 9, 16, 25 };
        for (int i=0; i<ns.length; i++) {
            int n = ns[i];
            System.out.println(n);
        }
    }
}
```

为了实现for循环遍历，初始条件为i=0，因为索引总是从0开始，继续循环的条件为i<ns.length，因为当i=ns.length时，i已经超出了索引范围（索引范围是0 ~ ns.length-1），每次循环后，i++。

第二种方式是使用for each循环，直接迭代数组的每个元素：

```java
// 遍历数组
public class Main {
    public static void main(String[] args) {
        int[] ns = { 1, 4, 9, 16, 25 };
        for (int n : ns) {
            System.out.println(n);
        }
    }
}
```

注意：在for (int n : ns)循环中，变量n直接拿到ns数组的元素，而不是索引。

显然for each循环更加简洁。但是，for each循环无法拿到数组的索引，因此，到底用哪一种for循环，取决于我们的需要。

## 打印数组内容

直接打印数组变量，得到的是数组在JVM中的引用地址：

```java
int[] ns = { 1, 1, 2, 3, 5, 8 };
System.out.println(ns); // 类似 [I@7852e922
```

这并没有什么意义，因为我们希望打印的数组的元素内容。因此，使用for each循环来打印它：

```java
int[] ns = { 1, 1, 2, 3, 5, 8 };
for (int n : ns) {
    System.out.print(n + ", ");
}
```

使用for each循环打印也很麻烦。幸好Java标准库提供了Arrays.toString()，可以快速打印数组内容：

```java
// 遍历数组
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] ns = { 1, 1, 2, 3, 5, 8 };
        System.out.println(Arrays.toString(ns));
    }
}
```

## 小结

遍历数组可以使用for循环，for循环可以访问数组索引，for each循环直接迭代每个数组元素，但无法获取索引；

使用Arrays.toString()可以快速获取数组内容。