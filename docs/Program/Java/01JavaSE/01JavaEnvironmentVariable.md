# 02、Java环境变量配置

::: tip 版本：1.0
作者：郭嘉铭
</br>
日期：2023.7.18
:::

因为Java程序必须运行在JVM之上，所以，我们第一件事情就是安装JDK。

从 [OpenJDK](https://openjdk.org/install/) 下载JDK

Windows优先选x64 MSI Installer，Linux和macOS要根据自己电脑的CPU是ARM还是x86选择合适的安装包。

## 设置环境变量

安装完JDK后，需要设置一个JAVA_HOME的环境变量，它指向JDK的安装目录。在Windows下，它是安装目录，类似：

```txt
C:\Program Files\Java\jdk-20
```

然后，把**JAVA_HOME**的bin目录附加到系统环境变量**PATH**上。在Windows下，它长这样：

```txt
Path=%JAVA_HOME%\bin;
```

把**JAVA_HOME**的bin目录添加到**PATH**中是为了在任意文件夹下都可以运行java。打开命令提示符窗口，输入命令java -version，如果一切正常，你会看到如下输出：

![0101.png](images/java/01/0101.png)

## JDK

+ java：这个可执行程序其实就是JVM，运行Java程序，就是启动JVM，然后让JVM执行指定的编译后的代码；

+ javac：这是Java的编译器，它用于把Java源码文件（以.java后缀结尾）编译为Java字节码文件（以.class后缀结尾）；

+ jar：用于把一组.class文件打包成一个.jar文件，便于发布；

+ javadoc：用于从Java源码中自动提取注释并生成文档；

+ jdb：Java调试器，用于开发阶段的运行调试。