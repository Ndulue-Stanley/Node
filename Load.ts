import ProgressBar from "progress";

const bar = new ProgressBar(":bar :percent :rate/bps :etas :current/:total ", {
  total: 40,
});

const time = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    console.log("process completed");
    clearInterval(time);
  }
}, 100);