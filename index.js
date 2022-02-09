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
let currentColor = '#e8e6e3';
document.querySelectorAll('#contact-list > a > li').forEach((item) => {
  item.addEventListener('mouseenter', () => {
    let color = getCssPropertyForRule(
      'li:hover .' + item.firstElementChild.classList[1],
      'color'
    );
    document.querySelector(':root').style.setProperty('--barColor', color);
  });

  item.addEventListener('mouseleave', () => {
    document
      .querySelector(':root')
      .style.setProperty('--barColor', currentColor);
  });
});

//svg logo
let index = 0;
document.querySelector('svg').addEventListener('click', () => {
  let colors = ['#8f36b7', '#bb2ba2', '#0077b5', '#ea4335', '#e8e6e3'];
  index *= !(index === 5);
  document
    .querySelector(':root')
    .style.setProperty('--barColor', colors[index]);
  currentColor = colors[index];
  index += 1;
});

// wip
document.querySelector('#wip').addEventListener('click', () => {
  document.querySelector('#wip').innerHTML = 'not yet';
});
