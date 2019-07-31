# 介绍

本Ecma标准定义了`ECMAScript 2019`语言。是ECMAScript标准的第10版，自从1997年第一版发布以来，ECMAScript已经成长为世界上最广泛使用的编程语言之一。作为网页浏览器内嵌的语言而闻名，也被用于服务端和嵌入式的应用中。

ECMAScript建立在几个原始技术的基础上，最著名的是JavaScript(Netscape)和JScript(Microsoft)。此语言由Netscape公司的Brendan Eich发明，首次出现于该公司的Navigator 2.0的浏览器中。并一直存在于Netscape和Microsoft的Internet Explorer 3.0以后的所有浏览器中。

ECMAScript语言标准的开发始于1996年11月。第一版Ecma标准在1997年6月被Ecma联合大会采用。

此标准随后被快速提交给 ISO/IEC JTC 1采用，并于1998年4月作为国际标准ISO/IEC 16262被采用。Ecma联合大会在1998年6月通过了ECMA-262的第二版以使其完全对齐ISO/IEC 16262。第一版和第二版的差别本质上是编辑上的。

标准的第3版引入了强大的正则表达式，更好的字符串处理，新的控制语句，try/catch异常捕捉，更严谨的错误定义和数字的格式化输出，还有些次要的对未来语言的期待改进。ECMAScript标准第3版在1999年12月被Ecma联合大会采用并在2002年6月作为ISO/IEC 16262:2002发布。

在发布第三版后，由于已经成为被所有web浏览器支持的编程语言，因此被WWW大量采用。做了大量工作来开发第4版标准。然而工作没有完成也没有在第四版中发布，而是一些功能合并到了第六版的开发中。

ECMAScript第5版(作为ECMA-262 5th发布)作为语言标准已经在浏览器被很普遍地实现了，并且添加了自从第三版发布以后的对新功能特性的支持。功能包括访问属性，反射式创建和检测对象，属性的程序控制，额外的数组操作函数，支持JSON对象的格式化编码，提供加强错误检查和程序安全性的严格模式。第五版在2009年12月被Ecma联合大会采纳。

第五版随后被快速提交给 ISO/IEC JTC 1采用并作为国标ISO/IEC 16262:2011被接受。Ecma5.1标准合并了次要的修改标准和ISO/IEC 16262:2011一样。5.1在2011年6月被Ecma联合大会采用。

由于第五版已经准备发布，在2009年开始全力开发第六版。然而由于1999年发布的第三版大量实验性功能和语言增强的设计被提前了。从某种意义上讲，第六版的完成是十五年工作成果的结晶。这次加强的主要目标是包括提供对大型应用更好的支持，库的创建，以及为使用ECMAScript作为其他语言的编译产物。主要加强包括模块化，类声明，词法块作用域，迭代器和生成器，异步编程的promise，结构模式和合理的尾调用。内置的ECMAScript库扩展为支持额外的数据抽象，包括map，set和二进制数组，还有对字符串Unidcode和正则的更多支持。内置的功能也可以通过子类扩展。第六版为常用及增强的语言和库增强提供了基础。第六版在2015年6月被联合大会采用。

ECMAScript 2016是在Ecma TC39新的年度发布节奏和开放开发进度中发布的第一个ECMAScript版本。基于ECMAScript 2015的源文档构建生成的纯文本源文档放在GitHub上。自这份标准多年开发以来，上百个pull request和issue归档以记录上千的bug修复，编辑修复和其他提升。此外，大量的软件工具如Ecmarkup，Ecmarkdown和Grammarkdown被开发出来以致力于这项工作。ES2016也支持了新的幂运算符并在Array.prototype中添加了新的`includes`方法。

ECMAScript2017引入了Async函数，共享内存和原子操作和少量的语言和库增强，bug修复和编辑更新。通过提供返回promise函数的语法提升了异步编程体验。共享内存和原子操作引入了新的[内存模型](https://www.ecma-international.org/ecma-262/10.0/index.html#sec-memory-model)，允许多线程程序使用原子操作通信以确保在多CPU并行下的定义好的执行顺序。该标准也包含了新的Object的静态方法：`Object.values`,`Object.entries`和`Object.getOwnPropertyDescriptors`。

ECMAScript 2018引入了通过AsyncIterator协议和异步生成器对异步迭代器的支持。也包括了四个正则表达式的特性： dotAll标识，命名捕获组，Unicode属性转义和后行断言。最后包括了对象属性的其余参数(rest parameter)和展开运算符(spread operator)。

本标准是第十版，引入了几个新的内置函数：用于扁平化数组的在`Array.prototype`上的`flat`和`flatMap`，用于将`Object.entries`返回值直接转换成新的Object的`Object.fromEntries`，在`String.prototype`上命名更规范来代替非标准广泛实现的内置方法`String.prototype.trimLeft`和 `trimRight`的`trimStart` 和 `trimEnd`方法。此外还包括几个小的语法和语意更新。更新的语法包括可选的catch函数的绑定参数，并允许JSON中字符串文本中U+2028 (行分隔符)和U+2029 (段落分隔符)。其他更新包括要求`Array.prototype.sort`是稳定排序，要求JSON.stringify返回与输入无关格式化好的UTF-8，声明`Function.prototype.toString`需要返回对应的原始源文本或者标准占位符其中之一。

代表不同组织的很多个人开发者在Ecma TC39中为此版本和之前的版本开发做了很大的贡献。此外还产生了支持TC39 ECMAScript工作的充满活力的社区组织。这个社区校对了大量的草稿和归档的上千个bug报告，演示了实验的实现，贡献了测试用例并在全世界的开发者中布道ECMAScript。不幸的是，难以对这些投入到这个工作中的个人和组织认证和答谢。

Allen Wirfs-Brock
ECMA-262 第六版 项目编辑

Brian Terlson
ECMA-262 第七版~第十版 项目编辑

## 1 范围

本标准定义了ECMAScript 2019编程语言。

## 2 一致性

一个符合ECMAScript标准的实现必须提供并支持全部的 类型，值， 对象，属性，函数以及此标准中描述的编程语法和语义。

解释源文本的输入必须与最新版本的Unicode标准和ISO/IEC 10646标准保持一致。

提供的应用程序接口(API)的程序，需要适应使用不同自然语言的国家的语言和文化习惯，且要实现最新版本的与本规范兼容的ECMA-402定义的接口。

可以提供那些超出本规范描述的额外类型，值，对象，属性以及方法。尤其对于该文档有提到但没描述其属性的那些对象，应该提供那些属性以及属性对应的值。

应该支持一些没有在规范中提及的程序或者正则表达式语法。尤其应该实现在11.6.2.2小节中列出的那些保留字的语法。

绝对不能实现在16.2小节中列出的禁止的扩展。

## 3 规范的引用