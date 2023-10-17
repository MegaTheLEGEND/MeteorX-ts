/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gui.ts":
/*!********************!*\
  !*** ./src/gui.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registergui = void 0;
var step_1 = __webpack_require__(/*! ./step */ "./src/step.ts");
var spider_1 = __webpack_require__(/*! ./spider */ "./src/spider.ts");
function registergui(jetpackguiactive) {
    var guiVisible = false; // Variable to keep track of the visibility of the GUI
    function toggleGui() {
        if (guiVisible) { // If the GUI is visible
            hideGui(); // Hide the GUI
        }
        else {
            showGui(); // Otherwise, show the GUI
        }
    }
    function showGui() {
        hideGui(); // If the GUI is already open, this will hide it.
        var gui = document.createElement("gui"); // Create a new "gui" element
        if (document.pointerLockElement != null) {
            document.exitPointerLock();
        }
        gui.innerHTML = "\n      <gui id=\"myGui\" style=\"width: 100%;height: 100%;position: fixed;top: 0px;left: 0px;z-index: 10;color: white;font-family: Minecraftia, sans-serif;overflow: hidden scroll;background-color: rgba(80, 80, 80, 0.42);background-blend-mode: multiply;background-size: 64px;\">\n      <h1 style=\"text-shadow: 0px 0px 4px;\">MeteorX GUI</h1>\n      <p style=\"font-size: 0.8rem; color: yellow;\">(totally not stolen from plugin manager's gui)</p><p style=\"font-size: 0.8rem; color: yellow;\">ik the gui looks kinda bad for a hacked client but its meteorX alpha ig. i WILL update this gui in the future</p><p style=\"font-size: 0.8rem; color: orangered;\">click on \"Activate\" to activate a hack and click on \"Deactivate\" to deactivate a hack</p>\n      <table style=\"table-layout: fixed; width: 100%;\">\n          <tbody><tr style=\"background: rgb(80, 80, 80);\">\n              <th style=\"text-align: center;\">Hacks</th>\n              <th style=\"text-align: center; width: 15%;\">Activate/Deactivate</th>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Jetpack (hold space to fly) \uD83C\uDF92\uD83D\uDCA8</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"jetpack\">Activate</td>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Step</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"step\">Activate</td>\n          </tr>\n          <tr style=\"box-shadow: grey 0px 2px 0px;\">\n              <td style=\"user-select: text;background-color: #9d00ff30;\">Spider</td>\n              <td style=\"background-color: gray; text-align: center;\" id=\"spider\">Activate</td>\n          </tr>\n      </tbody></table>\n      <a style=\"background: transparent; text-align: center; color: yellow; cursor: pointer; font-family: Minecraftia, sans-serif; text-decoration: underline; border: 0px; margin-right: 1rem; font-size: 1rem;\" href=\"https://github.com/radmanplays/MeteorX/issues/new\" target=\"_blank\">suggest a new feature/hack</a>\n      <a style=\"background: transparent;text-align: center;color: orange;cursor: pointer;font-family: Minecraftia, sans-serif;text-decoration: underline;border: 0px;font-size: 1rem;\" href=\"https://github.com/orgs/EaglerReborn/discussions/9\" target=\"_blank\">version Roadmap</a>\n      \n        </gui>\n      "; // Set the HTML content of the "gui" element
        gui.id = "myGui"; // Set the ID of the "gui" element to "myGui"
        gui.style.width = '100%';
        gui.style.height = '100%';
        gui.style.position = 'fixed';
        gui.style.top = '0px';
        gui.style.left = '0px';
        gui.style.zIndex = '10';
        gui.style.color = 'white';
        gui.style.fontFamily = 'Minecraftia, sans-serif';
        gui.style.overflow = 'hidden scroll';
        gui.style.backgroundColor = 'rgba(80, 80, 80, 0.42)';
        gui.style.backgroundBlendMode = 'multiply';
        gui.style.backgroundSize = '64px';
        document.body.appendChild(gui); // Append the "gui" element to the body of the document
        guiVisible = true; // Set the GUI visibility to true
        var jetpackElement = document.getElementById("jetpack");
        var stepElement = document.getElementById("step");
        var spiderElement = document.getElementById("spider");
        jetpackElement.addEventListener("mouseover", function () {
            jetpackElement.style.cursor = "pointer";
        });
        stepElement.addEventListener("mouseover", function () {
            stepElement.style.cursor = "pointer";
        });
        spiderElement.addEventListener("mouseover", function () {
            spiderElement.style.cursor = "pointer";
        });
        if (jetpackguiactive === false) {
            jetpackElement.innerText = "Activate";
            jetpackElement.style.backgroundColor = "green";
        }
        if ((0, step_1.returnStepToggle)() === false) {
            stepElement.innerText = "Activate";
            stepElement.style.backgroundColor = "green";
        }
        if ((0, spider_1.returnSpiderToggle)() === false) {
            spiderElement.innerText = "Activate";
            spiderElement.style.backgroundColor = "green";
        }
        if (jetpackguiactive === true) {
            jetpackElement.innerText = "Deactivate";
            jetpackElement.style.backgroundColor = "red";
        }
        if ((0, step_1.returnStepToggle)() === true) {
            stepElement.innerText = "Deactivate";
            stepElement.style.backgroundColor = "red";
        }
        if ((0, spider_1.returnSpiderToggle)() === true) {
            spiderElement.innerText = "Deactivate";
            spiderElement.style.backgroundColor = "red";
        }
        stepElement.addEventListener("click", function () {
            if ((0, step_1.returnStepToggle)() !== true) {
                stepElement.innerText = "Deactivate";
                stepElement.style.backgroundColor = "red";
                (0, step_1.setStepToggle)(true);
            }
            else {
                stepElement.innerText = "Activate";
                stepElement.style.backgroundColor = "green";
                (0, step_1.setStepToggle)(false);
            }
        });
        spiderElement.addEventListener("click", function () {
            if ((0, spider_1.returnSpiderToggle)() !== true) {
                spiderElement.innerText = "Deactivate";
                spiderElement.style.backgroundColor = "red";
                (0, spider_1.setSpiderToggle)(true);
            }
            else {
                spiderElement.innerText = "Activate";
                spiderElement.style.backgroundColor = "green";
                (0, spider_1.setSpiderToggle)(false);
            }
        });
        jetpackElement.addEventListener("click", function () {
            // Toggle the jetpackGuiActive state
            // Update the text and background color based on the state
            if (jetpackguiactive !== true) {
                jetpackElement.innerText = "Deactivate";
                jetpackElement.style.backgroundColor = "red";
                jetpackguiactive = true;
            }
            else {
                jetpackElement.innerText = "Activate";
                jetpackElement.style.backgroundColor = "green";
                jetpackguiactive = false;
            }
        });
    }
    function hideGui() {
        if (document.getElementById("myGui")) { // If the "myGui" element exists
            document.getElementById("myGui").remove(); // Remove the "myGui" element from the document
        }
        guiVisible = false; // Set the GUI visibility to false
    }
    window.addEventListener("keydown", function (event) {
        if (event.key === "Shift" && event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) { // If the right Shift key is pressed
            toggleGui(); // Toggle the GUI visibility
        }
        if (event.key === "Escape") { // If the Escape key is pressed
            hideGui(); // Hide the GUI
        }
    });
}
exports.registergui = registergui;


/***/ }),

/***/ "./src/jetpack.ts":
/*!************************!*\
  !*** ./src/jetpack.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerjetpack = void 0;
function registerjetpack(jetpackguiactive) {
    //@ts-ignore
    PluginAPI.require("player");
    var jetpackActive = false;
    window.addEventListener("keydown", function (event) {
        if (event.key.toLowerCase() === " ") {
            jetpackActive = true;
        }
    });
    window.addEventListener("keyup", function (event) {
        if (event.key.toLowerCase() === " ") {
            jetpackActive = false;
        }
    });
    //@ts-ignore
    PluginAPI.addEventListener("update", function () {
        if (jetpackguiactive === false) {
            if (!jetpackActive) {
                return;
            }
            //@ts-ignore
            PluginAPI.player.motionY += 0.2;
            //@ts-ignore
            PluginAPI.player.reload();
        }
    });
}
exports.registerjetpack = registerjetpack;


/***/ }),

/***/ "./src/spider.ts":
/*!***********************!*\
  !*** ./src/spider.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.returnSpiderToggle = exports.setSpiderToggle = exports.registerSpider = void 0;
var spiderToggle = false;
function registerSpider() {
    // @ts-ignore
    PluginAPI.require("player");
    // @ts-ignore
    PluginAPI.addEventListener("update", function () {
        // @ts-ignore
        if (PluginAPI.player.isCollidedHorizontally && spiderToggle == true) {
            // @ts-ignore
            PluginAPI.player.motionY = 0.2;
            // @ts-ignore
            PluginAPI.player.reload();
        }
    });
    // @ts-ignore
    //PluginAPI.addEventListener("key", (event) => {
    //@ ts-ignore
    //if (event.key == 22) {
    //spiderToggle = !spiderToggle
    //if (spiderToggle == true) {
    //displayToChat("§d§l[MeteorX] §r§eEnabled spider.")
    //} else {
    //displayToChat("§d§l[MeteorX] §r§eDisabled spider.")
    //}
}
exports.registerSpider = registerSpider;
//})
//}
function setSpiderToggle(theBoolean) {
    spiderToggle = theBoolean; // yw radman :3
}
exports.setSpiderToggle = setSpiderToggle;
function returnSpiderToggle() {
    return spiderToggle;
}
exports.returnSpiderToggle = returnSpiderToggle;


/***/ }),

/***/ "./src/step.ts":
/*!*********************!*\
  !*** ./src/step.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.returnStepToggle = exports.setStepToggle = exports.registerStep = void 0;
var stepToggle = false;
function registerStep() {
    // @ts-ignore
    PluginAPI.addEventListener("update", function () {
        if (stepToggle == true) {
            // @ts-ignore
            PluginAPI.player.stepHeight = 1;
            // @ts-ignore
            PluginAPI.player.reload();
        }
        else {
            // @ts-ignore
            PluginAPI.player.stepHeight = 0.5;
            // @ts-ignore
            PluginAPI.player.reload();
        }
    });
    // @ts-ignore 
    //PluginAPI.addEventListener("key", (event)=>{ comment out code radman likely won't use
    //if (event.key == 47) {
    //  stepToggle = !stepToggle;
    // if (stepToggle == true) {
    //   displayToChat("§d§l[MeteorX] §r§eEnabled step.")
    // } else {
    //    displayToChat("§d§l[MeteorX] §r§eDisabled step.")
    // }
    // }
    //  })
}
exports.registerStep = registerStep;
function setStepToggle(theBoolean) {
    stepToggle = theBoolean; // yw radman :3
}
exports.setStepToggle = setStepToggle;
function returnStepToggle() {
    return stepToggle;
}
exports.returnStepToggle = returnStepToggle;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var gui_1 = __webpack_require__(/*! ./gui */ "./src/gui.ts");
var spider_1 = __webpack_require__(/*! ./spider */ "./src/spider.ts");
var step_1 = __webpack_require__(/*! ./step */ "./src/step.ts");
var jetpack_1 = __webpack_require__(/*! ./jetpack */ "./src/jetpack.ts");
var jetpackguiactive = false;
console.log("[MeteorX] Loading client...");
(0, gui_1.registergui)(jetpackguiactive);
(0, jetpack_1.registerjetpack)(jetpackguiactive);
(0, spider_1.registerSpider)();
(0, step_1.registerStep)();
console.log("[MeteorX] Finished!");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QStCO0FBQy9CO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjs7Ozs7Ozs7Ozs7QUN0Q2I7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCLEdBQUcscUJBQXFCLEdBQUcsb0JBQW9CO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7Ozs7Ozs7VUN4Q3hCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsWUFBWSxtQkFBTyxDQUFDLDJCQUFPO0FBQzNCLGVBQWUsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqQyxhQUFhLG1CQUFPLENBQUMsNkJBQVE7QUFDN0IsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL2d1aS50cyIsIndlYnBhY2s6Ly9tZXRlb3J4Ly4vc3JjL2pldHBhY2sudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9zcGlkZXIudHMiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9zdGVwLnRzIiwid2VicGFjazovL21ldGVvcngvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWV0ZW9yeC8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWdpc3Rlcmd1aSA9IHZvaWQgMDtcbnZhciBzdGVwXzEgPSByZXF1aXJlKFwiLi9zdGVwXCIpO1xudmFyIHNwaWRlcl8xID0gcmVxdWlyZShcIi4vc3BpZGVyXCIpO1xuZnVuY3Rpb24gcmVnaXN0ZXJndWkoamV0cGFja2d1aWFjdGl2ZSkge1xuICAgIHZhciBndWlWaXNpYmxlID0gZmFsc2U7IC8vIFZhcmlhYmxlIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHZpc2liaWxpdHkgb2YgdGhlIEdVSVxuICAgIGZ1bmN0aW9uIHRvZ2dsZUd1aSgpIHtcbiAgICAgICAgaWYgKGd1aVZpc2libGUpIHsgLy8gSWYgdGhlIEdVSSBpcyB2aXNpYmxlXG4gICAgICAgICAgICBoaWRlR3VpKCk7IC8vIEhpZGUgdGhlIEdVSVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hvd0d1aSgpOyAvLyBPdGhlcndpc2UsIHNob3cgdGhlIEdVSVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNob3dHdWkoKSB7XG4gICAgICAgIGhpZGVHdWkoKTsgLy8gSWYgdGhlIEdVSSBpcyBhbHJlYWR5IG9wZW4sIHRoaXMgd2lsbCBoaWRlIGl0LlxuICAgICAgICB2YXIgZ3VpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImd1aVwiKTsgLy8gQ3JlYXRlIGEgbmV3IFwiZ3VpXCIgZWxlbWVudFxuICAgICAgICBpZiAoZG9jdW1lbnQucG9pbnRlckxvY2tFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuICAgICAgICB9XG4gICAgICAgIGd1aS5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxndWkgaWQ9XFxcIm15R3VpXFxcIiBzdHlsZT1cXFwid2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDBweDtsZWZ0OiAwcHg7ei1pbmRleDogMTA7Y29sb3I6IHdoaXRlO2ZvbnQtZmFtaWx5OiBNaW5lY3JhZnRpYSwgc2Fucy1zZXJpZjtvdmVyZmxvdzogaGlkZGVuIHNjcm9sbDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgwLCA4MCwgODAsIDAuNDIpO2JhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7YmFja2dyb3VuZC1zaXplOiA2NHB4O1xcXCI+XFxuICAgICAgPGgxIHN0eWxlPVxcXCJ0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHg7XFxcIj5NZXRlb3JYIEdVSTwvaDE+XFxuICAgICAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44cmVtOyBjb2xvcjogeWVsbG93O1xcXCI+KHRvdGFsbHkgbm90IHN0b2xlbiBmcm9tIHBsdWdpbiBtYW5hZ2VyJ3MgZ3VpKTwvcD48cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjhyZW07IGNvbG9yOiB5ZWxsb3c7XFxcIj5payB0aGUgZ3VpIGxvb2tzIGtpbmRhIGJhZCBmb3IgYSBoYWNrZWQgY2xpZW50IGJ1dCBpdHMgbWV0ZW9yWCBhbHBoYSBpZy4gaSBXSUxMIHVwZGF0ZSB0aGlzIGd1aSBpbiB0aGUgZnV0dXJlPC9wPjxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuOHJlbTsgY29sb3I6IG9yYW5nZXJlZDtcXFwiPmNsaWNrIG9uIFxcXCJBY3RpdmF0ZVxcXCIgdG8gYWN0aXZhdGUgYSBoYWNrIGFuZCBjbGljayBvbiBcXFwiRGVhY3RpdmF0ZVxcXCIgdG8gZGVhY3RpdmF0ZSBhIGhhY2s8L3A+XFxuICAgICAgPHRhYmxlIHN0eWxlPVxcXCJ0YWJsZS1sYXlvdXQ6IGZpeGVkOyB3aWR0aDogMTAwJTtcXFwiPlxcbiAgICAgICAgICA8dGJvZHk+PHRyIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiByZ2IoODAsIDgwLCA4MCk7XFxcIj5cXG4gICAgICAgICAgICAgIDx0aCBzdHlsZT1cXFwidGV4dC1hbGlnbjogY2VudGVyO1xcXCI+SGFja3M8L3RoPlxcbiAgICAgICAgICAgICAgPHRoIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXI7IHdpZHRoOiAxNSU7XFxcIj5BY3RpdmF0ZS9EZWFjdGl2YXRlPC90aD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgICAgPHRyIHN0eWxlPVxcXCJib3gtc2hhZG93OiBncmV5IDBweCAycHggMHB4O1xcXCI+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInVzZXItc2VsZWN0OiB0ZXh0O2JhY2tncm91bmQtY29sb3I6ICM5ZDAwZmYzMDtcXFwiPkpldHBhY2sgKGhvbGQgc3BhY2UgdG8gZmx5KSBcXHVEODNDXFx1REY5MlxcdUQ4M0RcXHVEQ0E4PC90ZD5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCIgaWQ9XFxcImpldHBhY2tcXFwiPkFjdGl2YXRlPC90ZD5cXG4gICAgICAgICAgPC90cj5cXG4gICAgICAgICAgPHRyIHN0eWxlPVxcXCJib3gtc2hhZG93OiBncmV5IDBweCAycHggMHB4O1xcXCI+XFxuICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInVzZXItc2VsZWN0OiB0ZXh0O2JhY2tncm91bmQtY29sb3I6ICM5ZDAwZmYzMDtcXFwiPlN0ZXA8L3RkPlxcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIiBpZD1cXFwic3RlcFxcXCI+QWN0aXZhdGU8L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICA8dHIgc3R5bGU9XFxcImJveC1zaGFkb3c6IGdyZXkgMHB4IDJweCAwcHg7XFxcIj5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IHRleHQ7YmFja2dyb3VuZC1jb2xvcjogIzlkMDBmZjMwO1xcXCI+U3BpZGVyPC90ZD5cXG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCIgaWQ9XFxcInNwaWRlclxcXCI+QWN0aXZhdGU8L3RkPlxcbiAgICAgICAgICA8L3RyPlxcbiAgICAgIDwvdGJvZHk+PC90YWJsZT5cXG4gICAgICA8YSBzdHlsZT1cXFwiYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IHRleHQtYWxpZ246IGNlbnRlcjsgY29sb3I6IHllbGxvdzsgY3Vyc29yOiBwb2ludGVyOyBmb250LWZhbWlseTogTWluZWNyYWZ0aWEsIHNhbnMtc2VyaWY7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBib3JkZXI6IDBweDsgbWFyZ2luLXJpZ2h0OiAxcmVtOyBmb250LXNpemU6IDFyZW07XFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vcmFkbWFucGxheXMvTWV0ZW9yWC9pc3N1ZXMvbmV3XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+c3VnZ2VzdCBhIG5ldyBmZWF0dXJlL2hhY2s8L2E+XFxuICAgICAgPGEgc3R5bGU9XFxcImJhY2tncm91bmQ6IHRyYW5zcGFyZW50O3RleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogb3JhbmdlO2N1cnNvcjogcG9pbnRlcjtmb250LWZhbWlseTogTWluZWNyYWZ0aWEsIHNhbnMtc2VyaWY7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Ym9yZGVyOiAwcHg7Zm9udC1zaXplOiAxcmVtO1xcXCIgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL29yZ3MvRWFnbGVyUmVib3JuL2Rpc2N1c3Npb25zLzlcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj52ZXJzaW9uIFJvYWRtYXA8L2E+XFxuICAgICAgXFxuICAgICAgICA8L2d1aT5cXG4gICAgICBcIjsgLy8gU2V0IHRoZSBIVE1MIGNvbnRlbnQgb2YgdGhlIFwiZ3VpXCIgZWxlbWVudFxuICAgICAgICBndWkuaWQgPSBcIm15R3VpXCI7IC8vIFNldCB0aGUgSUQgb2YgdGhlIFwiZ3VpXCIgZWxlbWVudCB0byBcIm15R3VpXCJcbiAgICAgICAgZ3VpLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICBndWkuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICBndWkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBndWkuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIGd1aS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIGd1aS5zdHlsZS56SW5kZXggPSAnMTAnO1xuICAgICAgICBndWkuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICBndWkuc3R5bGUuZm9udEZhbWlseSA9ICdNaW5lY3JhZnRpYSwgc2Fucy1zZXJpZic7XG4gICAgICAgIGd1aS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4gc2Nyb2xsJztcbiAgICAgICAgZ3VpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDgwLCA4MCwgODAsIDAuNDIpJztcbiAgICAgICAgZ3VpLnN0eWxlLmJhY2tncm91bmRCbGVuZE1vZGUgPSAnbXVsdGlwbHknO1xuICAgICAgICBndWkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnNjRweCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ3VpKTsgLy8gQXBwZW5kIHRoZSBcImd1aVwiIGVsZW1lbnQgdG8gdGhlIGJvZHkgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgIGd1aVZpc2libGUgPSB0cnVlOyAvLyBTZXQgdGhlIEdVSSB2aXNpYmlsaXR5IHRvIHRydWVcbiAgICAgICAgdmFyIGpldHBhY2tFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqZXRwYWNrXCIpO1xuICAgICAgICB2YXIgc3RlcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0ZXBcIik7XG4gICAgICAgIHZhciBzcGlkZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGlkZXJcIik7XG4gICAgICAgIGpldHBhY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBzdGVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0ZXBFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICB9KTtcbiAgICAgICAgc3BpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoamV0cGFja2d1aWFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIHN0ZXBfMS5yZXR1cm5TdGVwVG9nZ2xlKSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgc3RlcEVsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgc3BpZGVyXzEucmV0dXJuU3BpZGVyVG9nZ2xlKSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICBzcGlkZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoamV0cGFja2d1aWFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgc3RlcF8xLnJldHVyblN0ZXBUb2dnbGUpKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0ZXBFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgc3RlcEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIHNwaWRlcl8xLnJldHVyblNwaWRlclRvZ2dsZSkoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBzdGVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCgwLCBzdGVwXzEucmV0dXJuU3RlcFRvZ2dsZSkoKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHN0ZXBFbGVtZW50LmlubmVyVGV4dCA9IFwiRGVhY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIHN0ZXBFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgKDAsIHN0ZXBfMS5zZXRTdGVwVG9nZ2xlKSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0ZXBFbGVtZW50LmlubmVyVGV4dCA9IFwiQWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBzdGVwRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgKDAsIHN0ZXBfMS5zZXRTdGVwVG9nZ2xlKShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzcGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoKDAsIHNwaWRlcl8xLnJldHVyblNwaWRlclRvZ2dsZSkoKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHNwaWRlckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJEZWFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICgwLCBzcGlkZXJfMS5zZXRTcGlkZXJUb2dnbGUpKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5pbm5lclRleHQgPSBcIkFjdGl2YXRlXCI7XG4gICAgICAgICAgICAgICAgc3BpZGVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgKDAsIHNwaWRlcl8xLnNldFNwaWRlclRvZ2dsZSkoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgamV0cGFja0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGUgamV0cGFja0d1aUFjdGl2ZSBzdGF0ZVxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSB0ZXh0IGFuZCBiYWNrZ3JvdW5kIGNvbG9yIGJhc2VkIG9uIHRoZSBzdGF0ZVxuICAgICAgICAgICAgaWYgKGpldHBhY2tndWlhY3RpdmUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5pbm5lclRleHQgPSBcIkRlYWN0aXZhdGVcIjtcbiAgICAgICAgICAgICAgICBqZXRwYWNrRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgIGpldHBhY2tndWlhY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgamV0cGFja0VsZW1lbnQuaW5uZXJUZXh0ID0gXCJBY3RpdmF0ZVwiO1xuICAgICAgICAgICAgICAgIGpldHBhY2tFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICBqZXRwYWNrZ3VpYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoaWRlR3VpKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUd1aVwiKSkgeyAvLyBJZiB0aGUgXCJteUd1aVwiIGVsZW1lbnQgZXhpc3RzXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15R3VpXCIpLnJlbW92ZSgpOyAvLyBSZW1vdmUgdGhlIFwibXlHdWlcIiBlbGVtZW50IGZyb20gdGhlIGRvY3VtZW50XG4gICAgICAgIH1cbiAgICAgICAgZ3VpVmlzaWJsZSA9IGZhbHNlOyAvLyBTZXQgdGhlIEdVSSB2aXNpYmlsaXR5IHRvIGZhbHNlXG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJTaGlmdFwiICYmIGV2ZW50LmxvY2F0aW9uID09PSBLZXlib2FyZEV2ZW50LkRPTV9LRVlfTE9DQVRJT05fUklHSFQpIHsgLy8gSWYgdGhlIHJpZ2h0IFNoaWZ0IGtleSBpcyBwcmVzc2VkXG4gICAgICAgICAgICB0b2dnbGVHdWkoKTsgLy8gVG9nZ2xlIHRoZSBHVUkgdmlzaWJpbGl0eVxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHsgLy8gSWYgdGhlIEVzY2FwZSBrZXkgaXMgcHJlc3NlZFxuICAgICAgICAgICAgaGlkZUd1aSgpOyAvLyBIaWRlIHRoZSBHVUlcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5yZWdpc3Rlcmd1aSA9IHJlZ2lzdGVyZ3VpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlZ2lzdGVyamV0cGFjayA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlZ2lzdGVyamV0cGFjayhqZXRwYWNrZ3VpYWN0aXZlKSB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG4gICAgdmFyIGpldHBhY2tBY3RpdmUgPSBmYWxzZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGpldHBhY2tBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSBcIiBcIikge1xuICAgICAgICAgICAgamV0cGFja0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgUGx1Z2luQVBJLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoamV0cGFja2d1aWFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICghamV0cGFja0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5tb3Rpb25ZICs9IDAuMjtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5yZWdpc3RlcmpldHBhY2sgPSByZWdpc3RlcmpldHBhY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmV0dXJuU3BpZGVyVG9nZ2xlID0gZXhwb3J0cy5zZXRTcGlkZXJUb2dnbGUgPSBleHBvcnRzLnJlZ2lzdGVyU3BpZGVyID0gdm9pZCAwO1xudmFyIHNwaWRlclRvZ2dsZSA9IGZhbHNlO1xuZnVuY3Rpb24gcmVnaXN0ZXJTcGlkZXIoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIFBsdWdpbkFQSS5yZXF1aXJlKFwicGxheWVyXCIpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKFBsdWdpbkFQSS5wbGF5ZXIuaXNDb2xsaWRlZEhvcml6b250YWxseSAmJiBzcGlkZXJUb2dnbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5tb3Rpb25ZID0gMC4yO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICAvL1BsdWdpbkFQSS5hZGRFdmVudExpc3RlbmVyKFwia2V5XCIsIChldmVudCkgPT4ge1xuICAgIC8vQCB0cy1pZ25vcmVcbiAgICAvL2lmIChldmVudC5rZXkgPT0gMjIpIHtcbiAgICAvL3NwaWRlclRvZ2dsZSA9ICFzcGlkZXJUb2dnbGVcbiAgICAvL2lmIChzcGlkZXJUb2dnbGUgPT0gdHJ1ZSkge1xuICAgIC8vZGlzcGxheVRvQ2hhdChcIsKnZMKnbFtNZXRlb3JYXSDCp3LCp2VFbmFibGVkIHNwaWRlci5cIilcbiAgICAvL30gZWxzZSB7XG4gICAgLy9kaXNwbGF5VG9DaGF0KFwiwqdkwqdsW01ldGVvclhdIMKncsKnZURpc2FibGVkIHNwaWRlci5cIilcbiAgICAvL31cbn1cbmV4cG9ydHMucmVnaXN0ZXJTcGlkZXIgPSByZWdpc3RlclNwaWRlcjtcbi8vfSlcbi8vfVxuZnVuY3Rpb24gc2V0U3BpZGVyVG9nZ2xlKHRoZUJvb2xlYW4pIHtcbiAgICBzcGlkZXJUb2dnbGUgPSB0aGVCb29sZWFuOyAvLyB5dyByYWRtYW4gOjNcbn1cbmV4cG9ydHMuc2V0U3BpZGVyVG9nZ2xlID0gc2V0U3BpZGVyVG9nZ2xlO1xuZnVuY3Rpb24gcmV0dXJuU3BpZGVyVG9nZ2xlKCkge1xuICAgIHJldHVybiBzcGlkZXJUb2dnbGU7XG59XG5leHBvcnRzLnJldHVyblNwaWRlclRvZ2dsZSA9IHJldHVyblNwaWRlclRvZ2dsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZXR1cm5TdGVwVG9nZ2xlID0gZXhwb3J0cy5zZXRTdGVwVG9nZ2xlID0gZXhwb3J0cy5yZWdpc3RlclN0ZXAgPSB2b2lkIDA7XG52YXIgc3RlcFRvZ2dsZSA9IGZhbHNlO1xuZnVuY3Rpb24gcmVnaXN0ZXJTdGVwKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBQbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzdGVwVG9nZ2xlID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFBsdWdpbkFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IDE7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBQbHVnaW5BUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5zdGVwSGVpZ2h0ID0gMC41O1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUGx1Z2luQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEB0cy1pZ25vcmUgXG4gICAgLy9QbHVnaW5BUEkuYWRkRXZlbnRMaXN0ZW5lcihcImtleVwiLCAoZXZlbnQpPT57IGNvbW1lbnQgb3V0IGNvZGUgcmFkbWFuIGxpa2VseSB3b24ndCB1c2VcbiAgICAvL2lmIChldmVudC5rZXkgPT0gNDcpIHtcbiAgICAvLyAgc3RlcFRvZ2dsZSA9ICFzdGVwVG9nZ2xlO1xuICAgIC8vIGlmIChzdGVwVG9nZ2xlID09IHRydWUpIHtcbiAgICAvLyAgIGRpc3BsYXlUb0NoYXQoXCLCp2TCp2xbTWV0ZW9yWF0gwqdywqdlRW5hYmxlZCBzdGVwLlwiKVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICAgZGlzcGxheVRvQ2hhdChcIsKnZMKnbFtNZXRlb3JYXSDCp3LCp2VEaXNhYmxlZCBzdGVwLlwiKVxuICAgIC8vIH1cbiAgICAvLyB9XG4gICAgLy8gIH0pXG59XG5leHBvcnRzLnJlZ2lzdGVyU3RlcCA9IHJlZ2lzdGVyU3RlcDtcbmZ1bmN0aW9uIHNldFN0ZXBUb2dnbGUodGhlQm9vbGVhbikge1xuICAgIHN0ZXBUb2dnbGUgPSB0aGVCb29sZWFuOyAvLyB5dyByYWRtYW4gOjNcbn1cbmV4cG9ydHMuc2V0U3RlcFRvZ2dsZSA9IHNldFN0ZXBUb2dnbGU7XG5mdW5jdGlvbiByZXR1cm5TdGVwVG9nZ2xlKCkge1xuICAgIHJldHVybiBzdGVwVG9nZ2xlO1xufVxuZXhwb3J0cy5yZXR1cm5TdGVwVG9nZ2xlID0gcmV0dXJuU3RlcFRvZ2dsZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBndWlfMSA9IHJlcXVpcmUoXCIuL2d1aVwiKTtcbnZhciBzcGlkZXJfMSA9IHJlcXVpcmUoXCIuL3NwaWRlclwiKTtcbnZhciBzdGVwXzEgPSByZXF1aXJlKFwiLi9zdGVwXCIpO1xudmFyIGpldHBhY2tfMSA9IHJlcXVpcmUoXCIuL2pldHBhY2tcIik7XG52YXIgamV0cGFja2d1aWFjdGl2ZSA9IGZhbHNlO1xuY29uc29sZS5sb2coXCJbTWV0ZW9yWF0gTG9hZGluZyBjbGllbnQuLi5cIik7XG4oMCwgZ3VpXzEucmVnaXN0ZXJndWkpKGpldHBhY2tndWlhY3RpdmUpO1xuKDAsIGpldHBhY2tfMS5yZWdpc3RlcmpldHBhY2spKGpldHBhY2tndWlhY3RpdmUpO1xuKDAsIHNwaWRlcl8xLnJlZ2lzdGVyU3BpZGVyKSgpO1xuKDAsIHN0ZXBfMS5yZWdpc3RlclN0ZXApKCk7XG5jb25zb2xlLmxvZyhcIltNZXRlb3JYXSBGaW5pc2hlZCFcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=