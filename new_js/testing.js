function concatStrings(strA, strB){
    return strA + strB;
}

console.log(concatStrings("abc","def"));
console.log(concatStrings("1","2"));
console.log(concatStrings(1,2));

expect(concatStrings("abc","def")).toBe("abcdef");