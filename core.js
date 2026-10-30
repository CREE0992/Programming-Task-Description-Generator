/* 编程任务说明生成器: deterministic business rules. MIT License. */
(function(){
'use strict';
const H=typeof module==='object'&&module.exports?require('./common.js'):globalThis.OPC;
const {clone,esc,num,money,lines,choices,required,tableRows,metric,note,safeName,csv,parseCSV,day,today,unique,replaceTokens,documentHTML,crc32,zipBytes}=H;
const process=function process(d){
 required(d.goal,'任务目标');const checks=lines(d.acceptance);if(!checks.length)throw Error('请至少填写一项验收条件');const text='# 编程任务\n\n## 目标\n'+d.goal+'\n\n## 相关文件\n'+d.files+'\n\n## 当前行为和输入\n'+d.inputs+'\n\n## 修改边界\n'+d.constraints+'\n\n## 验收条件\n'+checks.map(x=>'- [ ] '+x).join('\n')+'\n\n请先阅读相关代码；只修改与任务直接有关的内容。完成后列出实际执行的验证及尚未验证的事项。';
 return {metrics:[metric('验收条件',checks.length)],sections:[note('可复制的任务说明',text)],files:[{name:'编程任务.md',text}]};
};
const api={process};
if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.Core=api;
})();
