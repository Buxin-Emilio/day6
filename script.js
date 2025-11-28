alert("Hello, World!");
alert('Hello');
alert('World');
// 添加注释
/*
添加注释
多行注释
*/
// 单行注释
let message;
// 等于声明一个变量并赋值
message = "小逼崽子!";
// 给变量赋值
alert(message);
// 输出变量的值
let user = '小八嘎';
let age=13;
let message1='Hello';
alert(user);
alert(age);
alert(message1);
message='okok';
// 变量的值改变之后，不用重新声明变量，直接赋值即可
alert(message);
message1='haohaohao';
alert(message1);
let message2='你好';
let message3= message2;

// 复制变量的值,复制的时候，不要加引号
alert(message3);
alert(message2);
// 变量的值不变，只是复制了一个变量的引用
// 变量名称必须仅包含字母、数字、符号 $ 和 _。 不能以数字开头，不能包含空格，不能使用 JavaScript 关键字作为变量名。区分大小写，最好不使用中文命名变量，建议使用有意义的名称，使用驼峰命名法，第二个单词开始的首字母大写。
// 声明一个常数（不变）变量，可以使用 const 而非 let：
const PI = 3.14159265359;
// 常数变量的值不能被修改
alert(PI);
// 一个普遍的做法是将常量用作别名，以便记住那些在执行之前就已知的难以记住的值。
// 一定要尝试让ai帮忙给变量和常量命名，这样可以提高代码的可读性。
let name2 = 'John';
let admin = name2;
alert(admin);
// const 声明变量的时候，声明一个固定不变的常量，那变量的所有字母大写，但是，如果是还需要结果其他程序计算出来的值，就不需要大写，保持小写