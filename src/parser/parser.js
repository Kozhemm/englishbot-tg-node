const axios = require('axios');
const jsdom = require('jsdom');
const fs = require('fs');
const parser = require("./class-parser");

const { JSDOM } = jsdom;


(async () => {

    const VERBS_URL = 'https://www.gingersoftware.com/content/grammar-rules/verbs/list-of-irregular-verbs/'
    const SELECTOR_WORDS = '.box.corners table tr'
    const WHERE_TO_SAVE = '../data-irregular-verbs/data.js'

    const html = await axios.get(VERBS_URL);
    const dom = new JSDOM(html.data);

    const listVerbs = dom.window.document.querySelectorAll(SELECTOR_WORDS);

    parser.pushCorrectEl(listVerbs)

    fs.writeFileSync(WHERE_TO_SAVE, JSON.stringify(parser.getData()), (err) => {
        console.log(err);
    })


})();

