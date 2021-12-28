/*
 * @Author: zxw
 * @Date: 2021-12-27 13:35:50
 * @LastEditors: zxw
 * @LastEditTime: 2021-12-28 10:12:58
 * @Description: background
 */

chrome.runtime.onInstalled.addListener(function() {
  console.log('插件已被安装')
  // storage 中设置值
  chrome.storage.sync.set({ color: "#3aa757" }, function() {
    console.log("storage init color value")
  })
  // 为特定的网址显示图标
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "baidu.com" }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ])
  })
})

chrome.browserAction.setBadgeText({ text: "new" });
chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });

chrome.contextMenus.create({
  id: "1",
  title: "Test Context Menu",
  contexts: ["all"]
})

// 分割线
chrome.contextMenus.create({
  type: "separator"
})

// 父级菜单
chrome.contextMenus.create({
  id: "2",
  title: "Parent Context Menu",
  contexts: ["all"]
})

chrome.contextMenus.create({
  id: "21",
  parentId: "2",
  title: "Child Context Menu1",
  contexts: ["all"]
})

chrome.contextMenus.create({
  id: "3",
  title: "使用百度搜索：%s",
  contexts: ["selection"],
  onclick: function (params) {
    chrome.tabs.create({
      url: "https://www.baidu.com/s?ie=utf-8&wd=" + encodeURI(params.selectionText)
    })
  }
})

chrome.notifications.create(null, {
  type: "basic",
  iconUrl: "icons/logo.png",
  title: "喝水小助手",
  message: "看到此消息的人可以和我一起来喝一杯水"
})

function someMethod() {
  console.log('someMethod')
}

const views = chrome.extension.getViews({ type: 'popup' })
console.log("views", views)
if (views.length > 0) {
  console.log(views[0].location.href)
}

chrome.runtime.onConnect.addListener(function (port) {
  console.assert(port.name == "knockknock")
  port.onMessage.addListener(function (msg) {
    console.log("msg", msg)
    if (msg.joke === "Knock knock") {
      port.postMessage({ question: "Who's there?" })
    } else if (msg.answer === "Madame") {
      port.postMessage({ question: "Madame who?" })
    } else if (msg.answer === "Madame... Bovary") {
      port.postMessage({ question: "I don't get it." })
    }
  })
})

// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   chrome.tabs.sendMessage(
//     tabs[0].id,
//     { greeting: "hello，我是后台，主动发消息给content-script" },
//     function (response) {
//       console.log(response?.farewell)
//     } 
//   )
// })

// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     console.log(sender.tab ? 
//       "from a content script:" + sender.tab.url :
//       "from the extension"
//     )
//     if (request.greeting.indexOf("hello") !== -1) {
//       sendResponse({ farewell: "goodbye" })
//     }
//   }
// )