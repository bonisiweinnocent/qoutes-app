import './style.css'
import './quote.css'
import LoveCounter from './love-counter';
import * as fun from 'everyday-fun';
import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

Alpine.plugin(persist)

window.Alpine = Alpine
Alpine.data('loveCounter', LoveCounter);

import Quotes from './quotes';

Alpine.data('quoteApp', Quotes)



Alpine.start()
document.querySelector('#app').innerHTML = "I 💚 Alpine JS!"
