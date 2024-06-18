# 04、自定义异常

::: tip 版本：1.0
作者：郭嘉铭
</br>
日期：2023.7.18
:::

Java标准库定义的常用异常包括：

![060401.png](images/java/06/060401.png)

当我们在代码中需要抛出异常时，尽量使用JDK已定义的异常类型。例如，参数检查不合法，应该抛出IllegalArgumentException：

```java
static void process1(int age) {
    if (age <= 0) {
        throw new IllegalArgumentException();
    }
}
```

在一个大型项目中，可以自定义新的异常类型，但是，保持一个合理的异常继承体系是非常重要的。

一个常见的做法是自定义一个BaseException作为“根异常”，然后，派生出各种业务类型的异常。

BaseException需要从一个适合的Exception派生，通常建议从RuntimeException派生：

```java
public class BaseException extends RuntimeException {
}
```

其他业务类型的异常就可以从BaseException派生：

```java
public class UserNotFoundException extends BaseException {
}

public class LoginFailedException extends BaseException {
}

...
```

自定义的BaseException应该提供多个构造方法：

```java
public class BaseException extends RuntimeException {
    public BaseException() {
        super();
    }

    public BaseException(String message, Throwable cause) {
        super(message, cause);
    }

    public BaseException(String message) {
        super(message);
    }

    public BaseException(Throwable cause) {
        super(cause);
    }
}
```

上述构造方法实际上都是原样照抄RuntimeException。这样，抛出异常的时候，就可以选择合适的构造方法。通过IDE可以根据父类快速生成子类的构造方法。

## 小结

抛出异常时，尽量复用JDK已定义的异常类型；

自定义异常体系时，推荐从RuntimeException派生“根异常”，再派生出业务异常；

自定义异常时，应该提供多种构造方法。