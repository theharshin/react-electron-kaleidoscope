// To make repeatative images of the uploaded image
export const loadImages = (sources) => {
  const images = {};
  let loadedImages = 0;
  let numImages = 0;
  for (const src in sources) {
    numImages++;
  }
  for (const src in sources) {
    images[src] = new Image();
    // eslint-disable-next-line no-loop-func
    images[src].onload = function () {
      if (++loadedImages >= numImages) {
        buildStage(images);
      }
    };
    images[src].src = sources[src];
  }
};

const buildStage = (images) => {
  const stage = new window.Konva.Stage({
    container: "kaleidoscope-root",
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const layer = new window.Konva.Layer();

  const item = new window.Konva.Image({
    image: images.item,
    x: 60,
    y: 40,
    draggable: true,
  });

  item.cache();
  item.filters([window.Konva.Filters.Kaleidoscope]);
  item.kaleidoscopePower(3);
  layer.add(item);
  stage.add(layer);
  // Initial started with 3 seconds
  window.setInterval(() => {
    item.kaleidoscopeAngle(Math.floor(Math.random() * 100) + 1);
  }, 3000);
  const slider = document.getElementById("kaleidoscope-root");
  // Using mouse movement X and Y points and Random number between 1 to 100 to create an angle for the filter.
  slider.onmousemove = function (event) {
    item.kaleidoscopeAngle(
      (event.clientX / event.clientY) * (Math.floor(Math.random() * 100) + 1)
    );
  };
};
