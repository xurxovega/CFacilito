let render = (html, params) => {
    var varsToCatch = html.match(/[^\{\}]+(?=\})/g);
    for (var i = 0; i < varsToCatch.length; i++) {
        // Busca dentro de Parametros por orden del bucle, el valor según i.
        value = params[varsToCatch[i]];
        html = html.replace('{' + varsToCatch[i] + '}', value);
    }
    return html;
}

module.exports = {
    render
}