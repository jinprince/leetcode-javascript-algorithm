## javascript
 #### 1、javascript 的typeof返回哪些数据类型
 ```js
 alert(typeof [1,2])//object
 alert(typeof 'zhangsan')//string
 var i=true;
 alert(i)//boolean
 alert(typeof 1);//number
 var a;
 alert(typeof a);//undefined
 function a(){};
 alert(typeof a)// function
 ```
#### 2、举例三种强制类型转化和二种隐式类型转化
```js
//  强制类型转化
     parseInt()
     parseFloat()
     Number();
    //  隐式类型转化
    -0 ,*1,/1,==,!!
```
#### 3、split和jion的区别
```js
// split切割成数组的形式
 'zhangsan'.split('')//["z", "h", "a", "n", "g", "s", "a", "n"]
   // jion将数组转换成字符串
   [1,2,3,4,5].jion(',')//'1,2,3,4,5'

```
#### 4、数组的方法 push、pop、unshift、shift
```js
//push()尾部添加 
//pop()尾部删除
//unshift()头部添加 
//shift()头部删除
```
#### 5、事件绑定和普通事件有什么区别？
```js
//   普通添加事件 ：
 btn=docuemnt.getElementById('hello');
 btn.onclick=function(){
     alert(1);
 }
 btn.onclick=function(){
     alert(2);
 }
 //执行上面的代码只会 alert 2
//  事件绑定方式添加事件：
 btn.addEventListen('click',function(){
     alert(1);

 },flase)
btn.addEventListen('click',function(){
    alert(2);
},flase)
//会先执行alert(1),再执行alert(2);
//普通添加事件的方法不支持添加多个事件，
//最下面的事件会覆盖上面的，
// 而事件绑定
//（addEventListener）方式添加事件可以添加多个。
//addEventListener 不兼容低版本 IE
//普通事件无法取消
//addEventLisntener 还支持事件冒泡+事件捕获
```
#### 6、IE和DOM事件流的区别
```js
// 1 执行顺序不一样
// 2 参数不一样
// 事件加不加on
//this指向问题
```
#### 7、IE和标准下有哪些兼容性代码
```js
 var e=e||window.event;
 var target=e.target||e.srcElement;
document.documentElement.clientWidth||document.body.clientWidth;
``` 
#### 8、call和apply的区别
```js
//call方法：
// 语法： call(thisObj,obj1,obj2...)
//定义 ： 调用一个对象的一个方法，以另一个对象替换当前对象
// 说明：call方法可以用来代替另一个对象调用一个方法。call方法可将一个函数的对象上下文从初始的上下文改变为由thisObj指定的新对象。
// 如果没有提供thisObj参数，那么Global对象被用作thisObj;

//  apply方法：
// 语法：apply(thisObj,[argArray])
// 定义：应用某一个对象的一个方法,用另一个对象替换当前对象
// 说明: argArray不是一个有效的数组或者不是arguments对象,那么将导致一个TypeError.
// 如果没有提供arrArray和thisObj任何一个参数,那么Global对象将用作thisObj,并且无法被传递任何参数.
```
#### 9、b 继承 a 的方法
```js
 function A(name,age){
     this.name=name;
     this.age=age;
 }
 A.prototype.show=function(){
     alert("父级方法");
 }
 function B(age,name,job){
     this.job=job;
     A.call(this,agruments);
 }
 B.prototype=new A();
 var b = new A(14,'侠客行');
 var a = new B(15,'狼侠','侠客');
 A.show();//"父级方法"
 B.show();//"父级方法"

```
#### 10、如何阻止冒泡和默认事件
```js
canceBubble()只支持IE,,return false,stopPropagation();
```
#### 11、添加、删除、替换、插入到某个节点的方法
```js
// 添加
 obj.appendChild()
 //删除
 obj.removeChild()
 // 替换
 obj.replaceChild()
 // 插入
 obj.insertBefore()
```
#### 12、javascript 本地对象，内置对象、宿主对象
```js
本地对象为:array obj regexp 等可以new 实例化
内置对象为: gload Math等不可以实例化
 宿主为浏览器自带的:document、window
```
#### 13、window.onload和window.ready的区别
```js
-window.onload:是在dom文档树加载完和所有文件加载完之后执行一个函数
-docuemnt.ready:原生中没有这个方法，
jQuery中有$().ready(callback),在文档树加载完之后执行一个函数
（注意，这里面的文档树加载完不代表全部文件加载完）
$(document).ready要比window.onload先执行
window.onload只能出来一次,$(docuemnt).ready可以出现多次
```
#### 14、"=="和"==="的区别
```js
"=="会自动转换类型
"==="不会
```
#### 15、javascript的同源策略
```js
一段脚本只能读取来自同一来源的窗口和文档的属性，这里的同一来源指的是主机号，协议和端口号的组合为一样
```
#### 16、JavaScript 是一门什么样的语言，它有哪些特点？
```js
javaScript 一种直译式脚本语言，是一种动态类型、弱类型、
基于原型的语言，内置支持类型。
它的解释器被称为 JavaScript 引擎，
为浏览器的一部分，广泛用于客户端的脚本语
言，最早是在 HTML 网页上使用，
用来给 HTML 网页增加动态功能。JavaScript 兼容于
ECMA 标准，因此也称为 ECMAScript。
1.是一种解释性脚本语言（代码不进行预编译）。
2.主要用来向 HTML（标准通用标记语言下的一个应用）页面添加交互行为
3.可以直接嵌入 HTML 页面，但写成单独的 js 文件有利于结构和行为的分离。
4.跨平台特性，在绝大多数浏览器的支持下，可以在多种平台下运行（如 Windows、
Linux、Mac、Android、iOS 等）。
```
#### 17、javascript的数据类型是什么？
```js
基本数据类型:String,Boolean,Number,Undefinded,Null
引用数据类型:Object(Array,Date,RegExp,Function)
如判断某变量是否为数组数据类型:
方法1:判断其是否具有"数组性质",如slice()方法。可自己给该变量定义slice方法
所以有时会失效
方法2:obj instanceof Array 在某些IE版本不正确
方法3:在ECMAscript5中定义了新方法Array.isArray()，保证其兼容性，最好的方法如下
if(typeof Array.isArray==="undefined"){
    Array.isArray=function(arg){
        return Object.prototype.toString.call(arg)==="[object Array]";
    };
}
```
#### 18、已知ID的input输入框，希望获取这个输入的输入值，怎么做?
```js
document.getElementById("Id").value

```
#### 19、希望获取到页面中所有的checkbox怎么做?(不使用第三方框架)
```js
var domLst=document.getElementByTagName('input');
var checkBoxList=[];
var len=domList.length;
when(len--){
    if(domList[len].type=="checkbox"){
        checkboxList.push(domList[len]);
    }
}
```
#### 20、设置一个已知的ID的DIV的html内容为xxx，字体颜色设置黑色（不使用第三方框架）
```js
var dom=docuemnt.getElementById("ID");
dom.innerHTML="xxxx";
dom.style.color="#000";
```















