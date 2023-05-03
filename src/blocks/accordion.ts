const accordionBlocks = document.querySelectorAll(
  ".accordion-block"
) as NodeListOf<HTMLElement>;
function accordionScript() {
  if (accordionBlocks.length < 1) {
    return;
  }
  accordionBlocks.forEach((block) => {
    const accordions = block.querySelectorAll(
      ".accordion"
    ) as NodeListOf<HTMLDivElement>;
    const elementsDS = block.querySelectorAll(
      "[data-status]"
    ) as NodeListOf<HTMLDivElement>;
    const classesUpdate = () => {
      elementsDS.forEach((el) => {
        const st = el.getAttribute("data-status");
        const closeButton = el.querySelector(
          ".accordion-close"
        ) as HTMLDivElement;
        if (st === "open") {
          el.nextElementSibling?.classList.add("accordion-show");
          if (closeButton) {
            closeButton.style.rotate = "45deg";
          }
        }
        if (st === "close") {
          el.nextElementSibling?.classList.remove("accordion-show");
          if (closeButton) {
            closeButton.style.rotate = "0deg";
          }
        }
      });
    };
    const statusCloseAll = () => {
      console.log("example", "example");
      elementsDS?.forEach((el) => {
        el.setAttribute("data-status", "close");
      });
    };
    classesUpdate();
    if (accordions.length < 1) return;
    accordions.forEach((accordion) => {
      const panel = accordion.querySelector(".accordion-panel");
      const content = accordion.querySelector(".accordion-content");
      if (!panel) return;
      if (!content) return;
      const clickEvent = (e: Event) => {
        const clickedElement = e.target as HTMLElement;
        let open =
          clickedElement.getAttribute("data-status") === "open" ? true : false;
        if (open) {
          clickedElement.setAttribute("data-status", "close");
          statusCloseAll();
          classesUpdate();
        } else {
          statusCloseAll();
          clickedElement.setAttribute("data-status", "open");

          classesUpdate();
        }
      };
      panel.addEventListener("pointerdown", clickEvent, false);
    });
  });
}
export default accordionScript;
