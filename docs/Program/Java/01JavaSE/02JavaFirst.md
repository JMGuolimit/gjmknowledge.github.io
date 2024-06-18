# 03、Java第一个程序

::: tip 版本：1.0
作者：郭嘉铭
</br>
日期：2023.7.18
:::

## 编写第一个程序

打开文本编辑器，输入

```java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

在一个Java程序中，总能找到一个类似：

```java
public class Hello {
	···
}
```

这个定义被称为class（类），这里的类名是Hello，大小写敏感，class用来定义一个类，public表示这个类是公开的，public、class都是Java的关键字，必须小写，Hello是类的名字，按照习惯，首字母H要大写。而花括号{}中间则是类的定义。

注意到类的定义中，我们定义了一个名为main的方法：

```java
    public static void main(String[] args) {
        ···
    }
```

方法是可执行的代码块，一个方法除了方法名main，还有用()括起来的方法参数，这里的main方法有一个参数，参数类型是String[]，参数名是args，public、static用来修饰方法，这里表示它是一个公开的静态方法，void是方法的返回类型，而花括号{}中间的就是方法的代码。

方法的代码每一行用;结束，这里只有一行代码，就是

```java
		System.out.println("Hello, world!");
```

它用来打印一个字符串到屏幕上。

Java规定，某个类定义的public static void main(String[] args)是Java程序的固定入口方法，因此，Java程序总是从main方法开始执行。

注意到Java源码的缩进不是必须的，但是用缩进后，格式好看，很容易看出代码块的开始和结束，缩进一般是4个空格或者一个tab。

最后，当我们把代码保存为文件时，文件名必须是Hello.java，而且文件名也要注意大小写，因为要和我们定义的类名Hello完全保持一致。

## 如何运行Java程序

Java源码本质上是一个文本文件，我们需要先用javac把Hello.java编译成字节码文件Hello.class，然后，用java命令执行这个字节码文件：

┌──────────────────┐</br>
│    Hello.java    │◀── source code</br>
└──────────────────┘</br>
          │ compile</br>
          ▼</br>
┌──────────────────┐</br>
│   Hello.class    │◀── byte code</br>
└──────────────────┘</br>
          │ execute</br>
          ▼</br>
┌──────────────────┐</br>
│    Run on JVM    │</br>
└──────────────────┘</br>

因此，可执行文件javac是编译器，而可执行文件java就是虚拟机。

第一步，在保存Hello.java的目录下执行命令javac Hello.java：

```txt
$ javac Hello.java
```

如果源代码无误，上述命令不会有任何输出，而当前目录下会产生一个Hello.class文件：

```txt
$ ls
Hello.class	Hello.java
```

第二步，执行Hello.class，使用命令java Hello：

```txt
$ java Hello
Hello, world!
```

注意：给虚拟机传递的参数Hello是我们定义的类名，虚拟机自动查找对应的class文件并执行。

在实际项目中，单个不依赖第三方库的Java源码是非常罕见的，所以，绝大多数情况下，我们无法直接运行一个Java源码文件，原因是它需要依赖其他的库。

## 小结
一个Java源码只能定义一个public类型的class，并且class名称和文件名要完全一致；

使用javac可以将.java源码编译成.class字节码；

使用java可以运行一个已编译的Java程序，参数是类名。