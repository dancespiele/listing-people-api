import { request } from 'http';
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
    async getPeople(@Query('query') query) {
        const request = JSON.parse(query);
        try {
            const response = await PeopleModel
            .find(request.filter)
            .sort(request.sort)
            .limit(request.limit);
            console.log(response);
            return response;
        } catch(error) {
            throw Exception(500, error);
        }
    }
    @Post("/create")
    @Emits
    async addPeople(@Body person, @Emit emit) {
        try {
            const response = await PeopleModel.create(person);
            console.log(response);
            emit(person);
            return response;
        } catch(error) {
            throw Exception(500, error);
        }
    }
    @Delete("/:id")
    @Emits
    async deletePeople(@Params("id") id, @Emit emit) {
        try {
            const response = await PeopleModel.findOne({_id: id})
            .remove();
            emit(id);
            return response;
        } catch (error) {
            throw Exception(500, error);
        }
    }
}