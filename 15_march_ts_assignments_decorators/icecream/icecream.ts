var toppingAcknowledgementElement!: HTMLElement | null;
var emojiElement!: HTMLElement | null;
var flavourNameElement!: HTMLElement | null;

function confirmTopping(target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
    
    // save the target function into temp
    var tempMethod = propertyDescriptor.value;

    // change value of target function
    propertyDescriptor.value = function (...args: any[]) {
        var confirmTopping = confirm(`Decorator: Are you sure you want to add ${args[0]}?`);
        if (confirmTopping) {
            return tempMethod.apply(this, args);
        }
        console.log(`Topping ${args[0]} was not added to your order.`);
    }; return;
}

function displayEmoji(target: any, propertyKey: string) {
    
    // get the strin value of changing property
    let value = target[propertyKey];
    
    // if we are accessing the proprety
    const getter = function () {
        return value;
    };

    // if we are setting the property
    const setter = function (flavourName: string) {
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
    @displayEmoji
    public flavour: string = 'abc';

    @confirmTopping
    public changeTopping(topping: string) {
        toppingAcknowledgementElement = document.getElementById('topping-acknowledgment');
        if (toppingAcknowledgementElement) toppingAcknowledgementElement.innerHTML = topping;
    }
}

let i = new IceCream();

function changeTopping(topping: string) {
    i.changeTopping(topping);
}

function changeFlavour(flavour: string) {
    // setting the property
    i.flavour = flavour;
    flavourNameElement = document.getElementById('flavourName');
    emojiElement = document.getElementById('emojiElement');

    if (flavourNameElement) flavourNameElement.innerHTML = flavour;
    
    // getting the property as number
    if (emojiElement) emojiElement.innerHTML = `<img class="emoji" src="./assets/${i.flavour}.png" alt="">`;
}

changeFlavour('Vanilla');