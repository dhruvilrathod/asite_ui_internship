"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
class Validation {
    static addParamConstaint(target, propertyKey, paramCount, decoratorType) {
        switch (decoratorType) {
            case 'notnull':
                this.notNullParams.push({
                    paramCount: paramCount,
                    propertyKey: propertyKey,
                });
                break;
            case 'number':
                this.numberParams.push({
                    paramCount: paramCount,
                    propertyKey: propertyKey,
                });
                break;
            case 'string':
                this.stringParams.push({
                    paramCount: paramCount,
                    propertyKey: propertyKey,
                });
                break;
            case 'email':
                this.emailParams.push({
                    paramCount: paramCount,
                    propertyKey: propertyKey,
                });
                break;
            default:
                break;
        }
    }
    static addToNumberParams(target, propertyKey, paramCount, decoratorType) {
        this.numberParams.push(paramCount);
    }
}
Validation.notNullParams = [];
Validation.numberParams = [];
Validation.stringParams = [];
Validation.emailParams = [];
function ValidateMethod(target, propertyKey, descriptor) {
    let tempFunction = descriptor.value;
    descriptor.value = function (...args) {
        for (var a in args) {
            for (var j in Validation.notNullParams) {
                if (a == Validation.notNullParams[j].paramCount && propertyKey == Validation.notNullParams[j].propertyKey && (args[a] == null || args[a] == undefined)) {
                    console.log(`Null param ${args[a]} found, aborting execution of ${propertyKey}`);
                    return;
                }
            }
            for (var j in Validation.numberParams) {
                if (a == Validation.numberParams[j].paramCount && propertyKey == Validation.numberParams[j].propertyKey && (args[a] < 0 || typeof args[a] != 'number')) {
                    console.log(`Number param ${args[a]} is not valid, aborting execution of ${propertyKey}`);
                    return;
                }
            }
            for (var j in Validation.stringParams) {
                if (a == Validation.stringParams[j].paramCount && propertyKey == Validation.stringParams[j].propertyKey && (!args[a].match(/^[a-zA-Z0-9]+$/))) {
                    console.log(`String param ${args[a]} is not valid, aborting execution of ${propertyKey}`);
                    return;
                }
            }
            for (var j in Validation.emailParams) {
                if (a == Validation.emailParams[j].paramCount && propertyKey == Validation.emailParams[j].propertyKey && (!args[a].match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))) {
                    console.log(`Email param ${args[a]} is not valid, aborting execution of ${propertyKey}`);
                    return;
                }
            }
        }
        return tempFunction.apply(this, args);
    };
}
function notNull(target, propertyKey, paramCount) {
    Validation.addParamConstaint(target, propertyKey, paramCount, 'notnull');
}
function number(target, propertyKey, paramCount) {
    Validation.addParamConstaint(target, propertyKey, paramCount, 'number');
}
function string(target, propertyKey, paramCount) {
    Validation.addParamConstaint(target, propertyKey, paramCount, 'string');
}
function email(target, propertyKey, paramCount) {
    Validation.addParamConstaint(target, propertyKey, paramCount, 'email');
}
class TestClass {
    testMethod1(param0, param1) {
        console.log(`testMethod1(${param0}, ${param1}) called successfully`);
    }
    testMethod2(param0) {
        console.log(`testMethod2(${param0}) called successfully`);
    }
    testMethod3(param0) {
        console.log(`testMethod3(${param0}) called successfully`);
    }
    testMethod4(param0) {
        console.log(`testMethod4(${param0}) called successfully`);
    }
}
__decorate([
    ValidateMethod,
    __param(0, notNull),
    __param(1, notNull),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TestClass.prototype, "testMethod1", null);
__decorate([
    ValidateMethod,
    __param(0, number),
    __param(0, notNull),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestClass.prototype, "testMethod2", null);
__decorate([
    ValidateMethod,
    __param(0, string),
    __param(0, notNull),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestClass.prototype, "testMethod3", null);
__decorate([
    ValidateMethod,
    __param(0, email),
    __param(0, notNull),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestClass.prototype, "testMethod4", null);
let t = new TestClass();
// only check null
console.log('Calling t.testMethod1(6, null)...');
t.testMethod1(6, null);
console.log("Calling t.testMethod1(6, 'asdf')...");
t.testMethod1(6, 'asdf');
console.log('Calling t.testMethod2(-8)...');
t.testMethod2(-8);
console.log("Calling t.testMethod2('abc')...");
t.testMethod2('abc');
console.log('Calling t.testMethod2(8)...');
t.testMethod2(8);
console.log("Calling t.testMethod3('asdf@')...");
t.testMethod3('asdf@');
console.log("Calling t.testMethod3('asdf')...");
t.testMethod3('asdf');
console.log("Calling t.testMethod4('asdf@')...");
t.testMethod4('asdf@gmail');
t.testMethod4('asdf@gmail.com');
/*
how it works?

first prama decorators are executed in reverse order of param declarations
then final method decorator is executed
*/ 
