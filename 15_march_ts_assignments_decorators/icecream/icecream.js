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
var toppingAcknowledgementElement;
var emojiElement;
var flavourNameElement;
function confirmTopping(target, propertyKey, propertyDescriptor) {
    // save the target function into temp
    var tempMethod = propertyDescriptor.value;
    // change value of target function
    propertyDescriptor.value = function (...args) {
        var confirmTopping = confirm(`Decorator: Are you sure you want to add ${args[0]}?`);
        if (confirmTopping) {
            return tempMethod.apply(this, args);
        }
        console.log(`Topping ${args[0]} was not added to your order.`);
    };
    return;
}
function displayEmoji(target, propertyKey) {
    // get the strin value of changing property
    let value = target[propertyKey];
    // if we are accessing the proprety
    const getter = function () {
        return value;
    };
    // if we are setting the property
    const setter = function (flavourName) {
        switch (flavourName) {
            case 'Chocolate':
                value = '1';
                break;
            case 'Vanilla':
                value = '4';
                break;
            case 'Rajbhog':
                value = '3';
                break;
            case 'Butterscotch':
                value = '2';
                break;
            default:
                value = flavourName;
                break;
        }
    };
    // add setter and getter to target i.e IceCream.flavour
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}
class IceCream {
    constructor() {
        this.flavour = 'abc';
    }
    changeTopping(topping) {
        toppingAcknowledgementElement = document.getElementById('topping-acknowledgment');
        if (toppingAcknowledgementElement)
            toppingAcknowledgementElement.innerHTML = topping;
    }
}
__decorate([
    displayEmoji,
    __metadata("design:type", String)
], IceCream.prototype, "flavour", void 0);
__decorate([
    confirmTopping,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IceCream.prototype, "changeTopping", null);
let i = new IceCream();
function changeTopping(topping) {
    i.changeTopping(topping);
}
function changeFlavour(flavour) {
    // setting the property
    i.flavour = flavour;
    flavourNameElement = document.getElementById('flavourName');
    emojiElement = document.getElementById('emojiElement');
    if (flavourNameElement)
        flavourNameElement.innerHTML = flavour;
    // getting the property as number
    if (emojiElement)
        emojiElement.innerHTML = `<img class="emoji" src="./assets/${i.flavour}.png" alt="">`;
}
changeFlavour('Vanilla');
