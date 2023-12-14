const dropdowns: NodeListOf<HTMLElement> | null = document.querySelectorAll(".dropdown");
const subheader: HTMLElement | null = document.querySelector(".subheader");
const overlay: HTMLElement | null = document.querySelector(".overlay");
const dropdownIcon: HTMLElement | null = document.querySelector(".dropdown-icon");
const dropdownsScript = () => {
  let isOpen = false;
  if (!dropdowns) return;
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      e.preventDefault();

      const header = document.querySelector("header");

      const close = () => {
        subheader?.classList.remove("subheader-show");
        overlay?.classList.remove("show");
        dropdownIcon?.classList.remove("dropdown-icon-rotate");

        isOpen = false;
      };

      if (!isOpen) {
        //closed
        if (!header) return;
        if (!subheader) return;
        if (!overlay) return;

        dropdownIcon?.classList.add("dropdown-icon-rotate");

        header.classList.add("scrolled");
        subheader.classList.add("subheader-show");

        overlay.classList.add("show");
        overlay.addEventListener("click", close);
        isOpen = true;
      } else {
        // opened

        if (!header) return;
        if (!subheader) return;
        if (!overlay) return;
        subheader.classList.remove("subheader-show");
        overlay.removeEventListener("click", close);
        dropdownIcon?.classList.remove("dropdown-icon-rotate");

        isOpen = false;
      }

      // if (!header) return;
      // if (!subheader) return;
      // header.classList.remove("scrolled");
      // subheader.classList.remove("subheader-show");
      // header.ontransitionend = () => {
      //   subheader.classList.remove("subheader-show");
      //   subheader.ontransitionend = () => {
      //     isOpen = false;
      //   };
      // };
    });
  });
};
export default dropdownsScript;
