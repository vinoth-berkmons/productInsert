
export class Products {
    public name: string;
    public definitionUrl: string;

    constructor(name: string, definitionUrl: string) {
        this.name = name;
        this.definitionUrl = definitionUrl;
    }
}

export class ProductDetail {
    public caption: string;
    public type: string;
    public mandatory: boolean;
    public defaultValue: string;
    public validationMessage; string;

    constructor(caption: string, type: string, mandatory: boolean, defaultValue: string, validationMessage: string) {
        this.caption = caption;
        this.type = type;
        this.mandatory = mandatory;
        this.defaultValue = defaultValue;
        this.validationMessage = validationMessage;
    }
}
