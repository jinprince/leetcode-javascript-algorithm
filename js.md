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
#### 41、Javascript 中 callee 和 caller 的作用？
```js
caller 是返回一个对函数的引用，该函数调用了当前函数
callee是返回正在被执行的function函数，也就是所有指定的function对象的正文。
```
#### 42、写出简单描述 html 标签（不带属性的开始标签和结束标签）的正则表达式，并将以下字符串中的 html 标签去除掉
```js
var reg=/<\/?\w+\/?>/gi;
var str="<div>这里是div<p>里面的段落</p></div>"
console.log(str.replace(reg,""));//"这里是div里面的段落"
```
#### 43、截取字符串 abcdefg 的 efg
```js
var str="abcdefg";
console.log(str.substring(4));
```
#### 44、列举浏览器对象模型 BOM 里常用的至少 4 个对象，并列举 window对象的常用方法至少 5 个
```js
// 浏览器对象模型BOM:
window,document,location,screen,history,navigator
//window对象的常用方法：
alert(),confirm(),prompt(),open(),close()
```
#### 45、简述创建函数的几种方式
```js
// 第一种(函数声明)
function sum(num1,num2){
    return num1+num2;
}
//第二种(函数表达式)
var sun=function(num1,num2){
    return num1+num2;
}
//第三种(函数对象模式)
var sum=new Function("num1","num2","return num1+num2");
```
#### 46、iframe 的优缺点？
```js
优点：
1、解决加载缓慢的第三方内容如图标和广告等的加载问题
2、Security sandbox
3、并行加载脚本
缺点：
1、iframe会阻塞主页面的Onload事件
2、即时内容为空，加载也需要时间
3、没有语意

```
#### 47、请你谈谈 Cookie 的弊端？
```js
缺点：
1、Cookie数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉。
2、安全性问题。如果cooKie被人拦截了，那人就可以取得所有的session信息。即使加密也于事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。
3、有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器，如果我们把这个计数器保存在客户端，那么它起不到任何作用。

```
#### 48、js 延迟加载的方式有哪些？
```js
1、defer和async
2、 动态创建 DOM 方式（创建 script，插入到 DOM 中，加载完毕后 callBack
3、按需异步载入js
```
#### 49、documen.write 和 innerHTML 的区别？
```js
document.write只能重绘这个页面
innerHTML可以重绘页面的一部分
```
#### 50、事件委托是什么？
```js
让利用事件冒泡的原理，
让自己的所触发的事件，
让他的父元素代替执行！
```
#### 51、闭包是什么，有什么特性，对页面有什么影响？
```js
闭包就是能够读取其他函数内部变量的函数。本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
function outer(){
    var num=1;
    function inner(){
        var n=2;
        alert(n+num);
    }
    return inner;
}
outer()();//弹出3
```
#### 52、解释jsonp的原理，以及为什么不是真正的ajax。
```js
动态创建script标签，回调函数
ajax是页面无刷新请求数据操作。
```
#### 53、javascript的本地对象，内置对象和宿主对象
```js
本地对象为array obj regexp等可以new 实例化
内置对象为gload Math 等不可以实例化的
宿主为浏览器自带的document,window等。
```
#### 54、字符串反转，如将'12345678'转为'87654321'
```js
先将字符串转换为数组 split()，
利用数组的反序函数 reverse()颠倒数组，
再利用 jion() 转换为字符串
var str='12345678';
str=str.split('').reverse().join('');
```
#### 55、将数字 12345678 转化成 RMB 形式 如： 12,345,678
```js
//思路：先将数字转为字符，
//  str= str + '' ;
//利用反转函数，每三位字符加一个 ',
// '最后一位不加；
// re()是自定义的反转函数，最后再反转回去！
  function re(str){
      return str.split('').reverse().join('');
  }
  function toRMB(num){
      var temp="";
      var str=re(num);
      for(var i=1;i<str.length;i++){
          temp+=str[i-1];
          if(i%3==0&&i!str.length){
              temp+=',';
          }
      }
      return re(temp);
  }
  console.log(toRMB(12345678));
```
#### 56、下面结果是
```js
var name = 10; var obj = {} console.log(name + 10 + obj )
结果是:'1010[object Object]'
```
#### 57、生成 5 个不同的随机数；
```js
//5 个不同的数，每生成一次就和前面的所有数字相比较，
//如果有相同的，则放弃当前生成的数
var num1=[];
for(var i=0;i<5;i++){
    num1[i]=Math.floor(Math.random()*10)+1;
    for(var j=0;j<i;j++){
        if(num1[i]==num1[j]){
            i--;
        }
    }
}

```
#### 58、如何在 HTML 中添加事件，几种方法？
```js
1、标签之中直接添加onclick="fun()";
2、JS添加Eobj.onclick=method;
3、现代事件：IE：obj.attachEvent('onclick',method);
     FF:obj.addEventListenr('click',method,false);
```






















