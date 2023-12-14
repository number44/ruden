import { redirectSocial } from "../utils/redirectSocials";
const facebookLinks =
  document.querySelectorAll<HTMLAnchorElement>("a[data-facebook]");
const instagramLinks =
  document.querySelectorAll<HTMLAnchorElement>("a[data-instagram]");
function mobileSocials() {
  facebookLinks?.forEach((socialId) => {
    socialId.addEventListener("click", (e: Event) =>
      redirectSocial(e, "facebook")
    );
  });
  instagramLinks?.forEach((socialId) => {
    socialId.addEventListener("click", (e: Event) =>
      redirectSocial(e, "instagram")
    );
  });
}
export default mobileSocials;
