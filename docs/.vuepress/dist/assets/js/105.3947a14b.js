(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{510:function(t,e,s){"use strict";s.r(e);var p=s(2),n=Object(p.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("读取classpath资源\n最后更新: 2019/8/14 22:48 / 阅读: 761637\n很多Java程序启动的时候，都需要读取配置文件。例如，从一个.properties文件中读取配置：")]),t._v(" "),e("p",[t._v('String conf = "C:\\conf\\default.properties";\ntry (InputStream input = new FileInputStream(conf)) {\n// TODO:\n}\n这段代码要正常执行，必须在C盘创建conf目录，然后在目录里创建default.properties文件。但是，在Linux系统上，路径和Windows的又不一样。')]),t._v(" "),e("p",[t._v("因此，从磁盘的固定目录读取配置文件，不是一个好的办法。")]),t._v(" "),e("p",[t._v("有没有路径无关的读取文件的方式呢？")]),t._v(" "),e("p",[t._v("我们知道，Java存放.class的目录或jar包也可以包含任意其他类型的文件，例如：")]),t._v(" "),e("p",[t._v("配置文件，例如.properties；\n图片文件，例如.jpg；\n文本文件，例如.txt，.csv；\n……\n从classpath读取文件就可以避免不同环境下文件路径不一致的问题：如果我们把default.properties文件放到classpath中，就不用关心它的实际存放路径。")]),t._v(" "),e("p",[t._v("在classpath中的资源文件，路径总是以／开头，我们先获取当前的Class对象，然后调用getResourceAsStream()就可以直接从classpath读取任意的资源文件：")]),t._v(" "),e("p",[t._v('try (InputStream input = getClass().getResourceAsStream("/default.properties")) {\n// TODO:\n}\n调用getResourceAsStream()需要特别注意的一点是，如果资源文件不存在，它将返回null。因此，我们需要检查返回的InputStream是否为null，如果为null，表示资源文件在classpath中没有找到：')]),t._v(" "),e("p",[t._v('try (InputStream input = getClass().getResourceAsStream("/default.properties")) {\nif (input != null) {\n// TODO:\n}\n}\n如果我们把默认的配置放到jar包中，再从外部文件系统读取一个可选的配置文件，就可以做到既有默认的配置文件，又可以让用户自己修改配置：')]),t._v(" "),e("p",[t._v('Properties props = new Properties();\nprops.load(inputStreamFromClassPath("/default.properties"));\nprops.load(inputStreamFromFile("./conf.properties"));\n这样读取配置文件，应用程序启动就更加灵活。')]),t._v(" "),e("p",[t._v("小结\n把资源存储在classpath中可以避免文件路径依赖；")]),t._v(" "),e("p",[t._v("Class对象的getResourceAsStream()可以从classpath中读取指定资源；")]),t._v(" "),e("p",[t._v("根据classpath读取资源时，需要检查返回的InputStream是否为null。")])])}),[],!1,null,null,null);e.default=n.exports}}]);