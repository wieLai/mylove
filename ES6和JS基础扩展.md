# ES6和JS基础扩展

![img](assets/timg-1558287255977.jpg)



## 数组扩展

![img](assets/timg.jpg)

###  扩展运算符

扩展运算符（spread）是三个点（`...`）, 可用于 数组 / 对象 /Set 等结构；

下面开始在数组中应用扩展运算符



**（1）简单的应用**

```js
var arr = [1,2,3];

console.log(...arr); // 输出 1,2,3
```



**（2）复制数组**

```js
var arr = [1,2,3];

// 1.使用concat合并数组会返回一个新的数组
// 由于传的是空数组，所以返回的数组元素都是arr的，
// 所以相当于复制出来一份arr数组, 并赋值给arr2
var arr2 = arr.concat([]);

// 2.ES6 的方法
// 把arr数组展开到一个新的空数组中
var arr3 = [...arr];
```



**（3）合并数组**

```js
var arr = [1,2,3];
var arr2 = [4,5,6];

// 1.es5的方法，使用数组原生的concat
arr.concat(arr2) // 输出 [1, 2, 3, 4, 5, 6]

// 2.ES6 的合并数组
[...arr, ...arr2]
```



###  数组去重（重点）

> 注意：面试题必考

```js
var arr = [1,1,2,2,3,4];

// 1.使用循环判断
var arr2 = [];

for(var i = 0; i < arr.length; i++){
    // 判断arr2中是否已经存在当前数字 (arr[i])
    if(arr2.indexOf(arr[i]) === -1){
    	arr2.push(arr[i]);
    }
}

console.log(arr2); // 输出 [1,2,3,4]；

// 2.使用Set对象去除数组的重复成员
var arr3 = [...new Set(arr)];

```



上面第二种方法说明:

1.`Set`是ES6标准的一种新的数据结构，它类似于数组，但是成员的值都是唯一的，没有重复的值；

2.`Set`函数可以接受一个数组，它会帮我们去除数组的重复成员，最终返回一个`Set`类型的类数组实例；

```js
new Set(arr) // 输出 Set(4) {1, 2, 3, 4}
```

`Set`类型实例和数组一样也可以使用三个点(...）来展开，所以把`Set`展开到一个新数组里实现去重

```js
[...new Set(arr)] // 输出 [1, 2, 3, 4]
```



### 少数Map循环（重点）

> 注意：处理数组类型的数据必备



现有以下数组`arr`，要求给数组每项加 1

```js
var arr = [1,2,3,4] // 要求得到一个新数组，值为[2,3,4,5]

// 1.循环添加
var arr2 = [];

arr.forEach(v => {
    arr2.push(v + 1);
})

console.log(arr2);

// 2.使用数组的map方法返回新的数组
var arr3 = arr.map(v => {
    return v + 1;
})
```



Map方法使用注意：

1. map是ES5数组原生的方法，不是ES6的
2. map接收的是一个函数，使用方法和forEach很像，参数`v`代表当前项
3. 和forEach不一样的是，map方法会返回一个新数组，新数组的元素由return来决定，**map方法的函数必须要 调用return**



> 练习：处理商品价格，如100 = 100.00



### 数组固定长度

```js
var arr = [1,2,3,4,5];

// 给数组前面添加一项
arr.unshift(0); // arr = [0, 1, 2, 3, 4, 5]

// 固定数组的长度只有5
if(arr.length > 5){
	arr.length = 5; // arr = [0, 1, 2, 3, 4]
}

```



### 判断是否是数组

```js
var arr = [1,2,3];

// 使用Array函数的isArray方法
Array.isArray(arr); // true, 

// 非数组则返回false
Array.isArray(123); // false, 
```





##  对象扩展

![img](assets/timg-1558287464540.jpg)



### 扩展运算符

扩展运算符不仅可以用于数组，还可以用于对象。使用方式是在对象前面加上三个点（...）；即可和数组一样展开内部元素；

不一样的是对象内部是 键值（key/value）对，所以直接输出会报错



**（1）简单应用**

```js
var obj = {a: 1, b: 2, c: 3};

console.log(...obj) // 报错
```



**（3）复制对象**

```js
var obj = {a: 1, b: 2, c: 3};

// 1.ES5的方法
// Object.assign方法参数接收多个对象，并且把所有对象合并到第一个参数
// 并返回第一个参数
var obj2 = Object.assign({}, obj); // {a: 1, b: 2, c: 3};

// 2.ES6的方法
// 把obj展开到一个新的对象里面
var obj3 = {...obj};
```



**（4）合并对象**

```js
var obj = {a: 1, b： 2}；
var obj2 = {c: 3, d: 4};

// 1.ES5方法
var obj3 = Object.assign(obj, obj2);

// 2.ES6的方法
var obj4 = {...obj, ...obj2}
```



### 解构赋值(重点)

ES6 允许按照一定模式，从对象中提取值，对变量进行赋值，这被称为解构；



以前，为变量赋值，只能直接指定值。

```js
var obj = {a: 1, b: 2, c: 3};

let a = obj.a;
let b = obj.b;
let c = obj.c;
```



如果使用解构，我们可以写成下面这样

```js
var obj = {a: 1, b: 2, c: 3};

var {a, b, c} = obj;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

上面写法是从obj对象中解构内部属性，同时把属性声明变量名；



**问题一：解构时对象不存在该属性怎么办**

```js
var obj = {a: 1, b: 2, c: 3};

var {d} = obj;

console.log(d) // 输出 undefined
```



**问题二：当前变量名冲突怎么办**

```js
// let声明变量在作用域内不能重复声明
let a = 99;

// 报错，变量a已经存在
// let {a} = {a: 1, b: 2, c: 3} 

// 冒号后面可以重命名
let {a: newA} = {a: 1, b: 2, c: 3} 
console.log(newA)
```

> 练习：如何解构出对象内部的对象属性 ？



###  对象循环

```js
var obj = {a: 1, b: 2, c: 3};

// 1.使用for in循环对象
for(var v in obj){
    console.log(obj[v]) // 输出 1,2,3
}

// 2.使用Object.keys返回一个由对象的键组成的数组
// 可以调用数组的方法循环对象 (forEach, filter, map)
var arr = Object.keys(obj).map(v => {
    console.log(obj[v]) // 输出 1,2,3
})

```

> 了解 Object.entries方法



### 使用对象代替if判断

要求实现以下需求：

​	当性别gender等于 0 时，输出 ”女“

​	当性别gender等于 1 时，输出 ”男“

​	当性别gender等于 2 时，输出 ”未知“

```js
// 1.直接if判断
function judgeGender(gender){
    if(gender === 0){
        console.log("女")
    }
    if(gender === 1){
        console.log("男")
    }
    if(gender === 2){
        console.log("未知")
    }
}


judgeGender(2) // 输出 “未知“
```



上面的方法如果只是几个判断还好，如果需要判断10个，20个场景的话代码就没法维护了，上面的代码可以优化成下面这样

```js
// 2.对象代替if
function judgeGender(gender){
    var data = {
        0: "女",
        1: "男",
        2: "未知",
    }   
    console.log(data[gender])
}

judgeGender(2) // 输出 “未知“
```

这样我们就不需要去增加if判断，只需要关心data对象即可；



> 练习：根据指令执行不同的行为



### 判断是否是对象

```js
var a = 123;
var b = {a: 1};

// 利用对象的原型方法
console.log(Object.prototype.toString.call(a) === "[object Object]") // false
console.log(Object.prototype.toString.call(b) === "[object Object]") // true
```



## 数组对象综合应用（重点）

要求实现以下需求：

给下面的数组每一项都添加一个学校`school`属性，值等于`itcast`

```js
var students = [
	{name: "小明", age: 18},
    {name: "小红", age: 18},
    {name: "小天", age: 18},
]
```



```js
var newStudents = students.map(v => {
    // v 是对象，把对象解构到一个新对象里面
    // 再给新对象添加一个新的school属性
    return {
        ...v,
        school: "itcast"
    };
});
    
console.log(newStudents); // 输入的数组每项多了 school: "itcast"
```



##  回调函数和promise

什么是回调函数？

> 参考ajax

### promise对象

```js
// Promise Es6新对象 （好像的set对象输入新的内容）
// Promise方法接收一个函数
// 并且函数接收两个参数
var promise = new Promise(function(resolve, reject){
    $.ajax({
        url: "https://api.github.com/users",
        success: function(res){
            var res = 60;
            // resolve是一个函数
            resolve(res);
        }
    })
});

// promise对象下都有一个then的方法
// 这个方法接收函数，这是函数是Promise构造函数的resolve
promise.then(function(score){
    if(score >= 60){
        console.log("开始及格，带他去玩");
    }else{
        console.log("不及格，暴打一顿");
    }
})
```

> 在这promise对象里面。then的方法就是构造函数里的resolve



## fetch获取异步数据

用于异步请求接口数据，他是一个promise对象，可以调用.then();

```js
// fetch的初步使用，fetch方法会返回一个promise对象
var promise = fetch("https://api.github.com/users");

// promise对象.then的res是请求的结果
promise.then(function(res){
    // 返回的整个请求的结果，结果里面包含了头信息
    // 如果想要拿到具体的数据需要调用res.json();

    return res.json();

    // promise对象可以无限的处理成功的回调函数,
    // .then里面的函数会依次执行
}).then(function(res){
    console.log(res);
}).catch(function(){
    console.log("请求失败");
})
```

> 注意： fetch返回promise对象就是一个普通的promsie，`.then()可以多次调用, .then的方法会依次执行,`,`下一个then里面函数res，来自于上一个then的函数的return`



> `promise`是用来解决多个回调函数的场景， `fetch`基于`promise`实现，`fetch`方法返回的就是`promise`对象

## 总结

要求：灵活使用新的标准来实现需求，熟练掌握原生对象方法的使用

1. 数组扩展
2. 对象扩展

参考文档： <http://es6.ruanyifeng.com/>

