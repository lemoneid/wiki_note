/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    'Home',
    {
      type: 'category',
      label: '电路设计',
      items: [
        'MOS管小知识',
      ],
    },
    {
      type: 'category',
      label: '队务管理',
      items: [
        '四校交流-策划案',
        '四校交流-策划案-正式',
        '出展活动-经验总结',
      ],
    },
    {
      type: 'category',
      label: '嵌入式开发',
      items: [
        'C与STM32常用宏定义',
      ],
    },

    {
      type: 'category',
      label: '高效工作',
      items: [
        //'我是如何做数据容灾的',
      ],
    },
    {
      type: 'category',
      label: '软件开发',
      items: [
        '双系统极简安装指南',
      ],
    },

    {
      type: 'category',
      label: '生活',
      items: [
        '一些观点',
      ],
    },

    {
      type: 'category',
      label: '小技巧',
      items: [
        'Node.js和npm的安装与卸载（MacOS）',
      ],
    },

  ],
};

//'unlist/博客转至GitBook',
//'unlist/浅谈Bitcron博客平台',
//'unlist/基于docsify搭建个人Wiki',
