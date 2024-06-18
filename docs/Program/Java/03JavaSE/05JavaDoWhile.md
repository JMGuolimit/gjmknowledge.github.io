# 05、do while循环

::: tip 版本：1.0
作者：郭嘉铭
</br>
日期：2023.7.18
:::

在Java中，while循环是先判断循环条件，再执行循环。而另一种do while循环则是先执行循环，再判断条件，条件满足时继续循环，条件不满足时退出。它的用法是：

```java
do {
    执行循环语句
} while (条件表达式);
```

可见，do while循环会至少循环一次。

我们把对1到100的求和用do while循环改写一下：

```java
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        int n = 1;
        do {
            sum = sum + n;
            n ++;
        } while (n <= 100);
        System.out.println(sum);
    }
}
```

使用do while循环时，同样要注意循环条件的判断。

## 小结

do while循环先执行循环，再判断条件；

do while循环会至少执行一次。