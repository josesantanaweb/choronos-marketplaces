export const copyToClipboard = async (text: string) => {

  if (typeof document.execCommand == "function") {
    const selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
  }

  if (navigator?.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
  }
}
