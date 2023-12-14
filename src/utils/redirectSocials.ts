const redirectSocial = (event: Event, social: string) => {
  const link = event.currentTarget as HTMLAnchorElement;
  if (social === "facebook") {
    event.preventDefault();
    const facebookPage = link.dataset.social;
    const appUrl = `fb://page/${facebookPage}`; // Facebook app URL
    setTimeout(function () {
      // Attempt to open the Facebook app
      window.location.href = appUrl;
      // If the Facebook app is not installed, fallback to the webpage
      setTimeout(function () {
        window.location.href = `https://www.facebook.com/${facebookPage}`;
      }, 100);
    }, 25);
  }
};

export { redirectSocial };
