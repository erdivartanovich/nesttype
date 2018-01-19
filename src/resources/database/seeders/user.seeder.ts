import { getRepository } from 'typeorm';
import { databaseConnection } from '../../../commons/database.connection';
import { User } from '../../../domains/user/user.entity';
import { Chance } from 'chance';
import { error } from 'util';

const faker = new Chance();

const generateUser = function() {
    var users = [];
    for (var i=0; i<100; i++) {
        var firstName = faker.first(),
            lastName = faker.last(),
            userName = (firstName+lastName).toLowerCase()
        users.push({
            id: faker.guid(),
            firstName: firstName,
            lastName: lastName,
            primaryEmail: faker.email(),
            primaryPhone: faker.phone(),
            userName: userName,
            birthDate: faker.birthday(),
            gender: faker.gender(),
            profilePhoto: faker.url()
        });
    }
    return users;
}

export async function userSeeder() {
    console.log("Seeding User ...");
    const connection = await databaseConnection();
    await connection.getRepository(User)
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(generateUser())
        .execute();
}