(function doodadsBlockRegistry() {
  StartupEvents.registry('block', event => {
    event
      .create("doodads:asphalt_slab", "slab")
      .material("stone")
      .hardness(4)
      .tagBlock("minecraft:mineable/pickaxe")
      .textureAll("doodads:block/asphalt")
      .displayName("Asphalt Slab");
    event
      .create("doodads:asphalt_stair", "stairs")
      .material("stone")
      .hardness(4)
      .tagBlock("minecraft:mineable/pickaxe")
      .textureAll("doodads:block/asphalt")
      .displayName("Asphalt Stair");
  });
})();
