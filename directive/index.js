export const prdOff = {
  bind(el) {
    let input = el;
    const elIsInput = el.tagName.toLowerCase() === "input";
    if (!elIsInput) {
      const inputs = el.getElementsByTagName("input");
      if (!inputs.length) return;
      input = inputs[0];
    }
    input.setAttribute("readonly", true);
    input.addEventListener("input", inputHandler);
    input.addEventListener("mousedown", mousedownHandler);
    window.addEventListener("keydown", keydownHandler);
    el.$destroyCopy = function () {
      input.removeEventListener("input", inputHandler);
      input.removeEventListener("mousedown", mousedownHandler);
      window.removeEventListener("keydown", keydownHandler);
    };

    function mousedownHandler() {
      this.setAttribute("readonly", true);
      setTimeout(() => {
        this.removeAttribute("readonly");
        this.focus();
      }, 0);
    }

    function inputHandler() {
      const value = this.value || "";
      if (!value.length) mousedownHandler.call(this);
    }

    function tabFocusHandler() {
      mousedownHandler.call(input);
    }

    function keydownHandler(evt) {
      const tabKeyCode = 9;
      if (evt.keyCode == tabKeyCode) {
        input.addEventListener("focus", tabFocusHandler);
        setTimeout(() => {
          input.removeAttribute("focus", tabFocusHandler);
        }, 0);
      }
    }
  },

  unbind(el) {
    el.$destroyCopy && el.$destroyCopy();
  },
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

function install(Vue) {
  Vue.directive("prdOff", prdOff);
}

export default install;
