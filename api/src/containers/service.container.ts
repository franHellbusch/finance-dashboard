import { Document, Model } from "mongoose";
import { handleMongoError } from "../helpers";

class ServiceContainer<T extends Document> {
    private readonly model: Model<T>;
    constructor(model: Model<T>) {
        this.model = model;
    }

    public getAll = async (): Promise<T[]> => {
        try {
            return await this.model.find();
        } catch (error) {
            throw handleMongoError(error);
        }
    };

    public getById = async (id: string): Promise<T> => {
        try {
            const doc = await this.model.findById(id);
            if (!doc) throw new Error("Not found");

            return doc;
        } catch (error) {
            throw handleMongoError(error);
        }
    };

    public save = async (object: T): Promise<T> => {
        try {
            const newDoc = new this.model(object);
            return await newDoc.save();
        } catch (error) {
            throw handleMongoError(error);
        }
    };

    public deleteById = async (id: string): Promise<Document> => {
        try {
            const doc = await this.model.findByIdAndDelete(id);
            if (!doc) throw new Error("Not found");

            return doc;
        } catch (error) {
            throw handleMongoError(error);
        }
    };
}

export default ServiceContainer;
