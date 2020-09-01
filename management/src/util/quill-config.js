
// toolbar工具栏的工具选项（默认展示全部）
const toolOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    [{ 'clean': '源码编辑' }],
    ['link', 'image', 'video'],
    ['sourceEditor']     //新添加的工具
];

const handlers = {
    shadeBox: null,
    sourceEditor: function () {
        const reg = /\<br\>/g,
            container = this.container,
            firstChild = container.nextElementSibling.firstChild;
        if (!this.shadeBox) {
            let shadeBox = this.shadeBox = document.createElement('div');
            shadeBox.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); cursor:pointer';
            container.style.position = 'relative';
            shadeBox.addEventListener('click', function () {
                this.style.display = 'none';
                firstChild.innerHTML = firstChild.innerText.trim();
            }, false);
            container.appendChild(shadeBox);
            let innerHTML = firstChild.innerHTML;
            innerHTML = innerHTML.replace(reg, '');
            firstChild.innerText = innerHTML;
        } else {
            let innerHTML = firstChild.innerHTML;
            innerHTML = innerHTML.replace(reg, '');
            firstChild.innerText = innerHTML;
            this.shadeBox.style.display = 'block';
        }
    }
};


export default {
    placeholder: "请输入...",
    theme: 'snow',  // 主题
    modules: {
        toolbar: {
            container: toolOptions,  // 工具栏选项
            handlers: handlers  // 事件重写
        }
    },
    initButton: function () {      //在使用的页面中初始化按钮样式
        const sourceEditorButton = document.querySelector('.ql-sourceEditor');
        sourceEditorButton.style.cssText = "width:10px; #ccc; border-radius:5px;";
        sourceEditorButton.innerText = "";

        //这里也可以直接引用矢量图
        //像我开发的项目用的是element-ui框架，我直接用下面的方法去初始化样式
        sourceEditorButton.classList.add('el-icon-edit-outline');
        sourceEditorButton.title = "源码编辑";
    },
    register(q) {
        //注册标签(因为在富文本编辑器中是没有div,table等标签的，需要自己去注册自己需要的标签)
        class div extends q.import('blots/block/embed') { }
        class table extends q.import('blots/block/embed') { }
        class tr extends q.import('blots/block/embed') { }
        class td extends q.import('blots/block/embed') { }
        div.blotName = div.tagName = 'div';
        table.blotName = table.tagName = 'table';
        tr.blotName = tr.tagName = 'tr';
        td.blotName = td.tagName = 'td';
        q.register(div);
        q.register(table);
        q.register(tr);
        q.register(td);
    },
};