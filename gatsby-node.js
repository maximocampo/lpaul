exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === "build-html") {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /@react-hook\/mouse-position/,
						use: loaders.null(),
					},
				],
			},
		})
	}
}
