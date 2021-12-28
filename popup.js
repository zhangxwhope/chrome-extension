/*
 * @Author: zxw
 * @Date: 2021-12-27 13:56:45
 * @LastEditors: zxw
 * @LastEditTime: 2021-12-28 09:08:51
 * @Description: popup
 */

const changeColor = document.getElementById("changeColor")

changeColor.onclick = function (el) {
  chrome.storage.sync.get("color", function (data) {
    const { color } = data
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'document.body.style.backgroundColor = "' + color + '";'
      })
    })
  })
}

const bg = chrome.extension.getBackgroundPage()
bg.someMethod()