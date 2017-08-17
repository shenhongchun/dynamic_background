/***
 * 简单封装的获取dom节点的函数getDom
 * @param selector 类型为字符串
 * @returns {*} 当传入的参数包含“#”则返回这个id的DOM节点对象
 *              当传入的参数包含“.”则返回这个class的DOM节点对象集合
 *              当传入的参数不包含“#”和“.”则返回这个标签的DOM节点对象集合
 */
function getDom(selector) {
    var id_reg=/#/,class_reg=/\./;
    if(id_reg.test(selector)){
        return document.getElementById(selector);
    }else if(class_reg.test(selector)){
        return document.getElementsByClassName(selector);
    }else{
        return document.getElementsByTagName(selector);
    }
}
/***
 *
 * @param dom    dom对象
 * @param attrName  属性名
 * @param attrVal   属性值
 * @returns {*}     查询对应属性值
 */
function attr(dom,attrName,attrVal){
    var arg_len=arguments.length;
    if(arg_len===2){
        if(dom.style[attrName]!=""){
            return dom.style[attrName];
        }else{
            if(document.all){
                return dom.currentStyle[attrName];
            }else{
                return getComputedStyle(dom)[attrName];
            }
        }
    }else if(arg_len===3){
        dom.setAttribute(attrName,attrVal);
    }else{
        throw new Error("arguments are wrong");
    }
}
