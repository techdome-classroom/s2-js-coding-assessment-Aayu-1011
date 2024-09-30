/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    let mapping={
        ')':'(',
        '}':'{',
        ']':'['
    };
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char in mapping) {
            let topElement = stack.length ? stack.pop() : '#';

            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length==0;
};

module.exports = { isValid };


