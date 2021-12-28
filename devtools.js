/*
 * @Author: zxw
 * @Date: 2021-12-27 16:24:24
 * @LastEditors: zxw
 * @LastEditTime: 2021-12-27 17:12:24
 * @Description: devtools
 */

 // 创建扩展面板
 chrome.devtools.panels.create(
   // 扩展面板显示名称
   "DevPanel",
   // 扩展面板icon，并不展示
   "panel.png",
   // 扩展面板页面
   "panel.html",
   function (panel) {
     console.log("自定义面板创建成功")
   }
 )

 // 创建自定义侧边栏
 chrome.devtools.panels.elements.createSidebarPane(
   "All Images",
   function (sidebar) {
     // sidebar.setPage("sidebar.html")
     sidebar.setExpression('document.querySelectorAll("img")', "All Images")
   }
 )