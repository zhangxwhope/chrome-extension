/*
 * @Author: zxw
 * @Date: 2021-12-28 09:16:17
 * @LastEditors: zxw
 * @LastEditTime: 2021-12-28 09:59:34
 * @Description: js
 */

 const port = chrome.runtime.connect({ name: "knockknock" })
 port.postMessage({ joke: "Knock knock" })
 port.onMessage.addListener(function (msg) {
   console.log("msg", msg)
   if (msg.question === "Who's there?") {
     port.postMessage({ answer: "Madame" })
   } else if (msg.question === "Madame who?") {
     port.postMessage({ answer: "Madame... Bovary" })
   }
 })
 
//  chrome.runtime.sendMessage(
//    { greeting: "hello, 我是content-script, 主动发消息给后台" },
//    function (response) {
//      console.log("收到来自后台的回复：" + response)
//    }
//  )

//  chrome.runtime.onMessage.addListener(
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