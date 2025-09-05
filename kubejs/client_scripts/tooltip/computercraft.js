(function computerCraftTooltips() {
  const { addLocalizedShiftTooltip } = global.startup;
  ItemEvents.tooltip(event => {
    /** @type {Helper.Tooltip[]} */
    const computercraftTooltips = [
      {
        item: "computercraft:disk",
        tooltip: "tooltip.computercraft.disk",
      },
    ];
    computercraftTooltips.forEach((tooltip) => addLocalizedShiftTooltip(event, tooltip.item, tooltip.tooltip));
  });
})();
