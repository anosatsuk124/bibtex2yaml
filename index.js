const Cite = require('citation-js');

const url = new URL(window.location.href);
const params = url.searchParams;
const bibtex_text = params.get('bibtex_text');
const response = document.getElementById('response');
const YAML = require('yamljs');

(async () => {
    const input = await Cite.inputAsync(bibtex_text);
    // const date_parts = input.get('issued').get('date-parts')[0];
    // const date = `${date_parts[0]}-${date_parts}`

    const json = {
        author: input[0]['author'],
        issue: input[0]['issue'],
        journal: input[0]['container-title'], 
        id: input[0]['id'], 
        title: input[0]['title'],
        tag: input[0]['type'],
    };
    console.log(YAML.stringify(json, 4));
    response.innerHTML = YAML.stringify(json, 4);
})();
