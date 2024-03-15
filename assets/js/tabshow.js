const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".content__exclusive-head--items");
const panes = $$(".content__exclusive-inner");

const tabActive = $(".content__exclusive-head--items.active");



requestIdleCallback(function () {
  
});

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".content__exclusive-head--items.active").classList.remove("active");
    $(".content__exclusive-inner.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };
});
