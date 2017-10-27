import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';

class People extends Typegoose {
    @prop()
    name: string;

    @prop()
    superPower: boolean

    @prop()
    rich: boolean

    @prop()
    genius: boolean
}

export const PeopleModel = new People().getModelForClass(People, {
    schemaOptions: {
        collection: 'people'
    }
});