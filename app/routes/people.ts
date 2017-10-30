import { 
    Route, Get, Post, Put, Delete, Exception, Body, Params, Query, Status
} from 'pyrite-server';
import {PeopleModel} from '../models';
import {Emit, Emits, Broadcast} from 'pyrite-server-emitter';

@Route("/people")
export class People {
    @Get("/")
    async getPeople(@Query query) {
        try {
            const response = await PeopleModel
            .find(query.filter)
            .sort(query.sort)
            .limit(query.limit);
            return response;
        } catch(error) {
            throw Exception(500, error);
        }
    }
    @Post("/")
    @Broadcast
    async addPerson(@Body person, @Emit emit) {
        try {
            const response = await PeopleModel.create(person);
            console.log(response);
            emit(response);
            return response;
        } catch(error) {
            throw Exception(500, error);
        }
    }
    @Delete("/:id")
    @Broadcast
    async deletePerson(@Params("id") id, @Emit emit) {
        try {
            const response = await PeopleModel.findById(id)
            .remove();
            emit(id);
            return response;
        } catch (error) {
            throw Exception(500, error);
        }
    }
}