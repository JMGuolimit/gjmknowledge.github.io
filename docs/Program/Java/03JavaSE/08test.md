# 08、章节练习

::: tip 版本：1.0
作者：郭嘉铭
</br>
日期：2023.7.18
:::

## 练习1

请帮小明同学设计一个程序，输入上次考试成绩（int）和本次考试成绩（int），然后输出成绩提高的百分比，保留两位小数位（例如，21.75%）。

## 练习2

请用if ... else编写一个程序，用于计算体质指数BMI，并打印结果。

BMI = 体重(kg)除以身高(m)的平方

BMI结果：

+ 过轻：低于18.5
+ 正常：18.5-25
+ 过重：25-28
+ 肥胖：28-32
+ 非常肥胖：高于32

## 练习3

使用switch实现一个简单的石头、剪子、布游戏。

## 练习4

使用while计算从m到n的和：

```java
public class Main {
	public static void main(String[] args) {
		int sum = 0;
		int m = 20;
		int n = 100;
		// 使用while计算M+...+N:
		while (false) {
		}
		System.out.println(sum);
	}
}
```

## 练习5

使用do while循环计算从m到n的和。

```java
public class Main {
	public static void main(String[] args) {
		int sum = 0;
        int m = 20;
		int n = 100;
		// 使用do while计算M+...+N:
		do {
		} while (false);
		System.out.println(sum);
	}
}
```

## 练习6

给定一个数组，请用for循环倒序输出每一个元素：

```java
public class Main {
    public static void main(String[] args) {
        int[] ns = { 1, 4, 9, 16, 25 };
        for (int i=?; ?; ?) {
            System.out.println(ns[i]);
        }
    }
}
```

## 练习7

利用for each循环对数组每个元素求和：

```java
public class Main {
    public static void main(String[] args) {
        int[] ns = { 1, 4, 9, 16, 25 };
        int sum = 0;
        for (???) {
            // TODO
        }
        System.out.println(sum); // 55
    }
}
```

## 练习8

圆周率π可以使用公式计算：

![030801.png](images/java/03/030801.png)

请利用for循环计算π：

```java
public class Main {
    public static void main(String[] args) {
        double pi = 0;
        for (???) {
            // TODO
        }
        System.out.println(pi);
    }
}
```