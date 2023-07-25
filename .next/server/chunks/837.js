"use strict";
exports.id = 837;
exports.ids = [837];
exports.modules = {

/***/ 5768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(2585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2208);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/logo.webp
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.c4993fae.webp","height":400,"width":1932,"blurDataURL":"data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAIAAkA4JZwCdAEUo5ogkAD++buRtD3Xo56UODPyI88CbXUtUMiQAAA=","blurWidth":8,"blurHeight":2});
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(7479);
// EXTERNAL MODULE: ./lib/getAllBrands.tsx
var getAllBrands = __webpack_require__(5895);
;// CONCATENATED MODULE: ./components/Navbar.tsx






async function Navbar() {
    const brands = await (0,getAllBrands/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "navbar navbar-expand-lg navbar-light bg-light",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "navbar-brand mw-200",
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "mw-200",
                            width: 200,
                            alt: "leeerob",
                            src: logo
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#navbarTogglerDemo02",
                        "aria-controls": "navbarTogglerDemo02",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "navbar-toggler-icon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "collapse navbar-collapse justify-content-end",
                        id: "navbarTogglerDemo02",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "navbar-nav mr-0  mb-2 mb-lg-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link",
                                        href: "/",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link",
                                        href: "/about",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "nav-item dropdown",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            className: "nav-link dropdown-toggle",
                                            href: "#",
                                            id: "navbarDropdown",
                                            role: "button",
                                            "data-bs-toggle": "dropdown",
                                            "aria-expanded": "false",
                                            children: "Our Brands"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "dropdown-menu",
                                            "aria-labelledby": "navbarDropdown",
                                            children: brands.map((navitem)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "nav-link",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        className: "nav-link",
                                                        href: `/brands/${encodeURIComponent(navitem.slug)}`,
                                                        children: navitem.name
                                                    })
                                                }, navitem.id))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "nav-link",
                                        href: "/contact",
                                        children: "Contact"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 5895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getAllBrands)
/* harmony export */ });
async function getAllBrands() {
    const resbrand = await fetch("https://admin.agrilfoods.com/api/brands", {
        next: {
            revalidate: 60
        }
    });
    if (!resbrand.ok) Error(`Error! status: ${resbrand.status}`);
    return resbrand.json();
}


/***/ }),

/***/ 1446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.c4993fae.webp","height":400,"width":1932,"blurDataURL":"data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAIAAkA4JZwCdAEUo5ogkAD++buRtD3Xo56UODPyI88CbXUtUMiQAAA=","blurWidth":8,"blurHeight":2});

/***/ })

};
;