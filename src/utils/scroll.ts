export const scrollToSection = (id: string, callback?: () => void) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    });
    if (callback) callback();
  } else {
    if (callback) callback();
    window.location.href = id === "home" ? "/" : `/#${id}`;
  }
};
