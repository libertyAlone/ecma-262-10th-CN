# 2 一致性

一个符合ECMAScript标准的实现必须提供并支持全部的 类型，值， 对象，属性，函数以及此标准中描述的编程语法和语义。

解释源文本的输入必须与最新版本的Unicode标准和ISO/IEC 10646标准保持一致。

提供的应用程序接口(API)的程序，需要适应使用不同自然语言的国家的语言和文化习惯，且要实现最新版本的与本规范兼容的ECMA-402定义的接口。

可以提供那些超出本规范描述的额外类型，值，对象，属性以及方法。尤其对于该文档有提到但没描述其属性的那些对象，应该提供那些属性以及属性对应的值。

应该支持一些没有在规范中提及的程序或者正则表达式语法。尤其应该实现在11.6.2.2小节中列出的那些保留字的语法。

绝对不能实现在16.2小节中列出的禁止的扩展。