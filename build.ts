await Bun.build({
    entrypoints: ["./src/App.tsx"],
    outdir: "./dist",
    splitting: true,
    minify: false,
    sourcemap: "linked",
    naming: {
        entry: "[name]-[hash].[ext]",
        chunk: "[name]-[hash].[ext]",
        asset: "[name].[ext]",
    },
});

export {};