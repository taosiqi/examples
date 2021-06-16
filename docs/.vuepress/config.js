/*
 * @Author: 蒋文斌
 * @Date: 2021-04-04 18:07:23
 * @LastEditors: 蒋文斌
 * @LastEditTime: 2021-04-05 21:59:26
 * @Description: 自动生成
 */

module.exports = {
    base: "/",
    dest: "dist",
    head: [
        ['link', { rel: 'icon', href: '/assets/logo.png' }]
    ],
    title: "测试模版",
    description: "我是介绍",
    themeConfig: {
        logo: "/assets/logo.png",
        navbar: [
            { text: "首页", link: "/" },
            { text: "使用指南", link: "/guide/" },
            { text: "示例", link: "/demo/" },
        ],
        lastUpdated: "Last Updated",
        repo: "taosiqi/upsdk-document",
        repoLabel: "查看源码",
    },
    markdown: {
        lineNumbers: true,
    },
};
