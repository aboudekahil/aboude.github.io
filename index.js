const getCssPropertyForRule = (rule, prop) => {
  let sheets = document.styleSheets;
  let slen = sheets.length;
  for (let i = 0; i < slen; i++) {
    let rules = document.styleSheets[i].cssRules;
    let rlen = rules.length;
    for (let j = 0; j < rlen; j++) {
      if (rules[j].selectorText == rule) {
        return rules[j].style[prop];
      }
    }
  }
};

document.querySelectorAll('#contact-list > a > li').forEach((item) => {
  item.addEventListener('mouseenter', () => {
    // console.log('li:hover .' + item.firstElementChild.classList[1]);
    let color = getCssPropertyForRule(
      'li:hover .' + item.firstElementChild.classList[1],
      'color'
    );
    // console.log(color);
    document.querySelector(':root').style.setProperty('--barColor', color);
  });

  item.addEventListener('mouseleave', () => {
    document.querySelector(':root').style.setProperty('--barColor', '#e8e6e3');
  });
});
