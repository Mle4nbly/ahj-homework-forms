export class Tooltip {
  constructor() {
    this._tooltips = [];
  }

  showTooltip(element) {
    const tooltipElement = document.createElement("DIV");

    tooltipElement.classList.add("popover");
    tooltipElement.innerHTML = this.popoverMarkup();

    const id = performance.now();

    this._tooltips.push({
      id,
      element: tooltipElement,
    });

    document.body.appendChild(tooltipElement);

    const rect = element.getBoundingClientRect();
    tooltipElement.style.left =
      rect.left +
      window.scrollX +
      rect.width / 2 -
      tooltipElement.offsetWidth / 2 +
      "px";
    tooltipElement.style.top =
      rect.top + window.scrollY - tooltipElement.offsetHeight - 8 + "px";

    return id;
  }

  removeTooltip(id) {
    const tooltip = this._tooltips.find((tip) => (tip.id = id));

    tooltip.element.remove();

    this._tooltips = this._tooltips.filter((tip) => tip.id !== id);
  }

  popoverMarkup() {
    return `
            <div class="arrow"></div>
            <h3 class="popover-header">Popover title</h3>
            <div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>
        `;
  }
}
