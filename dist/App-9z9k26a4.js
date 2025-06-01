import {
  __require,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "./App-fg0191df.js";

// src/App.tsx
var import_react2 = __toESM(require_react(), 1);

// src/APITester.tsx
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function APITester() {
  const responseInputRef = import_react.useRef(null);
  const testEndpoint = async (e) => {
    e.preventDefault();
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const endpoint = formData.get("endpoint");
      const url = new URL(endpoint, location.href);
      const method = formData.get("method");
      const res = await fetch(url, { method });
      const data = await res.json();
      responseInputRef.current.value = JSON.stringify(data, null, 2);
    } catch (error) {
      responseInputRef.current.value = String(error);
    }
  };
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("div", {
    className: "api-tester",
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("form", {
        onSubmit: testEndpoint,
        className: "endpoint-row",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("select", {
            name: "method",
            className: "method",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("option", {
                value: "GET",
                children: "GET"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV("option", {
                value: "PUT",
                children: "PUT"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("input", {
            type: "text",
            name: "endpoint",
            defaultValue: "/api/hello",
            className: "url-input",
            placeholder: "/api/hello"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("button", {
            type: "submit",
            className: "send-button",
            children: "Send"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("textarea", {
        ref: responseInputRef,
        readOnly: true,
        placeholder: "Response will appear here...",
        className: "response-area"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}

// src/logo.svg
var logo_default = "./logo.svg";

// src/react.svg
var react_default = "./react.svg";

// src/App.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var Page = import_react2.default.lazy(() => import("./Page-dy5p246x.css"));
function App() {
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("div", {
    className: "app",
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("div", {
        className: "logo-container",
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("img", {
            src: logo_default,
            alt: "Bun Logo",
            className: "logo bun-logo"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("img", {
            src: react_default,
            alt: "React Logo",
            className: "logo react-logo"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("h1", {
        children: "Bun + React"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("p", {
        children: [
          "Edit ",
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("code", {
            children: "src/App.tsx"
          }, undefined, false, undefined, this),
          " and save to test HMR"
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(APITester, {}, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(import_react2.default.Suspense, {
        fallback: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(jsx_dev_runtime2.Fragment, {
          children: "Loading..."
        }, undefined, false, undefined, this),
        children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Page, {}, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var App_default = App;
export {
  App_default as default,
  App
};

//# debugId=E92936A7E40F3D9664756E2164756E21
//# sourceMappingURL=App-9z9k26a4.js.map
