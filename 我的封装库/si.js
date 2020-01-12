/**
 * 封装自己的jq
 */

 // 传入选择器，返回一个伪数组
function $(selector) {
    // return document.querySelectorAll(selector);
    // 这样返回的是一个节点的对象 NodeList(10) [li#one, li, li.main, li, li, li.main, li, li.content, li, li.main]
    // 直接操作这个节点对象是不可取的  本身自带的有成员，自己添加进去的成员可能覆盖别人的也可能被别人覆盖
    return new Init(selector);
    // 返回一个Init构造函数的伪数组  需要我们自己写一个Init构造函数的伪数组
}
 
// 写一个我们自己的Init构造函数的伪数组
function Init(selector) {
    let dom = document.querySelectorAll(selector);   // 返回的是节点对象
    // 需要把节点对象转换成Init对象
    for (let i = 0; i < dom.length; i++){
        this[i] = dom[i];  // 把节点对象循环遍历添加到Init对象对象中
    }
    this.length = dom.length;
}

/**
 * jq中的each方法  arr.each(e=>{})
*/
Init.prototype.each = function (fn) {
    for (let i = 0; i < this.length; i++){
        fn(i, this[i]);
    }
    return this;
}

/**
 * jq中的css方法有两个参数   属性名  属性值
 */
Init.prototype.css = function (property, value) {
    // 如果只有一个实参，就是获取  获取的时候，默认是获得伪数组里面的第0个的样式
    if (value === undefined) {
        let cssStyle = window.getComputedStyle(this[0]);   
        return cssStyle[property];   // 返回当前项的属性值
    } else {
        // 就是传递了两个实参，就是设置操作 - 把伪数组里面的所有的元素都设置
        this.each((i, e) => {
            e.style[property] = value;
        })
        return this;
    }
}

/**
 * jq中   添加类名   jq对象.addClass(类名)
 */
Init.prototype.addClass = function (className) {
    this.each((i, e) => {
        e.classList.add(className);
    })
    return this;
}

/**
 * jq中   移除类名   jq对象.removeClass(类名)
*/
Init.prototype.removeClass = function (className) {
    this.each((i, e) => {
        e.classList.remove(className);
    })
}

/**
 * jq中   切换类名   jq对象.toggleClass(类名)
 */
Init.prototype.toggleClass = function (className) {
    this.each((i, e) => {
        e.classList.toggle(className);
    })
}

/*
  作业：
    封装注册事件
      each 里面  addEventListener

    封装attr和prop
      仿照css方法
    封装 text和html和val
      仿照css方法
    实现链式编程
*/

/**
 * jq中 注册事件  jq对象.on(事件类型,()=>{})
 */
Init.prototype.on = function (eventType,fn) {
    this.each((i, e) => {
        e.addEventListener(eventType,fn);
    })
}

/**
 * 封装attr和prop   
 * attr 非开关属性   获取：jq对象.attr(属性名)      设置：jq对象.attr(属性名,属性值)
 * prop 开关属性     获取：jq对象.prop(属性名)      设置：jq对象.prop(属性名,属性值)
 */
Init.prototype.attr = function (property,value) {
    if (value === undefined) {
        // 元素.getAttribute()
        return this[0].getAttribute(property);
    } else {
        // 元素.setAttribute()
        this.each((i, e) => {
            e.setAttribute(property, value);
        })
    }
}
Init.prototype.prop = function (property, value) {
    if (value === undefined) {
        return this[0][property];
    } else {
        this.each((i, e) => {
            e[property] = value;
        })
        return this;
    }
}

/**
 * 封装 text和html和val    jq.text()
 */
Init.prototype.text = function (value) {
    if (value === undefined) {
        return this[0].innerText;
    } else {
        this.each((i, e) => {
            e.innerText = value;
        })
    }
}

Init.prototype.html = function (value) {
    if (value === undefined) {
        return this[0].innerHTML;
    } else {
        this.each((i, e) => {
            e.innerHTML = value;
        })
    }
}

Init.prototype.val = function (inputvalue) {
    if (inputvalue === undefined) {
        return this[0].value;
    } else {
        this.each((i, e) => {
            e.value = inputvalue;
        })
    }
}
