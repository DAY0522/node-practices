module.exports = {
    PI: 3.14,
    min: function() {
        var min = Number.MAX_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){ // Array.from(arguments) : 유사 배열을 넣으면 배열로 변환
            if(e < min) {
                min = e;
            }
        });
        return min;
    },
    max: function() {
        var max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            if(e > max) {
                max = e;
            }
        });
        return max;
    }
}