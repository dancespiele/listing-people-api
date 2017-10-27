import { emit } from 'cluster';
import { 
    Route, Get, Post, Put, Delete, Exception, Body, Params, Query, Status
} from 'pyrite-server';
import {
    Emits, Emit, Broadcast
} from 'pyrite-server-emitter'
import {PeopleModel} from '../models';

@Route("/people")
export class People {
    @Get("/")
    async getPeople(@Query query) {
        console.log(query);
        const response = await PeopleModel
            .find((query.filter) ? JSON.parse(query.filter): {})
            .sort((query.sort) ? JSON.parse(query.sort): {})
            .limit((query.limit) ? parseInt(query.limit): null)
            .catch((error) => {
                console.log(error);
                throw Exception(500, error); 
            });
        console.log(response);
        return response;
    }
    @Post("/create")
    @Emits
    async addPeople(@Body person, @Emit emit) {
        const response = await PeopleModel.create(person)
            .catch((error) => {
                console.log(error);
                throw Exception(500, error);
            });
        emit(person);
        return response;
    }
    @Delete("/:id")
    @Emits
    async deletePeople(@Params("id") id, @Emit emit) {
        const response = await PeopleModel.findOne({_id: id})
            .remove()
            .catch((error) => {
                throw Exception(500, error);
            });
        emit(id);
        return response;
    }
}