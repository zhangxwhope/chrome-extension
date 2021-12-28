/*
 * @Author: zxw
 * @Date: 2021-12-27 16:43:46
 * @LastEditors: zxw
 * @LastEditTime: 2021-12-27 16:56:10
 * @Description: panel
 */

document.getElementById("check_jquery").addEventListener("click", function() {
  chrome.devtools.inspectedWindow.eval(
    "jQuery.fn.jquery",
    function (result, isException) {
      if (isException) {
        console.log("The page is not using jQuery")
      } else {
        console.log("The page is using jQuery v" + result)
      }
    }
  )
})

document.getElementById("get_all_resources").addEventListener("click", function() {
  chrome.devtools.inspectedWindow.getResources(function (resources) {
    console.log(resources)
  })
})