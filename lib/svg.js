export function generateSVG(
  days,
  color = "pink",
  shape = "rect",
  border = true
) {
  const cellSize = 14;
  const cellSpacing = 3;
  const padding = 8; 
  const horizontalPadding = 10; 
  const verticalPadding = 10;
  const topPadding = 6;
  const weeks = Math.ceil(days.length / 7);

  // Color themes
  const colors = {
    pink: ["#ffeef8", "#ffd6f0", "#ffb3e6", "#ff80d9", "#ff4dcc"],
    lavender: ["#f8f4ff", "#e8d6ff", "#d4b3ff", "#c080ff", "#ac4dff"],
    mint: ["#e6f7f0", "#b3edd9", "#80e2c1", "#4dd6aa", "#1acb92"],
    blue: ["#f0f8ff", "#d6e6ff", "#b3d1ff", "#80b3ff", "#4d94ff"],
    cottoncandy: ["#fff0f8", "#ffe6f5", "#e6d1ff", "#b3d1ff", "#80b3ff"],
    sunset: ["#fff0f8", "#ffd6e6", "#ffb3d1", "#ff8080", "#ff6600"],
    ocean: ["#f0f8ff", "#e6f5ff", "#b3e6ff", "#80d4ff", "#4dc4ff"],
    forest: ["#f0fff0", "#e6ffe6", "#b3ffb3", "#80ff80", "#4dff4d"],
    berry: ["#ffe6f5", "#ffb3e6", "#ff80d9", "#e64db3", "#cc1a80"],
    peach: ["#fff8f0", "#ffe6d1", "#ffd4b3", "#ffc080", "#ffad4d"],
  };

  const colorPalette = colors[color] || colors.pink;

  const getColor = (count) => {
    if (count === 0) return colorPalette[0];
    if (count < 3) return colorPalette[1];
    if (count < 6) return colorPalette[2];
    if (count < 10) return colorPalette[3];
    return colorPalette[4];
  };


  let rects = "";
  days.forEach((day, i) => {
    const x =
      Math.floor(i / 7) * (cellSize + cellSpacing) +
      padding +
      horizontalPadding;
    const y =
      (i % 7) * (cellSize + cellSpacing) +
      padding +
      verticalPadding +
      topPadding;
    const color = getColor(day.contributionCount);

    if (shape === "hearts") {
      // Use hearts
      const heartSize = cellSize * 1;
      rects += `
        <text
          x="${x + cellSize / 2}"
          y="${y + cellSize / 2 + 1}"
          font-size="${heartSize}"
          font-family="Arial Rounded MT Bold, sans-serif"
          fill="${color}"
          text-anchor="middle"
          dominant-baseline="middle"
          >
          ❤
          <title>${day.contributionCount} contributions on ${day.date}</title>
        </text>`;
    } else if (shape === "sparkles") {
      // Use sparkles
      const sparklesSize = cellSize * 1.5;
      rects += `
        <text
          x="${x + cellSize / 2}"
          y="${y + cellSize / 2 + 1}"
          font-size="${sparklesSize}"
          font-family="Arial Rounded MT Bold, sans-serif"
          fill="${color}"
          text-anchor="middle"
          dominant-baseline="middle"
          >
          ✦︎
          <title>${day.contributionCount} contributions on ${day.date}</title>
        </text>`;
    } else if (shape === "flowers") {
      // Use flowers
      const flowerSize = cellSize * 1.3;
      rects += `
        <text
          x="${x + cellSize / 2}"
          y="${y + cellSize / 2 + 1}"
          font-size="${flowerSize}"
          font-family="Arial Rounded MT Bold, sans-serif"
          fill="${color}"
          text-anchor="middle"
          dominant-baseline="middle"
          >
          ✿
          <title>${day.contributionCount} contributions on ${day.date}</title>
        </text>`;
    } else if (shape === "clouds") {
      // Use clouds
      const cloudSize = cellSize * 1.2;
      rects += `
        <text
          x="${x + cellSize / 2}"
          y="${y + cellSize / 2 + 1}"
          font-size="${cloudSize}"
          font-family="Arial Rounded MT Bold, sans-serif"
          fill="${color}"
          text-anchor="middle"
          dominant-baseline="middle"
          >
          ☁
          <title>${day.contributionCount} contributions on ${day.date}</title>
        </text>`;
    } else {
      // Use rectangles (default)
      rects += `
        <rect
          x="${x}"
          y="${y}"
          width="${cellSize}" 
          height="${cellSize}" 
          fill="${color}" 
          rx="3" ry="3"
          >
          <title>${day.contributionCount} contributions on ${day.date}</title>
        </rect>`;
    }
  });

  const width =
    weeks * (cellSize + cellSpacing) + padding * 2 + horizontalPadding * 2;
  const height =
    7 * (cellSize + cellSpacing) +
    padding * 2 +
    verticalPadding * 2 +
    topPadding;

  // Create gradient border
  let gradientDef = "";
  let borderRect = "";

  if (border) {
    const borderWidth = 4;

    // Create gradient
    const gradientId = `gradient-${color}`;
    gradientDef = `
      <defs>
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colorPalette[0]};stop-opacity:1" />
          <stop offset="20%" style="stop-color:${colorPalette[1]};stop-opacity:1" />
          <stop offset="40%" style="stop-color:${colorPalette[2]};stop-opacity:1" />
          <stop offset="60%" style="stop-color:${colorPalette[3]};stop-opacity:1" />
          <stop offset="80%" style="stop-color:${colorPalette[4]};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colorPalette[0]};stop-opacity:1" />
        </linearGradient>
      </defs>`;

    borderRect = `
      <rect
        x="${borderWidth / 2}"
        y="${borderWidth / 2}"
        width="${width - borderWidth}"
        height="${height - borderWidth}"
        fill="none"
        stroke="url(#${gradientId})"
        stroke-width="${borderWidth}"
        rx="26"
        ry="26"
      />`;
  }

  // Return the SVG
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    ${gradientDef}
    ${borderRect}
    ${rects}
  </svg>`;
}
