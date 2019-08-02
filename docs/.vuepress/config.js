module.exports = {
  title: 'ES2019(ES10)标准中文翻译',
  description: 'ecma262-10th中文',
  head:[
    ['link', { rel: "shortcut icon", href: "favicon.ico"}]
  ],
  themeConfig: {
    repo: 'libertyAlone/ecma-262-10th-CN',
    docsDir: 'docs',
    lastUpdated: '最近更新：',
    sidebar: [
      {
        title: '介绍',
        path: '/introduction/',
        sidebarDepth: 2
      },
      {
        title: '1.范围',
        path: '/c1-Scope/',
      },
      {
        title: '2.一致性',
        path: '/c2-Conformance/',
      },
      {
        title: '3.规范的引用',
        path: '/c3-Normative-References/',
      },
      {
        title: '4.概览',
        path: '/c4-Overview/',
        children: [
          {
            title: '4.1 Web脚本',
            path: '/c4-Overview/4.1-web-scripting',
          },
          {
            title: '4.2 ECMAScript概览',
            path: '/c4-Overview/4.2-ECMAScript-Overview',
          }
        ]
      }
    ]
  }
}