function convert(json) {

    let parsed = JSON.parse(json);

    let comlumNames = Object.keys(parsed[0]);
    let values = parsed.map(obj => Object.values(obj));

    let result = '<table>\n';

    appendHeaders(comlumNames)
    appendValues(values)

    result += '</table>';
    function appendValues(values) {
        for (let value of values) {
            result += '    <tr>';
            result += `<td>${escape(value[0])}</td><td>${escape(value[1])}</td>`;
            result += `</tr>\n`;
        }
    }

    function appendHeaders(comlumNames) {
        result += '   <tr>';
    
        for (let columName of comlumNames) {
            result += `<th>${columName}</th>`
        }
    
        result += `</tr>\n`;
    }

    function escape(value){
        return value.toString().replace('<','&lt;').replace('>','&gt;');
    }
    console.log(result);
    
}


convert(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
);