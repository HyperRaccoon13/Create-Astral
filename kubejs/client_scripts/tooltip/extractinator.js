(function extractinatorTooltips() {
  const { addLocalizedShiftTooltip } = global.startup;
  ItemEvents.tooltip(event => {
    /** @type {Helper.Tooltip[]} */
    const extractinatorTooltips = [
      {
        item: "extractinator:extractinator",
        tooltip: "tooltip.extractinator.extractinator",
      },
    ];
    extractinatorTooltips.forEach((tooltip) => addLocalizedShiftTooltip(event, tooltip.item, tooltip.tooltip));
  });
})();
