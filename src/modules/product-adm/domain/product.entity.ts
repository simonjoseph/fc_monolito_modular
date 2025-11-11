import AggregateRootInterface from "../../@shared/domain/entity/aggregate-root.interface";
import BaseEntity from "../../@shared/domain/entity/base.entity"
import Id from "../../@shared/domain/value-object/id.value-object";

type ProductProps = {
    id?: Id;
    name: string;
    description: string;
    purchaPrice: number;
    stock: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default class Product extends BaseEntity implements AggregateRootInterface{
    private _name: string;
    private _description: string;
    private _purchaPrice: number;
    private _stock: number;

    constructor(props: ProductProps){
        super(props.id);
        this._name = props.name;
        this._description =  props.description;
        this._purchaPrice = props.purchaPrice;
        this._stock = props.stock;
    }

    get name(): string {
        return this._name;
    }
    
    get description(): string {
        return this._description;
    }

    get purchaPrice(): number {
        return this._purchaPrice;
    }
    
    get stock(): number {
        return this._stock;
    }

    set name(value: string) {
        this._name = value;
    }

    set description(value: string) {
        this._description = value;
    }

    set purchaPrice(value: number) {
        this._purchaPrice = value;
    }

    set stock(value: number) {
        this._stock = value;
    }
}