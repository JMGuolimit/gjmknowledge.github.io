# 15、章节练习

::: tip 版本：1.0
作者：郭嘉铭
</br>
日期：2023.7.18
:::

## 练习1

```java
public class Main {
    public static void main(String[] args) {
        Person ming = new Person();
        ming.setName("小明");
        ming.setAge(12);
        System.out.println(ming.getAge());
    }
}

class Person {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}


```

## 练习2

请给Person类增加(String, int)的构造方法：

```java
public class Main {
    public static void main(String[] args) {
        // TODO: 给Person增加构造方法:
        Person ming = new Person("小明", 12);
        System.out.println(ming.getName());
        System.out.println(ming.getAge());
    }
}
class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}

```

## 练习3

```java
public class Main {
    public static void main(String[] args) {
        Person ming = new Person();
        Person hong = new Person();
        ming.setName("Xiao Ming");
        // TODO: 给Person增加重载方法setName(String, String):
        hong.setName("Xiao", "Hong");
        System.out.println(ming.getName());
        System.out.println(hong.getName());
    }
}
class Person {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

## 练习4

定义PrimaryStudent，从Student继承，并新增一个grade字段：

```java
public class Main {
    public static void main(String[] args) {
        Person p = new Person("小明", 12);
        Student s = new Student("小红", 20, 99);
        // TODO: 定义PrimaryStudent，从Student继承，新增grade字段:
        Student ps = new PrimaryStudent("小军", 9, 100, 5);
        System.out.println(ps.getScore());
    }
}

class Person {
    protected String name;
    protected int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}

class Student extends Person {
    protected int score;

    public Student(String name, int age, int score) {
        super(name, age);
        this.score = score;
    }

    public int getScore() { return score; }
}
class PrimaryStudent {
    // TODO
}
```

## 练习5

给一个有工资收入和稿费收入的小伙伴算税。

## 练习6

用抽象类给一个有工资收入和稿费收入的小伙伴算税。

## 练习7

用接口给一个有工资收入和稿费收入的小伙伴算税。

## 练习8

给Person类增加一个静态字段count和静态方法getCount()，统计实例创建的个数。

## 练习9

请按如下包结构创建工程项目：

![051501.png](images/java/05/051501.png)

## 练习10

请下载并练习如何打包模块和JRE。