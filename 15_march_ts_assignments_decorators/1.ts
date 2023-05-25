class Validation {

    // maintain the records of params needed to be checked while function validatoin
    public static notNullParams: any[] = [];
    public static numberParams: any[] = [];
    public static stringParams: any[] = [];
    public static emailParams: any[] = [];

    // add param with decorators to corrosponding array
    public static addParamConstaint(target: any, propertyKey: string, paramCount: number, decoratorType: string) {
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
}

// this will actually validate method and stop execution if validation fails
function ValidateMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    let tempFunction = descriptor.value;

    // compare all the params of any function with all the Validators' constraints
    descriptor.value = function (...args: any[]) {
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

// Parameter decorator to add param for validation

function notNull(target: any, propertyKey: string, paramCount: number) {
    Validation.addParamConstaint(target, propertyKey, paramCount, 'notnull');
}

function number(target: any, propertyKey: string, paramCount: number) {
    Validation.addParamConstaint(target, propertyKey, paramCount, 'number');
}

function string(target: any, propertyKey: string, paramCount: number) {
    Validation.addParamConstaint(target, propertyKey, paramCount, 'string');
}

function email(target: any, propertyKey: string, paramCount: number) {
    Validation.addParamConstaint(target, propertyKey, paramCount, 'email');
}

class TestClass {

    @ValidateMethod
    testMethod1(@notNull param0: any, @notNull param1: any): void {
        console.log(`testMethod1(${param0}, ${param1}) called successfully`);
    }

    @ValidateMethod
    testMethod2(@number @notNull param0: any) {
        console.log(`testMethod2(${param0}) called successfully`);
    }

    @ValidateMethod
    testMethod3(@string @notNull param0: any) {
        console.log(`testMethod3(${param0}) called successfully`);
    }

    @ValidateMethod
    testMethod4(@email @notNull param0: any) {
        console.log(`testMethod4(${param0}) called successfully`);
    }
}

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
t.testMethod3('asdf')

console.log("Calling t.testMethod4('asdf@')...");
t.testMethod4('asdf@gmail')
t.testMethod4('asdf@gmail.com')




/*
how it works?

first prama decorators are executed in reverse order of param declarations
then final method decorator is executed
*/