# 03、多维数组

::: tip 版本：1.0
作者：郭嘉铭
</br>
日期：2023.7.18
:::

## 二维数组

二维数组就是数组的数组。定义一个二维数组如下：

```java
// 二维数组
public class Main {
    public static void main(String[] args) {
        int[][] ns = {
            { 1, 2, 3, 4 },
            { 5, 6, 7, 8 },
            { 9, 10, 11, 12 }
        };
        System.out.println(ns.length); // 3
    }
}
```

因为ns包含3个数组，因此，ns.length为3。实际上ns在内存中的结构如下：

![040301.png](images/java/04/040301.png)

如果我们定义一个普通数组arr0，然后把ns[0]赋值给它：

```java
// 二维数组
public class Main {
    public static void main(String[] args) {
        int[][] ns = {
            { 1, 2, 3, 4 },
            { 5, 6, 7, 8 },
            { 9, 10, 11, 12 }
        };
        int[] arr0 = ns[0];
        System.out.println(arr0.length); // 4
    }
}
```

实际上arr0就获取了ns数组的第0个元素。因为ns数组的每个元素也是一个数组，因此，arr0指向的数组就是{ 1, 2, 3, 4 }。在内存中，结构如下：

![040302.png](images/java/04/040302.png)

访问二维数组的某个元素需要使用array[row][col]，例如：

```java
System.out.println(ns[1][2]); // 7
```

二维数组的每个数组元素的长度并不要求相同，例如，可以这么定义ns数组：

```java
int[][] ns = {
    { 1, 2, 3, 4 },
    { 5, 6 },
    { 7, 8, 9 }
};
```

这个二维数组在内存中的结构如下：

![040303.png](images/java/04/040303.png)

要打印一个二维数组，可以使用两层嵌套的for循环：

```java
for (int[] arr : ns) {
    for (int n : arr) {
        System.out.print(n);
        System.out.print(', ');
    }
    System.out.println();
}
```

或者使用Java标准库的Arrays.deepToString()：

```java
// 二维数组
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[][] ns = {
            { 1, 2, 3, 4 },
            { 5, 6, 7, 8 },
            { 9, 10, 11, 12 }
        };
        System.out.println(Arrays.deepToString(ns));
    }
}
```

## 三维数组

三维数组就是二维数组的数组。可以这么定义一个三维数组：

```java
// 二维数组
int[][][] ns = {
    {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    },
    {
        {10, 11},
        {12, 13}
    },
    {
        {14, 15, 16},
        {17, 18}
    }
};
```

它在内存中的结构如下：

![040304.png](images/java/04/040304.png)

如果我们要访问三维数组的某个元素，例如，ns[2][0][1]，只需要顺着定位找到对应的最终元素15即可。

理论上，我们可以定义任意的N维数组。但在实际应用中，除了二维数组在某些时候还能用得上，更高维度的数组很少使用。

## 小结

二维数组就是数组的数组，三维数组就是二维数组的数组；

多维数组的每个数组元素长度都不要求相同；

打印多维数组可以使用Arrays.deepToString()；

最常见的多维数组是二维数组，访问二维数组的一个元素使用array[row][col]。