import message from './message';

import '../scss/index.scss';

const paragraph = document.createElement('p');
paragraph.innerHTML = message;

document.body.prepend(paragraph);