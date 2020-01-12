




// $方法
function $(selctor){

  return new Init(selctor);       //返回一个伪数组，实质就是一个（键为索引值）的对象，

}


//构造函数
function Init(selctor){

  let doms = document.querySelectorAll(selctor);
   for(let i = 0; i < doms.length; i++){
         this[i] = doms[i];   
            //键  = 值
   } 
     this.length = doms.length;

}





   //构造函数的原型对象上的方法，只有这个构造函数的实例对象才能调用，所以里面的this一定是指向实例对象
Init.prototype.jqEach = function(fn){
       
  for(let i = 0; i < this.length; i++){

       fn(this[i] , i);  
       // fn(e,i)   
  }
  return this;
}




// 原生js注册事件
// btn.addEventListener('click',function(){
//   console.log(456);
// });

// 用法：：
// let result =ul.querySelectorAll('.good')

// jq注册事件
// 格式：：jq对象.on(事件类型,触发事件的元素的选择器,回调函数);
//     */
//     $('tbody').on('click','.get',function(){ })
//     $('btn').on('click',function(){ })



//  事件委托是个一直存在的元素添加事件的

Init.prototype.on = function(event,children,fn){

           if(fn===undefined){
               fn = children;
            for(let i = 0; i<this.length;i++){

              this[i].addEventListener(event,fn);  
      
            }

           }else{
              //如果是事件委托的话，就是给this注册事件，
              // 根据传进来的后代元素，找出当前元素的后代元素
             this.jqEach((e,i) => {
               
               e.addEventListener(event,function(e){

                let childrens = this.querySelectorAll(children);  //得到的是一个伪数组                            
                let arr = Array.prototype.slice.call(childrens,0);  //得到一个真数组
    
                let flag = arr.indexOf(e.target) != -1  ;         //判断这个数组里面是否有那个事件源
    
                    if(flag){fn.call(e.target) }
                  
                  })
            
              })

                }
             
      
              }
