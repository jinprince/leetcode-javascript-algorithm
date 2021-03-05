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
#### 21、当一个DOM节点被点击时候，我们希望能够执行一个函数，我们应该怎么做？
```js
// 方法1：直接在DOM里绑定事件：
<div onclick="test()"></div>
在js里通过onclick绑定:xxx.onclick=test
通过事件添加进行绑定：addEventListener(xxx,'click',test)
javascript的事件流模型都有什么？
"事件冒泡":事件开始由最具体的元素接受，然后逐级向上传播
"事件捕捉":事件由最不具体的节点先接收，然后逐级向下，一直到最具体的
"DOM事件流":三个阶段：事件捕捉，目标阶段，事件冒泡
```
#### 22、 看下列代码输出为何？解释原因？
```js
var a;
alert(typeof a);//undefined
alert(b);//报错

```
#### 23、解释22题
```js
解释：undefined是一个只有一个值的数据类型，这个值就是"undedined",在使用var
声明变量但并未对其赋值进行初始化时，这个变量的值就是undefined。而b由于未声明将报错。注意未声明的变量和声明了未赋值的是不一样的

```
#### 24 看下列代码,输出什么？解释原因。
```js
var a=null;
console.log(typeof a);//object
解释 ：null是一个只有一个值的数据类型，这个值就是null。表示一个空指针对象，所有用typeof 检测会返回" object";
```
#### 25、看下列代码,输出什么？解释原因。
```js
undefined==null;//true
1==true;//true
2==true;//false
0==false;//true
0=="";//true
NaN==NaN;//false
[]==false;//false
[]==！[]//true

undefined与null相等，但不相等(===)
一个是number一个string时，会尝试将转换为number
尝试boolean转换为number或string，取决于另外一个对比量的类型
所以，对于0，空字符串的判断，建议使用"===","==="会先判断两边的值类型，类型不匹配时为false
 var foo="11"+2-"1";
 console.log(foo);//111
 console.log(typeof foo);//number
```
#### 26、看代码给答案。
```js
var a=new Objec();
a.value=1;
b=a;
b.value=2;
alert(a.value);//2

```
#### 27、已知数组
```js
var stringArray=["this","is","Baidu","Campus"]
alert("this is Baidu Campus");
// 方法：
alert(stringArray.join(""));

```
#### 28、已知有字符串 foo=”get-element-by-id”,写一个 function 将其转化成驼峰表示法”getElementById”。
```js
function fn(str){
    var arr=str.split("-");
    for(var i=1;i<arr.length;i++>){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1);
    }
    str=arr.join("");
    return str;
}
console.log(fn('get-element-by-id'))//返回getElementById

```
#### 29、var numberArray=[3,6,2,4,1,5];
```js
// 实现对数组的倒排，输出[5,1,4,2,6,3];
numberArray.reverse();
//实现对该数组的降序排列，输出[6,5,4,3,2,1];
numberArray.sort((a,b)=>return b-a);
```
#### 29、输出今天的日期，以YYYY-MM-DD的方式，比如今天是2014年9月26日，则输出2014-09-26;
```js
var d=new Date();
//获取年，getFullYear()返回4位数字
var year=d.getFullYear();
//获取月:月份比较特殊，0是1月，11是12月
var month=d.getMonth+1;
//变成两位
month=month<10?"0"+month:month;
//获取日
var day=d.getDate();
day=day<10?"0"+day:day;
alert(year+'-'+month+'-'+day);
```

#### 30、将字符串"<tr><td>{$id}</td><td>{$name}</td></tr>"中{$id}替换成10，{$name}替换成Tony(使用正则表达式)
```js
"<tr><td>{$id}</td><td>{$id}_{$name}</td></tr>".replace(/{\$id}/g,"10").repace(/{\$name}/g,"Tony");
```
#### 31、为了保证页面输出安全，我们经常要对一些特殊的字符串进行转义，请写一个函数escapeHtml,将<,>,&,"进行转义
```js
function escapeHtml(str){
    return str.replace(/[<>" &]/g,function(match){
        switch(match){
            case "<":
            return "&lt;";
            case ">":
            return "&gt;";
            case "&":
            return "&amp;";
            case "\"":
            return "&quot";
        }
    });
}

```
#### 32、foo=foo||bar,这行代码是什么意思？为什么要这样写？
```js
if(!foo) foo=bar;//如果foo存在，值不变，否则把bar的值赋给foo.
短路表达式:作为"&&"和"||"操作符的操作数表达式，这些表达式在进行求值时只要最终的结果已经可以确认是真或者假，求值过程便告终止，这称之为短路求值。
```
#### 33、看下列代码，将会输出什么？(变量声明提升)
```js
var foo=1;
(function(){
    console.log(foo);//undefined
    var foo=2;
    console.log(foo)//2
})()
// 解释：
// 函数声明与变量声明会被 JavaScript 引擎隐式地提升到当前作用域的顶部，但是只提升名
// 称不会提升赋值部分
```
#### 34、用 js 实现随机选取10–100之间的 10 个数字，存入一个数组，并排序。
```js
function randomNum(len,min,max){
          var arr=[];
          for(let i=0;i<len;i++){
              arr.push((min+parseInt(Math.random()*(max-min)+1)));
          }
          return arr.sort((a,b)=>a-b);

      }
      console.log(randomNum(10,10,100));

```
#### 35、把两个数组合并，并删除第二个元素
```js
var array1=['a','b','c'];
var bArray=['d','e','f'];
var cArray=array1.concat(bArray);
cArray.splice(1,1);
```
#### 36、怎么添加、移除、移动、复制、创建和查找节点(原生js)
```js
//创建新节点
creatDocumentFragment()//创建一个DOM片段
createElement()//创建一个具体的元素
createTextNode()//创建一个文本节点
//添加、移除、替换、插入
appendChild() //添加
removeChild() //移除
replaceChild() //替换
insertBefore()// 插入
//查找
getElementsByTagName() //通过标签名称
getElementsByName() //通过元素的Name属性的值
getElementById()//通过元素Id,唯一性

```
#### 37、有这样一个 URL ：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e ， 请写一段 JS 程序提取 URL 中的各个 GET 参数(参数名和参数个数不确定)，将其按 key-value 形 式 返 回 到 一 个 json 结构中，如{a:’1′, b:’2′, c:”, d:’xxx’, e:undefined}。
```js
function serilizeUrl(url){
    var urlObject={};
    if(/\?/.test(url)){
        var urlString=url.substring(url.indexOf("?")+1);
        var urlArray=urlString.split("&");
        for(let i=0;len=urlArray.length;i<len;i++){
            var urlItem=urlArray[i];
            var item=urlItem.split("=");
            urlObject[item[0]]=item[1];
        }
        return urlObject;
    }
    return null;
}

```
#### 38、正则表达式构造函数 var reg=new RegEExp("xxx")与正则表达式字面量var reg=//有什么不同？匹配邮箱的正则表达式？
```js
 当使用RegExp()构造函数的时候，不仅需要转义引号，并且还需要双斜杠。使用正则表达式字面量的效率更高。。
邮箱的正则匹配：
var regMail=/^([a-zA-Z9-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
```
#### 39、看下面代码，给出输出结果
```js
for(var i=0;i<3;i++){
    setTimeout(function(){
        console.log(i);
    },0);
}
输出4,4,4
```
#### 40、写一个 function，清除字符串前后的空格。（兼容所有浏览器）
```js
使用自带接口trim(),考虑兼容性
if(!String.prototype.trim){
    String.prototype.trim=function(){
        return this.replace(/^s\s+/,"").replace(/\s+$/,"");
    }
}

```






















