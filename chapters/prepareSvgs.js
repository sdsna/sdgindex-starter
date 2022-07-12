const fse = require("fs-extra");
const path = require("path");
const { optimize } = require("svgo");
const { createSVGWindow } = require("svgdom");
const { SVG, registerWindow } = require("@svgdotjs/svg.js");

// Configuration
const INPUT_FOLDER = path.join(__dirname, "svgs");
const OUTPUT_FOLDER = path.join(
  __dirname,
  "..",
  "public",
  "static",
  "chapters"
);
const MANUAL_EXPORT = ["figure-32.svg", "figure-33.svg"];

// Get the size of a string in kilobytes
const sizeInKb = (string) => {
  const sizeInBytes = Buffer.from(string).length;
  return Math.round(sizeInBytes / 1024);
};

const prepareSvg = async (file) => {
  if (MANUAL_EXPORT.includes(file)) return;

  // Read in original file
  const svgString = fse.readFileSync(path.join(INPUT_FOLDER, file));

  // Create mock window object for manipulating SVG with svg.js
  const window = createSVGWindow();
  const document = window.document;
  registerWindow(window, document);

  // Initialize SVG instance with our SVG string
  const svgContainer = SVG(document.documentElement);
  svgContainer.svg(svgString);
  const svg = svgContainer.children()[0];

  // Extend bounding box
  let viewbox = svg.viewbox();
  svg.viewbox({
    x: viewbox.x - 5,
    y: viewbox.y - 5,
    width: viewbox.width + 10,
    height: viewbox.height + 10,
  });

  // Remove width & height attributes
  svg.attr("width", "100%");
  svg.attr("height", null);

  // Add white background
  viewbox = svg.viewbox();
  const rect = svg.rect(viewbox.width, viewbox.height);
  rect.attr("x", viewbox.x);
  rect.attr("y", viewbox.y);
  rect.attr("fill", "#ffffff");
  rect.back();

  // Back to SVG string
  const modifiedSvgString = svg.svg();

  // Optimize SVG
  const { data: optimizedSvgString } = await optimize(modifiedSvgString, {
    floatPrecision: 2,
    js2svg: {
      pretty: true,
      indent: "  ",
    },
  });

  // Write optimized and standardized map
  fse.writeFileSync(path.join(OUTPUT_FOLDER, file), optimizedSvgString);
  console.log(`Prepared ${file}:`, sizeInKb(optimizedSvgString), "KB");
};

const main = async () => {
  const files = fse.readdirSync(INPUT_FOLDER);
  for (let file of files) {
    await prepareSvg(file);
  }
};

main();
