function solution(){
    let content = '';
    //helloagain
    return {
        append: (s) => content += s,
        removeStart: (n) => content = content.slice(n),
        removeEnd: (n) => content = content.slice(0, content.length - n),
        print: () => console.log(content)
    };

}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

