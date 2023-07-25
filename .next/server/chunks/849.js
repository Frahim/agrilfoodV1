"use strict";
exports.id = 849;
exports.ids = [849];
exports.modules = {

/***/ 9849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ allEmploy)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(4212);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2208);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./lib/getallEmploy.tsx
async function getAllBrands() {
    const resbrand = await fetch("https://admin.agrilfoods.com/api/employ", {
        next: {
            revalidate: 60
        }
    });
    if (!resbrand.ok) Error(`Error! status: ${resbrand.status}`);
    return resbrand.json();
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(2585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Employ.tsx





async function allEmploy() {
    const employ = await getAllBrands();
    const employprofile = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "sectionPadding epmmwinwrap",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "sectitle mb-5 text-center",
                                children: "Our Team Members"
                            })
                        }),
                        employ.map((employ)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-12 col-md-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "employWrap",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "proimg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: `https://admin.agrilfoods.com/uploads/employ/${employ.picture}`,
                                                alt: "Profile Picture",
                                                className: "profilepic",
                                                width: 300,
                                                height: 300
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "employ-sec text-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "empname",
                                                    children: employ.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "biosec",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                children: employ.designeation
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                employ.department,
                                                                " Department"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "buttonsec",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            className: "btnlink",
                                                            href: `tel:${employ.phonenumber}`,
                                                            children: " Call"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            className: "btnlink",
                                                            href: `mailto:${employ.email}`,
                                                            children: " mail"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            className: "mainlink",
                                            href: `/employ/${employ.slug}`,
                                            children: "  "
                                        })
                                    ]
                                })
                            }, employ.id))
                    ]
                })
            })
        })
    });
    return employprofile;
}


/***/ })

};
;