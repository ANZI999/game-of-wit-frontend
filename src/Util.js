class Util {
    copy(initialValue) {
        var copy;
        if(Array.isArray(initialValue)) {
            copy = [];
            for(var i = 0; i < initialValue.length; i++) {
                copy.push(this.copy(initialValue[i]));
            }            
        } else if(initialValue === Object(initialValue)) {
            copy = {};
            for (var property in initialValue) {
                if (initialValue.hasOwnProperty(property)) {
                    copy[property] = this.copy(initialValue[property]);
                }
            }
        } else {
            copy = initialValue;
        }
        return copy;
    }
    
    isEnglish(value) {
        return /^[a-zA-Z0-9?!;,.:\-_@#$&*'"\s]*$/.test(value);
    }
    
    isInt(value) {
        return /^-?[1-9]\d*$/.test(value);
    }
}

export const util = new Util()