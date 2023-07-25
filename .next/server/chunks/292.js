exports.id = 292;
exports.ids = [292];
exports.modules = {

/***/ 7170:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 5799:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6690, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 53, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 408, 23))

/***/ }),

/***/ 2104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(2817);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(7479);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(6420);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2208);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(2585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react-icons/gr/index.esm.js
var index_esm = __webpack_require__(228);
;// CONCATENATED MODULE: ./lib/getAllSocial.tsx
async function getAllSocial() {
    const resbrand = await fetch("https://admin.agrilfoods.com/api/socialmedia", {
        next: {
            revalidate: 60
        }
    });
    if (!resbrand.ok) Error(`Error! status: ${resbrand.status}`);
    return resbrand.json();
}

;// CONCATENATED MODULE: ./components/Footer.tsx





async function Footer() {
    const socialMediaData = await getAllSocial();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "section--has-background",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-wrapper sectionPadding",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-sm-12 col-md-4 footerWidget footerOne",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "widgetTitle t-white",
                                            children: "Quick link"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footerNav",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* GrFormNext */._P3, {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/about",
                                                            children: "About Us"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* GrFormNext */._P3, {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/brands",
                                                            children: "Our Brands"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* GrFormNext */._P3, {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/category",
                                                            children: "All Categories"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* GrFormNext */._P3, {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/product",
                                                            children: "All Products"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* GrFormNext */._P3, {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/employ",
                                                            children: "Our Family"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* GrFormNext */._P3, {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/contact",
                                                            children: "Contact Us"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-sm-12 col-md-4 footerWidget footerTwo",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "widgetTitle t-white",
                                            children: "FOLLOW"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "socialmedia",
                                            children: socialMediaData.map((item)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: item.smurl,
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: `https://admin.agrilfoods.com/uploads/socialicon/${item.socialicon}`,
                                                            alt: "Social Icon",
                                                            width: 40,
                                                            height: 40
                                                        })
                                                    })
                                                }, item.id);
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-sm-12 col-md-4 footerWidget footerThree",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "widgetTitle t-white",
                                            children: "CONTACT"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "address",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* GrMap */.OHW, {}),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        " House # 764-763/A, Avenue #06, Road #10,",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        " Mirpur DOHS, Dhaka"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-5 phone",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* GrPhone */.Cbd, {}),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "phone-wrap",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "tel:+8801779898444",
                                                            children: "+8801779898444"
                                                        }),
                                                        ",",
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "tel:+8801779898555",
                                                            children: "+8801779898555"
                                                        }),
                                                        ",",
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "tel:+8801984800900",
                                                            children: "+8801984800900"
                                                        }),
                                                        ",",
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "tel:+8801954541313",
                                                            children: "+8801954541313"
                                                        }),
                                                        ",",
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "tel:02-51053841",
                                                            children: "02-51053841"
                                                        }),
                                                        ",",
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "tel:02-51053842",
                                                            children: "02-51053842"
                                                        }),
                                                        ",",
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "tel:02-51053843",
                                                            children: "02-51053843"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-5 eamil address",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* GrMailOption */.yki, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "mailto:+8801779898444",
                                                    children: "admin@agrilfoods.com"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "copywright",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "copywrwp",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "\xa92023 Agril Foods LTD. all rights reserved"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "|"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Digital transformation by ",
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "text-red",
                                        href: "https://planb.com.bd",
                                        children: "Plan B"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(4212);
;// CONCATENATED MODULE: ./app/layout.tsx








const metadata = {
    title: "Agril Foods LID",
    description: "Welcome to Agril Foods LID"
};
function RootLayout({ children  }) {
    // useEffect(() => {
    //   import("bootstrap/dist/js/bootstrap");
    // }, []);
    // gsap.registerPlugin(ScrollTrigger);
    // const ref = useRef(null);
    // useEffect(() => {
    //   const element = ref.current;
    //   gsap.fromTo(
    //     element.querySelectorAll(".sliderighr1"),
    //     {
    //       opacity: 0,
    //       x: 100
    //     },
    //     {
    //       opacity: 1,
    //       x: 0,
    //       scrollTrigger: {
    //         trigger: element.querySelector(".sliderighr1"),
    //       }
    //     }
    //   );
    // }, []);
    // useEffect(() => {
    //   const element = ref.current;
    //   gsap.fromTo(
    //     element.querySelectorAll(".slideLeft"),
    //     {
    //       opacity: 0,
    //       x: -100,
    //     },
    //     {
    //       opacity: 1,
    //       x: 0,
    //       scrollTrigger: {
    //         trigger: element.querySelector(".slideLeft"),
    //       }
    //     }
    //   );
    // }, []);
    // useEffect(() => {
    //   const element = document.querySelectorAll(".slideRight2");
    //   gsap.fromTo(
    //     element,
    //     {
    //       opacity: 0,
    //       x: 100
    //     },
    //     {
    //       opacity: 1,
    //       x: 0,
    //       scrollTrigger: {
    //         trigger: element,
    //       }
    //     }
    //   );
    // }, []);
    // useEffect(() => {
    //   const items = document.querySelectorAll(".number");
    //   gsap.from(items, {
    //     textContent: 0,
    //     duration: 4,
    //     ease: "power1.in",
    //     snap: { textContent: 1 },
    //     stagger: {
    //       each: 1.0,
    //       onUpdate: function () {
    //         this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
    //       },
    //     },
    //     scrollTrigger: {
    //       trigger: items,
    //     }
    //   });
    //   function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //   }
    // }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.bundle.min.js",
                    integrity: "sha512-sH8JPhKJUeA9PWk3eOcOl8U+lfZTgtBXD41q6cO/slwxGHCxKcW45K4oPCUhHG7NMB4mbKEddVmPuTXtpbCbFA==",
                    crossOrigin: "anonymous",
                    referrerPolicy: "no-referrer"
                })
            ]
        })
    });
}


/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;