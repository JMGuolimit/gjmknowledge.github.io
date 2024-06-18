(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{505:function(n,i,e){"use strict";e.r(i);var t=e(2),l=Object(t.a)({},(function(){var n=this,i=n._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("p",[n._v("File对象\n最后更新: 2019/8/13 07:26 / 阅读: 5459446\n在计算机系统中，文件是非常重要的存储方式。Java的标准库java.io提供了File对象来操作文件和目录。")]),n._v(" "),i("p",[n._v("要构造一个File对象，需要传入文件路径：")]),n._v(" "),i("p",[n._v('import java.io.*;\npublic class Main {\npublic static void main(String[] args) {\nFile f = new File("C:\\Windows\\notepad.exe");\nSystem.out.println(f);\n}\n}')]),n._v(" "),i("p",[n._v("Run\n构造File对象时，既可以传入绝对路径，也可以传入相对路径。绝对路径是以根目录开头的完整路径，例如：")]),n._v(" "),i("p",[n._v('File f = new File("C:\\Windows\\notepad.exe");\n注意Windows平台使用\\作为路径分隔符，在Java字符串中需要用\\表示一个\\。Linux平台使用/作为路径分隔符：')]),n._v(" "),i("p",[n._v('File f = new File("/usr/bin/javac");\n传入相对路径时，相对路径前面加上当前目录就是绝对路径：')]),n._v(" "),i("p",[n._v('// 假设当前目录是C:\\Docs\nFile f1 = new File("sub\\javac"); // 绝对路径是C:\\Docs\\sub\\javac\nFile f3 = new File(".\\sub\\javac"); // 绝对路径是C:\\Docs\\sub\\javac\nFile f3 = new File("..\\sub\\javac"); // 绝对路径是C:\\sub\\javac\n可以用.表示当前目录，..表示上级目录。')]),n._v(" "),i("p",[n._v("File对象有3种形式表示的路径，一种是getPath()，返回构造方法传入的路径，一种是getAbsolutePath()，返回绝对路径，一种是getCanonicalPath，它和绝对路径类似，但是返回的是规范路径。")]),n._v(" "),i("p",[n._v("什么是规范路径？我们看以下代码：")]),n._v(" "),i("p",[n._v('import java.io.*;\npublic class Main {\npublic static void main(String[] args) throws IOException {\nFile f = new File("..");\nSystem.out.println(f.getPath());\nSystem.out.println(f.getAbsolutePath());\nSystem.out.println(f.getCanonicalPath());\n}\n}')]),n._v(" "),i("p",[n._v("Run\n绝对路径可以表示成C:\\Windows\\System32..\\notepad.exe，而规范路径就是把.和..转换成标准的绝对路径后的路径：C:\\Windows\\notepad.exe。")]),n._v(" "),i("p",[n._v("因为Windows和Linux的路径分隔符不同，File对象有一个静态变量用于表示当前平台的系统分隔符：")]),n._v(" "),i("p",[n._v('System.out.println(File.separator); // 根据当前平台打印""或"/"\n文件和目录\nFile对象既可以表示文件，也可以表示目录。特别要注意的是，构造一个File对象，即使传入的文件或目录不存在，代码也不会出错，因为构造一个File对象，并不会导致任何磁盘操作。只有当我们调用File对象的某些方法的时候，才真正进行磁盘操作。')]),n._v(" "),i("p",[n._v("例如，调用isFile()，判断该File对象是否是一个已存在的文件，调用isDirectory()，判断该File对象是否是一个已存在的目录：")]),n._v(" "),i("p",[n._v('import java.io.*;\npublic class Main {\npublic static void main(String[] args) throws IOException {\nFile f1 = new File("C:\\Windows");\nFile f2 = new File("C:\\Windows\\notepad.exe");\nFile f3 = new File("C:\\Windows\\nothing");\nSystem.out.println(f1.isFile());\nSystem.out.println(f1.isDirectory());\nSystem.out.println(f2.isFile());\nSystem.out.println(f2.isDirectory());\nSystem.out.println(f3.isFile());\nSystem.out.println(f3.isDirectory());\n}\n}')]),n._v(" "),i("p",[n._v("Run\n用File对象获取到一个文件时，还可以进一步判断文件的权限和大小：")]),n._v(" "),i("p",[n._v("boolean canRead()：是否可读；\nboolean canWrite()：是否可写；\nboolean canExecute()：是否可执行；\nlong length()：文件字节大小。\n对目录而言，是否可执行表示能否列出它包含的文件和子目录。")]),n._v(" "),i("p",[n._v("创建和删除文件\n当File对象表示一个文件时，可以通过createNewFile()创建一个新文件，用delete()删除该文件：")]),n._v(" "),i("p",[n._v('File file = new File("/path/to/file");\nif (file.createNewFile()) {\n// 文件创建成功:\n// TODO:\nif (file.delete()) {\n// 删除文件成功:\n}\n}\n有些时候，程序需要读写一些临时文件，File对象提供了createTempFile()来创建一个临时文件，以及deleteOnExit()在JVM退出时自动删除该文件。')]),n._v(" "),i("p",[n._v('import java.io.*;\npublic class Main {\npublic static void main(String[] args) throws IOException {\nFile f = File.createTempFile("tmp-", ".txt"); // 提供临时文件的前缀和后缀\nf.deleteOnExit(); // JVM退出时自动删除\nSystem.out.println(f.isFile());\nSystem.out.println(f.getAbsolutePath());\n}\n}')]),n._v(" "),i("p",[n._v("Run\n遍历文件和目录\n当File对象表示一个目录时，可以使用list()和listFiles()列出目录下的文件和子目录名。listFiles()提供了一系列重载方法，可以过滤不想要的文件和目录：")]),n._v(" "),i("p",[n._v('import java.io.*;\npublic class Main {\npublic static void main(String[] args) throws IOException {\nFile f = new File("C:\\Windows");\nFile[] fs1 = f.listFiles(); // 列出所有文件和子目录\nprintFiles(fs1);\nFile[] fs2 = f.listFiles(new FilenameFilter() { // 仅列出.exe文件\npublic boolean accept(File dir, String name) {\nreturn name.endsWith(".exe"); // 返回true表示接受该文件\n}\n});\nprintFiles(fs2);\n}')]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[n._v('static void printFiles(File[] files) {\n    System.out.println("==========");\n    if (files != null) {\n        for (File f : files) {\n            System.out.println(f);\n        }\n    }\n    System.out.println("==========");\n}\n')])])]),i("p",[n._v("}")]),n._v(" "),i("p",[n._v("Run\n和文件操作类似，File对象如果表示一个目录，可以通过以下方法创建和删除目录：")]),n._v(" "),i("p",[n._v("boolean mkdir()：创建当前File对象表示的目录；\nboolean mkdirs()：创建当前File对象表示的目录，并在必要时将不存在的父目录也创建出来；\nboolean delete()：删除当前File对象表示的目录，当前目录必须为空才能删除成功。\nPath\nJava标准库还提供了一个Path对象，它位于java.nio.file包。Path对象和File对象类似，但操作更加简单：")]),n._v(" "),i("p",[n._v("import java.io."),i("em",[n._v(";\nimport java.nio.file.")]),n._v(';\npublic class Main {\npublic static void main(String[] args) throws IOException {\nPath p1 = Paths.get(".", "project", "study"); // 构造一个Path对象\nSystem.out.println(p1);\nPath p2 = p1.toAbsolutePath(); // 转换为绝对路径\nSystem.out.println(p2);\nPath p3 = p2.normalize(); // 转换为规范路径\nSystem.out.println(p3);\nFile f = p3.toFile(); // 转换为File对象\nSystem.out.println(f);\nfor (Path p : Paths.get("..").toAbsolutePath()) { // 可以直接遍历Path\nSystem.out.println("  " + p);\n}\n}\n}')]),n._v(" "),i("p",[n._v("Run\n如果需要对目录进行复杂的拼接、遍历等操作，使用Path对象更方便。")]),n._v(" "),i("p",[n._v("练习\n请利用File对象列出指定目录下的所有子目录和文件，并按层次打印。")]),n._v(" "),i("p",[n._v("例如，输出：")]),n._v(" "),i("p",[n._v("Documents/\nword/\n1.docx\n2.docx\nwork/\nabc.doc\nppt/\nother/\n如果不指定参数，则使用当前目录，如果指定参数，则使用指定目录。")]),n._v(" "),i("p",[n._v("从下载练习：io-file （推荐使用IDE练习插件快速下载）")]),n._v(" "),i("p",[n._v("小结\nJava标准库的java.io.File对象表示一个文件或者目录：")]),n._v(" "),i("p",[n._v("创建File对象本身不涉及IO操作；\n可以获取路径／绝对路径／规范路径：getPath()/getAbsolutePath()/getCanonicalPath()；\n可以获取目录的文件和子目录：list()/listFiles()；\n可以创建或删除文件和目录。")])])}),[],!1,null,null,null);i.default=l.exports}}]);