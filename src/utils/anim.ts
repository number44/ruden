import anime from "animejs";
const elementsWithDataNumberAttr = document.querySelectorAll(
  "[data-number]"
) as NodeListOf<HTMLElement>;
function anim() {
  if (elementsWithDataNumberAttr.length > 0) {
    elementsWithDataNumberAttr.forEach((el, index) => {
      anime({
        targets: el,
        innerHTML: [0, el.getAttribute("data-number")],
        easing: "easeInOutSine",
        round: 1,
        duration: 2000,
        delay: index * 100,
      });
    });
  }
}
export default anim;
