function Button(domQuery) {
  let className = `btn-${Math.random()}`;
  let state = {
    content: 'Click Me',
    count: 0,
  };

  function template() {
    let { content, count } = state;
    return `<button class="${className}">${content} : ${count}</button>`;
  }

  function render() {
    let dom = document.querySelector(domQuery);
    dom.innerHTML = template();
  }

  function updateState(obj) {
    state = Object.assign(state, obj);
    render();
  }

  function eventListener(evnt) {
    updateState({ count: state.count + 1 });
  }

  function addEventListener() {
    window.addEventListener('click', eventListener);
  }

  function mount() {
    render();
    addEventListener();
  }

  mount();

  return { updateState };
}

let btn = Button('#btn');
