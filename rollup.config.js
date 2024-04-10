import rust from "@wasm-tool/rollup-plugin-rust";
import inject from "@rollup/plugin-inject";
import path from "node:path";

export default {
    input: {
        index: "Cargo.toml",
    },
    output: {
        dir: "dist",
        format: "cjs",
    },
    plugins: [
        inject({
            TextDecoder: path.resolve("./helpers/TextDecoder.js"),
        }),
        rust({
            inlineWasm: true,
            experimental: {
                synchronous: true,
            },
        }),
    ],
};
