import { 
    Route, Get, Post, Put, Delete, Exception, Body, Params, Query, Status
} from 'pyrite-server';
import {PeopleModel} from '../models';

@Route("/people")
export class People {
    @Get("/")
    async getPeople(@Query query) {
        try {
            console.log(query);
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
    async addPerson(@Body person) {
        try {
            const response = await PeopleModel.create(person);
            console.log(response);
            return response;
        } catch(error) {
            throw Exception(500, error);
        }
    }
    @Delete("/:id")
    async deletePerson(@Params("id") id) {
        try {
            const response = await PeopleModel.findById(id)
            .remove();
            return {id};
        } catch (error) {
            throw Exception(500, error);
        }
    }
}