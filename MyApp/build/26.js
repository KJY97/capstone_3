webpackJsonp([26],{

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alarmBattery_vue__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alarmBattery_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alarmBattery_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alarmBattery_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alarmBattery_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e6b1ee8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alarmBattery_vue__ = __webpack_require__(348);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(347)
}
var normalizeComponent = __webpack_require__(11)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4e6b1ee8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alarmBattery_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e6b1ee8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alarmBattery_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/alarmBattery.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(1)
  hotAPI.install(__webpack_require__(2), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e6b1ee8", Component.options)
  } else {
    hotAPI.reload("data-v-4e6b1ee8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "\n.contents[data-v-4e6b1ee8] {\n  padding: 20px;\n  color: white;\n}\ndiv.popup[data-v-4e6b1ee8] {\n  margin: 25px auto 55px auto;\n  width: 80%;\n  height: 70%;\n  border: 1px solid white;\n}\ndiv.title[data-v-4e6b1ee8] {\n  border: 1px solid white;\n  margin-bottom: 3px;\n}\ndiv.title p[data-v-4e6b1ee8] {\n  text-align: center;\n  margin: 10px;\n  font-size: 20px;\n}\ndiv.img[data-v-4e6b1ee8] {\n  float: left;\n  width: 80px;\n  height: 80px;\n  margin-left: 5px;\n  border: 1px solid white;\n}\ndiv.problem_API[data-v-4e6b1ee8],\ndiv.problem_Distance[data-v-4e6b1ee8],\ndiv.problem_Date[data-v-4e6b1ee8] {\n  border: 1px solid white;\n  height: 20%;\n  width: 70%;\n  margin: 0 auto 10px auto;\n}\ndiv.btn[data-v-4e6b1ee8] {\n  margin: 0 auto;\n  width: 60%;\n  height: 30px;\n  border: 1px solid white;\n}\ndiv.btn p[data-v-4e6b1ee8] {\n  text-align: center;\n  margin-top: 7px;\n  font-size: 15px;\n}\n.safe[data-v-4e6b1ee8] {\n  color: green;\n  text-align: center;\n  margin-top: 16px;\n  font-size: 17px;\n}\n.danger[data-v-4e6b1ee8] {\n  color: red;\n  text-align: center;\n  margin-top: 16px;\n  font-size: 17px;\n}", ""]);

// exports


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _manageLibs = __webpack_require__(96);

exports.default = {
  name: 'alarmBattery',
  data: function data() {
    return {
      SP_API: '',
      DP_API: '',
      SP_Distance: '',
      DP_Distance: '',
      SP_Date: '',
      DP_Date: '',
      P_sentence: ''
    };
  },
  methods: {
    go: function go() {
      this.$router.push('/battery');
    },
    problem: function problem() {
      if (this.P_sentence === 'problem_API') {
        this.DP_API = '배터리에 문제 상황이 발생했어요';
      } else {
        this.SP_API = '배터리의 상태는 괜찮아요';
      }

      if (this.P_sentence === 'problem_Distance') {
        this.DP_Distance = '배터리의 사용시간이 지나서 교체시기가 되었어요';
      } else {
        this.SP_Distance = '배터리의 사용시간에 따른 수명은 아직 남았어요';
      }

      if (this.P_sentence === 'problem_Date') {
        this.DP_Date = '배터리의 주행거리가 지나서 교체시기가 되었어요';
      } else {
        this.SP_Date = '배터리의 주행거리에 따른 수명은 아직 남았어요';
      }
    }
  },
  created: function created() {
    this.P_sentence = _manageLibs.storage.loadBatteryProblem();
    this.problem();
  }
};

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(275);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("bd1ff968", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(275, function() {
     var newContent = __webpack_require__(275);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "contents" }, [
      _c("div", { staticClass: "popup" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "img" }),
        _vm._v(" "),
        _c("div", { staticClass: "problem_API" }, [
          _c("p", { staticClass: "safe" }, [_vm._v(_vm._s(_vm.SP_API))]),
          _vm._v(" "),
          _c("p", { staticClass: "danger" }, [_vm._v(_vm._s(_vm.DP_API))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "problem_Distance" }, [
          _c("p", { staticClass: "safe" }, [_vm._v(_vm._s(_vm.SP_Distance))]),
          _vm._v(" "),
          _c("p", { staticClass: "danger" }, [_vm._v(_vm._s(_vm.DP_Distance))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "problem_Date" }, [
          _c("p", { staticClass: "safe" }, [_vm._v(_vm._s(_vm.SP_Date))]),
          _vm._v(" "),
          _c("p", { staticClass: "danger" }, [_vm._v(_vm._s(_vm.DP_Date))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "btn" }, [
          _c(
            "p",
            {
              on: {
                click: function($event) {
                  return _vm.go()
                }
              }
            },
            [_vm._v("다시 어플을 킬 때 까지 보지 않기")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("p", [_vm._v("배터리에 문제가 발생했어요")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(1)      .rerender("data-v-4e6b1ee8", esExports)
  }
}

/***/ })

});