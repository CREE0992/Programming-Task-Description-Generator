/* Application fields and sample data. MIT License. */
const SPEC={
  "id": "A08",
  "slug": "coding-brief",
  "name": "编程任务说明生成器",
  "desc": "明确修改目标、相关文件、约束和验收条件，生成可直接复用的任务说明。",
  "fields": [
    {
      "key": "goal",
      "label": "这次要实现什么",
      "type": "text",
      "value": "商品列表新增关键词搜索"
    },
    {
      "key": "files",
      "label": "相关文件及用途",
      "type": "textarea",
      "value": "index.html：页面\napp.js：交互逻辑"
    },
    {
      "key": "constraints",
      "label": "不能修改的内容",
      "type": "textarea",
      "value": "保持已有导出功能；不增加外部依赖。"
    },
    {
      "key": "inputs",
      "label": "现有行为与输入样例",
      "type": "textarea",
      "value": "已有商品列表；搜索词示例：水杯。"
    },
    {
      "key": "acceptance",
      "label": "验收条件（每行一项）",
      "type": "textarea",
      "value": "搜索水杯时只显示匹配项\n清空搜索后显示全部商品\n导出功能仍能正常使用"
    }
  ],
  "tables": [],
  "skill": true,
  "dirname": "coding-brief",
  "example": {
    "_files": {},
    "goal": "商品列表新增关键词搜索",
    "files": "index.html：页面\napp.js：交互逻辑",
    "constraints": "保持已有导出功能；不增加外部依赖。",
    "inputs": "已有商品列表；搜索词示例：水杯。",
    "acceptance": "搜索水杯时只显示匹配项\n清空搜索后显示全部商品\n导出功能仍能正常使用"
  },
  "inputTitle": "任务要求",
  "outputTitle": "任务说明",
  "action": "生成任务说明"
};
