// method to get value of a css property
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

// icon color change
document.querySelectorAll('#contact-list > a > li').forEach((item) => {
  item.addEventListener('mouseenter', () => {
    let color = getCssPropertyForRule(
      'li:hover .' + item.firstElementChild.classList[1],
      'color'
    );
    document.querySelector(':root').style.setProperty('--barColor', color);
  });

  item.addEventListener('mouseleave', () => {
    document.querySelector(':root').style.setProperty('--barColor', '#e8e6e3');
  });
});

document.querySelector('.links').addEventListener('mouseenter', () => {
  document.querySelector('#balamand').style.opacity = 1;
});

document.querySelector('.links').addEventListener('mouseleave', () => {
  document.querySelector('#balamand').style.opacity = 0;
});

// wip
document.querySelector('#wip').addEventListener('click', () => {
  document.querySelector('#wip').innerHTML = 'not yet';
});
