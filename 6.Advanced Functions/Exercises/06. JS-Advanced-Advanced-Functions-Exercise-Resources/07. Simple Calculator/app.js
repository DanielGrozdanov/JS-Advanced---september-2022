function calculator() {
    return {
        init : (selector1, selector2, resultSelector) => {
            this.s1 = document.querySelector(selector1)
            this.s2 = document.querySelector(selector2)
            this.res = document.querySelector(resultSelector);
        },
        add : () => {
            (this.res.value = Number(this.s1.value) + Number(this.s2.value))
        },
        subtract : () => {
            (this.res.value = Number(this.s1.value) - Number(this.s2.value))
        }
    };
}


const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 