/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./common/constants.ts":
/*!*****************************!*\
  !*** ./common/constants.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currency\": () => (/* binding */ currency),\n/* harmony export */   \"chainID\": () => (/* binding */ chainID)\n/* harmony export */ });\nconst currency = \"MATIC\";\nconst chainID = 80001;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21tb24vY29uc3RhbnRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sS0FBSyxDQUFDQSxRQUFRLEdBQUcsQ0FBTztBQUN4QixLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQENyb3NzZnVuZC93ZWIvLi9jb21tb24vY29uc3RhbnRzLnRzP2QyNmYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGN1cnJlbmN5ID0gXCJNQVRJQ1wiXG5leHBvcnQgY29uc3QgY2hhaW5JRCA9IDgwMDAxO1xuIl0sIm5hbWVzIjpbImN1cnJlbmN5IiwiY2hhaW5JRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/constants.ts\n");

/***/ }),

/***/ "./context/Web3Provider.tsx":
/*!**********************************!*\
  !*** ./context/Web3Provider.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Web3Context\": () => (/* binding */ Web3Context),\n/* harmony export */   \"Web3Provider\": () => (/* binding */ Web3Provider),\n/* harmony export */   \"default\": () => (/* binding */ useWeb3Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"@web3-react/core\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/injected-connector */ \"@web3-react/injected-connector\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _infrastructure_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @infrastructure/web3 */ \"./infrastructure/web3.ts\");\n/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/constants */ \"./common/constants.ts\");\n\n\n\n\n\n\nconst Web3Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({\n    // eslint-disable-next-line @typescript-eslint/no-empty-function\n    connectWallet: ()=>{},\n    // eslint-disable-next-line @typescript-eslint/no-empty-function\n    disconnectWallet: ()=>{},\n    library: null,\n    account: null\n});\nconst Web3Provider = ({ children  })=>{\n    const { activate , account , library , deactivate  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)();\n    const injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__.InjectedConnector({\n        supportedChainIds: [\n            common_constants__WEBPACK_IMPORTED_MODULE_5__.chainID\n        ]\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        connectWallet();\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    const connectWallet = async ()=>{\n        try {\n            await activate(injected);\n            if (account || typeof window.ethereum !== \"undefined\") {\n                console.log(await _infrastructure_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getChainId());\n                if (await _infrastructure_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getChainId() !== common_constants__WEBPACK_IMPORTED_MODULE_5__.chainID) {\n                    window.alert(\"Please change the network to Mumbai Test Network\");\n                }\n            } else {\n                window.alert(\"Metamask wallet not detected. Please install the extension wallet\");\n            }\n            return true;\n        } catch (error) {\n            console.log(\"Error on connecting: \", error);\n            return false;\n        }\n    };\n    const values = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            account,\n            connectWallet,\n            disconnectWallet: deactivate,\n            library\n        })\n    , // eslint-disable-next-line react-hooks/exhaustive-deps\n    [\n        account\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Web3Context.Provider, {\n        value: values,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/allen/Desktop/Unfold 22/Crossfund/packages/web/context/Web3Provider.tsx\",\n        lineNumber: 57,\n        columnNumber: 10\n    }, undefined));\n};\nfunction useWeb3Provider() {\n    const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(Web3Context);\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1dlYjNQcm92aWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDRjtBQUNtQjtBQUMzQjtBQUNHO0FBRW5DLEtBQUssQ0FBQ08sV0FBVyxpQkFBR1AsMERBQW1CLENBQUMsQ0FBQztJQUM5QyxFQUFnRTtJQUNoRVMsYUFBYSxNQUFRLENBQUMsQ0FBQztJQUN2QixFQUFnRTtJQUNoRUMsZ0JBQWdCLE1BQVEsQ0FBQyxDQUFDO0lBQzFCQyxPQUFPLEVBQUUsSUFBSTtJQUNiQyxPQUFPLEVBQUUsSUFBSTtBQUNmLENBQUM7QUFFTSxLQUFLLENBQUNDLFlBQVksSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUM3QyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEdBQUVILE9BQU8sR0FBRUQsT0FBTyxHQUFFSyxVQUFVLEVBQUMsQ0FBQyxHQUFHYiw4REFBWTtJQUUvRCxLQUFLLENBQUNjLFFBQVEsR0FBRyxHQUFHLENBQUNiLDZFQUFpQixDQUFDLENBQUM7UUFBQ2MsaUJBQWlCLEVBQUUsQ0FBQ1o7WUFBQUEscURBQU87UUFBQSxDQUFDO0lBQUMsQ0FBQztJQUV2RUwsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZRLGFBQWE7SUFDYixFQUF1RDtJQUN6RCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsS0FBSyxDQUFDQSxhQUFhLGFBQWUsQ0FBQztRQUNqQyxHQUFHLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQ00sUUFBUSxDQUFDRSxRQUFRO1lBQ3ZCLEVBQUUsRUFBRUwsT0FBTyxJQUFJLE1BQU0sQ0FBQ08sTUFBTSxDQUFDQyxRQUFRLEtBQUssQ0FBVyxZQUFFLENBQUM7Z0JBQ3REQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUNqQiwyRUFBbUI7Z0JBQ3JDLEVBQUUsRUFBRyxLQUFLLENBQUNBLDJFQUFtQixPQUFRQyxxREFBTyxFQUFFLENBQUM7b0JBQzlDYSxNQUFNLENBQUNNLEtBQUssQ0FBQyxDQUFrRDtnQkFDakUsQ0FBQztZQUNILENBQUMsTUFBTSxDQUFDO2dCQUNOTixNQUFNLENBQUNNLEtBQUssQ0FDVixDQUFtRTtZQUV2RSxDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUk7UUFDYixDQUFDLENBQUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQztZQUNmTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUF1Qix3QkFBRUksS0FBSztZQUMxQyxNQUFNLENBQUMsS0FBSztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDQyxNQUFNLEdBQUd6Qiw4Q0FBTyxNQUNiLENBQUM7WUFDTlUsT0FBTztZQUNQSCxhQUFhO1lBQ2JDLGdCQUFnQixFQUFFTSxVQUFVO1lBQzVCTCxPQUFPO1FBQ1QsQ0FBQztNQUNELEVBQXVEO0lBQ3ZELENBQUNDO1FBQUFBLE9BQU87SUFBQSxDQUFDO0lBR1gsTUFBTSw2RUFBRUwsV0FBVyxDQUFDcUIsUUFBUTtRQUFDQyxLQUFLLEVBQUVGLE1BQU07a0JBQUdiLFFBQVE7Ozs7OztBQUN2RCxDQUFDO0FBRWMsUUFBUSxDQUFDZ0IsZUFBZSxHQUFHLENBQUM7SUFDekMsS0FBSyxDQUFDQyxPQUFPLEdBQUcvQix1REFBZ0IsQ0FBQ08sV0FBVztJQUM1QyxNQUFNLENBQUN3QixPQUFPO0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AQ3Jvc3NmdW5kL3dlYi8uL2NvbnRleHQvV2ViM1Byb3ZpZGVyLnRzeD80NDEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gXCJAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3JcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCJAaW5mcmFzdHJ1Y3R1cmUvd2ViM1wiO1xuaW1wb3J0IHsgY2hhaW5JRCB9IGZyb20gXCJjb21tb24vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBXZWIzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gIGNvbm5lY3RXYWxsZXQ6ICgpID0+IHt9LFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gIGRpc2Nvbm5lY3RXYWxsZXQ6ICgpID0+IHt9LFxuICBsaWJyYXJ5OiBudWxsLFxuICBhY2NvdW50OiBudWxsLFxufSk7XG5cbmV4cG9ydCBjb25zdCBXZWIzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZhdGUsIGFjY291bnQsIGxpYnJhcnksIGRlYWN0aXZhdGUgfSA9IHVzZVdlYjNSZWFjdCgpO1xuXG4gIGNvbnN0IGluamVjdGVkID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKHsgc3VwcG9ydGVkQ2hhaW5JZHM6IFtjaGFpbklEXSB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbm5lY3RXYWxsZXQoKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtdKTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhY3RpdmF0ZShpbmplY3RlZCk7XG4gICAgICBpZiAoYWNjb3VudCB8fCB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHdlYjMuZXRoLmdldENoYWluSWQoKSk7XG4gICAgICAgIGlmICgoYXdhaXQgd2ViMy5ldGguZ2V0Q2hhaW5JZCgpKSAhPT0gY2hhaW5JRCkge1xuICAgICAgICAgIHdpbmRvdy5hbGVydChcIlBsZWFzZSBjaGFuZ2UgdGhlIG5ldHdvcmsgdG8gTXVtYmFpIFRlc3QgTmV0d29ya1wiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmFsZXJ0KFxuICAgICAgICAgIFwiTWV0YW1hc2sgd2FsbGV0IG5vdCBkZXRlY3RlZC4gUGxlYXNlIGluc3RhbGwgdGhlIGV4dGVuc2lvbiB3YWxsZXRcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igb24gY29ubmVjdGluZzogXCIsIGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdmFsdWVzID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgYWNjb3VudCxcbiAgICAgIGNvbm5lY3RXYWxsZXQsXG4gICAgICBkaXNjb25uZWN0V2FsbGV0OiBkZWFjdGl2YXRlLFxuICAgICAgbGlicmFyeSxcbiAgICB9KSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW2FjY291bnRdXG4gICk7XG5cbiAgcmV0dXJuIDxXZWIzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWVzfT57Y2hpbGRyZW59PC9XZWIzQ29udGV4dC5Qcm92aWRlcj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VXZWIzUHJvdmlkZXIoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFdlYjNDb250ZXh0KTtcbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlV2ViM1JlYWN0IiwiSW5qZWN0ZWRDb25uZWN0b3IiLCJ3ZWIzIiwiY2hhaW5JRCIsIldlYjNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNvbm5lY3RXYWxsZXQiLCJkaXNjb25uZWN0V2FsbGV0IiwibGlicmFyeSIsImFjY291bnQiLCJXZWIzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImluamVjdGVkIiwic3VwcG9ydGVkQ2hhaW5JZHMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJnZXRDaGFpbklkIiwiYWxlcnQiLCJlcnJvciIsInZhbHVlcyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VXZWIzUHJvdmlkZXIiLCJjb250ZXh0IiwidXNlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/Web3Provider.tsx\n");

/***/ }),

/***/ "./infrastructure/web3.ts":
/*!********************************!*\
  !*** ./infrastructure/web3.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/constants */ \"./common/constants.ts\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet web3;\nif (false) {} else {\n    // we are on the server *OR* meta mask is not running\n    // creating our own provider\n    const provider = new (web3__WEBPACK_IMPORTED_MODULE_1___default().providers.HttpProvider)(common_constants__WEBPACK_IMPORTED_MODULE_0__.currency === \"CELO\" ? \"https://alfajores-forno.celo-testnet.org\" : \"https://matic-mumbai.chainstacklabs.com/\");\n    web3 = new (web3__WEBPACK_IMPORTED_MODULE_1___default())(provider);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmZyYXN0cnVjdHVyZS93ZWIzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMkM7QUFDcEI7QUFFdkIsR0FBRyxDQUFDRSxJQUFJO0FBU1IsRUFBRSxFQUFFLEtBQW1FLEVBQUUsRUFHeEUsTUFBTSxDQUFDO0lBQ04sRUFBcUQ7SUFDckQsRUFBNEI7SUFDNUIsS0FBSyxDQUFDRyxRQUFRLEdBQUcsR0FBRyxDQUFDSixvRUFBMkIsQ0FDOUNELHNEQUFRLEtBQUssQ0FBTSxRQUNmLENBQTBDLDRDQUMxQyxDQUEwQztJQUdoREUsSUFBSSxHQUFHLEdBQUcsQ0FBQ0QsNkNBQUksQ0FBQ0ksUUFBUTtBQUMxQixDQUFDO0FBRUQsaUVBQWVILElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BDcm9zc2Z1bmQvd2ViLy4vaW5mcmFzdHJ1Y3R1cmUvd2ViMy50cz84NjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTWV0YU1hc2tJbnBhZ2VQcm92aWRlck9wdGlvbnMgfSBmcm9tIFwiQG1ldGFtYXNrL3Byb3ZpZGVycy9kaXN0L01ldGFNYXNrSW5wYWdlUHJvdmlkZXJcIjtcbmltcG9ydCB7IGN1cnJlbmN5IH0gZnJvbSBcImNvbW1vbi9jb25zdGFudHNcIjtcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5cbmxldCB3ZWIzOiB1bmRlZmluZWQgfCBXZWIzO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHdlYjM6IFdlYjM7XG4gICAgZXRoZXJldW06IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXJPcHRpb25zO1xuICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAvLyB3ZSBhcmUgaW4gdGhlIGJyb3dzZXIgYW5kIG1ldGEgbWFzayBpcyBpbnN0YWxsZWRcbiAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XG59IGVsc2Uge1xuICAvLyB3ZSBhcmUgb24gdGhlIHNlcnZlciAqT1IqIG1ldGEgbWFzayBpcyBub3QgcnVubmluZ1xuICAvLyBjcmVhdGluZyBvdXIgb3duIHByb3ZpZGVyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcbiAgICBjdXJyZW5jeSA9PT0gXCJDRUxPXCJcbiAgICAgID8gXCJodHRwczovL2FsZmFqb3Jlcy1mb3Juby5jZWxvLXRlc3RuZXQub3JnXCJcbiAgICAgIDogXCJodHRwczovL21hdGljLW11bWJhaS5jaGFpbnN0YWNrbGFicy5jb20vXCJcbiAgKTtcblxuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xuIl0sIm5hbWVzIjpbImN1cnJlbmN5IiwiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./infrastructure/web3.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"@web3-react/core\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var context_Web3Provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! context/Web3Provider */ \"./context/Web3Provider.tsx\");\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const getLibrary = (provider)=>{\n        return new (web3__WEBPACK_IMPORTED_MODULE_4___default())(provider);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.Web3ReactProvider, {\n            getLibrary: getLibrary,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context_Web3Provider__WEBPACK_IMPORTED_MODULE_5__.Web3Provider, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/home/allen/Desktop/Unfold 22/Crossfund/packages/web/pages/_app.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this),\n                    \";\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/allen/Desktop/Unfold 22/Crossfund/packages/web/pages/_app.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/allen/Desktop/Unfold 22/Crossfund/packages/web/pages/_app.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/allen/Desktop/Unfold 22/Crossfund/packages/web/pages/_app.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBQ0c7QUFFckI7QUFDUjtBQUM0QjtTQUUxQ0ksS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQVcsQ0FBQyxFQUFFLENBQUM7SUFDbEQsS0FBSyxDQUFDQyxVQUFVLElBQUlDLFFBQVEsR0FBSyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUNOLDZDQUFJLENBQUNNLFFBQVE7SUFDMUIsQ0FBQztJQUVELE1BQU0sNkVBQ0hSLDREQUFjOzhGQUNaQywrREFBaUI7WUFBQ00sVUFBVSxFQUFFQSxVQUFVO2tHQUN0Q0osOERBQVk7O2dHQUNWRSxTQUFTOzJCQUFLQyxTQUFTOzs7Ozs7b0JBQUksQ0FDOUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AQ3Jvc3NmdW5kL3dlYi8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSBcImNvbnRleHQvV2ViM1Byb3ZpZGVyXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgZ2V0TGlicmFyeSA9IChwcm92aWRlcikgPT4ge1xuICAgIHJldHVybiBuZXcgV2ViMyhwcm92aWRlcik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICA8V2ViM1JlYWN0UHJvdmlkZXIgZ2V0TGlicmFyeT17Z2V0TGlicmFyeX0+XG4gICAgICAgIDxXZWIzUHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbiAgICAgICAgPC9XZWIzUHJvdmlkZXI+XG4gICAgICA8L1dlYjNSZWFjdFByb3ZpZGVyPlxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwiV2ViM1JlYWN0UHJvdmlkZXIiLCJXZWIzIiwiV2ViM1Byb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRMaWJyYXJ5IiwicHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@web3-react/core":
/*!***********************************!*\
  !*** external "@web3-react/core" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/core");

/***/ }),

/***/ "@web3-react/injected-connector":
/*!*************************************************!*\
  !*** external "@web3-react/injected-connector" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();