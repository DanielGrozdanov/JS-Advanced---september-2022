(function solve() {
  String.prototype.ensureStart = function (str) {

    let newString = "";
    return newString = !this.startsWith(str) ? newString.concat(str, this) : this.toString();

  }

  String.prototype.ensureEnd = function (str) {
    let newString = "";
    return newString = !this.endsWith(str, this.length) ? newString.concat(this, str) : this.toString();

  }

  String.prototype.isEmpty = function () {
    return this.length <= 0 ? true : false;

  }

  String.prototype.truncate = function (n) {
    if (n < 4) {
      let dot = "."
      return dot.repeat(n)
    }
    if (this.length <= n) {
      return this.toString();
    }

    if (this.includes(" ")) {
      let result = this.toString();
      while (result.length > n - 3) {
        result = result.split(" ");
        result.pop();
        result = result.join(" ")
      }
      return result.concat("...");
    } else {
      return this.substring(this, n - 3).concat("...");
    }
  }

  String.format = function (string, ...params) {
    let pattern = /{[0-9]+}/g;
    let placeholder = null;
    while ((placeholder = pattern.exec(string)) != null) {
      if (params[Number(placeholder[0][1])]) {
        string = string.replace(placeholder[0], params[placeholder[0][1]]);
      }
    }
    return string.slice();
  }
})()



let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
console.log(str);
// str = String.format('The {0} {1} fox',
//   'quick', 'brown');
// str = String.format('jumps {0} {1}',
//   'dog');
