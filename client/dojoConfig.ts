import { createDojoConfig } from "@dojoengine/core";

import manifest from "../contract/manifest_release.json";

export const dojoConfig = createDojoConfig({
    manifest,
    toriiUrl: "https://api.cartridge.gg/x/my-dojo-game-96a2z1/torii",
    rpcUrl: "https://api.cartridge.gg/x/my-dojo-game-96/katana"
});
