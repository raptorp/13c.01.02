import { animate, timeline, inView } from "https://cdn.skypack.dev/motion";

const sequence = [
  [".header_graphics", { y: [0, -100, 0] }, { duration: 1 }],
  [".dark_button", { x: [0, -100, 0] }, { duration: 1 }],
];

timeline(sequence, { repeat: 1 });
