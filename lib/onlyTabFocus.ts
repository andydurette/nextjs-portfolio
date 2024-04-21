export const onlyTabFocus = () => {
  function keyboardFocus(e: any) {
    if (e.keyCode === 9) {
      // Tab key
      document.documentElement.classList.add("keyboard-focus");
    }

    document.removeEventListener("keydown", keyboardFocus, false);
  }

  document.documentElement.classList.remove("no-js");
  document.addEventListener("keydown", keyboardFocus, false);
};
