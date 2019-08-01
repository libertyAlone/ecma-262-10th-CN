# 4 概览

本节包含ECMAScript语言的非规范概览。

ECMAScript是一个在宿主环境中的执行计算和操作可计算对象的面对对象的编程语言。此处定义的ECMAScript不是用于大量计算的；实际上此规范没有对大量数据的输入或计算结果的输出进行规定。相反，ECMAScript程序计算环境不仅提供规范中描述的对象和对象能力，还提供与环境相关的某些对象，这些描述和行为超越了此规范的范围，除了表明它们可以提供可供访问的某些属性以及可以从ECMAScript程序中调用的某些函数。

ECMAScript最初是被设计用作脚本语言，但是已经被广泛用作一门通用目的的变成语言。*脚本语言*是被用于操作，定制和自动化现成系统的编程语言。在这样的系统中，有用的功能已经可以通过用户接口使用，脚本语言是一种将此种能力暴露给程序控制的机制。如此该系统便能够提供对象和功能的宿主环境，这个环境便成就了脚本语言的能力。脚本语言既可以被专业的也可以被非专业的编程人员使用。

ECMAScript最初是被设计作为*Web脚本语言*，丰富浏览器中的Web页面功能和在基于Web的C/S架构中作为一部分执行服务端计算。ECMAScript现在被用于为大量宿主环境提供核心脚本能力。因此本文档规范了除特殊宿主环境外的核心语言部分。

ECMAScript已经超出了简单脚本的范围，被用于不同环境和规模的大范围的编程任务中。随着ECMAScript用法的扩展，也提供了对应的功能特性。ECMAScript现在已经是一门全能的通用性质的编程语言了。

ECMAScript的一些功能类似其他编程语言的对应部分；尤其是下边列出的C，Java™，Self和Scheme：

ISO/IEC 9899:1996, *Programming Languages – C*.

Gosling, James, Bill Joy and Guy Steele. *The Java™ Language Specification*. Addison Wesley Publishing Co., 1996.

Ungar, David, and Smith, Randall B. Self: The Power of Simplicity. *OOPSLA '87 Conference Proceedings*, pp. 227-241, Orlando, FL, October 1987.

*IEEE Standard for the Scheme Programming Language*. IEEE Std 1178-1990.

