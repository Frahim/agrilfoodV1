exports.id = 904;
exports.ids = [904];
exports.modules = {

/***/ 8523:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Istok_Web_d17c15', '__Istok_Web_Fallback_d17c15'","fontStyle":"normal"},
	"className": "__className_d17c15"
};


/***/ }),

/***/ 2904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BannerHome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_font_google_target_css_path_components_HomeBanner_tsx_import_Istok_Web_arguments_subsets_latin_weight_400_700_variableName_istok___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8523);
/* harmony import */ var _next_font_google_target_css_path_components_HomeBanner_tsx_import_Istok_Web_arguments_subsets_latin_weight_400_700_variableName_istok___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_components_HomeBanner_tsx_import_Istok_Web_arguments_subsets_latin_weight_400_700_variableName_istok___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_banner_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1404);
/* harmony import */ var _components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



async function fetchBannerData() {
    const res = await fetch("https://admin.agrilfoods.com/api/brands/agril-foods-ltd");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
const HomeBanner = ({ banner  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default().slider),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default().borderAnimation)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default().bannerWrap),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default().backgroundVideo),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                            muted: true,
                            autoPlay: true,
                            loop: true,
                            className: "",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                src: banner.Vedio,
                                type: "video/mp4"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-sm-12 col-md-8 mt-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${(_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default().bannerTitle)} `,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: `${(_next_font_google_target_css_path_components_HomeBanner_tsx_import_Istok_Web_arguments_subsets_latin_weight_400_700_variableName_istok___WEBPACK_IMPORTED_MODULE_3___default().className)}`,
                                        children: banner.short_description
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-1-1 no-p ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_components_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default().bannerDesc)} fed`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_next_font_google_target_css_path_components_HomeBanner_tsx_import_Istok_Web_arguments_subsets_latin_weight_400_700_variableName_istok___WEBPACK_IMPORTED_MODULE_3___default().className),
                                            children: banner.other_description
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
function BannerHome() {
    const [bannerData, setBannerData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const data = await fetchBannerData();
                setBannerData(data);
            } catch (error) {
            // Handle error
            }
        };
        fetchData();
    }, []);
    if (!bannerData) {
        // Render a loading state until the banner data is fetched
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HomeBanner, {
            banner: bannerData
        })
    });
}


/***/ }),

/***/ 1404:
/***/ ((module) => {

// Exports
module.exports = {
	"bannerWrap": "banner_bannerWrap__GIdV3",
	"slider": "banner_slider__33ZxS",
	"backgroundVideo": "banner_backgroundVideo__qO0ly",
	"gridPad": "banner_gridPad__lfK0S",
	"bannerTitle": "banner_bannerTitle__4_Gu9",
	"bannerDesc": "banner_bannerDesc__Tn3o9",
	"borderAnimation": "banner_borderAnimation__ecJ7l",
	"topleft": "banner_topleft__t7zF0",
	"bottomright": "banner_bottomright__bwEYk",
	"revbottomright": "banner_revbottomright__42yoU",
	"revtopleft": "banner_revtopleft__XAvhY"
};


/***/ })

};
;