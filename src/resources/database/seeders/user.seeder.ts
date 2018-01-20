import { getRepository } from 'typeorm';
import { databaseConnection } from '../../../commons/database/database.connection';
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
            first_name: firstName,
            last_name: lastName,
            primary_email: faker.email(),
            primary_phone: faker.phone(),
            user_name: userName,
            birth_date: faker.birthday(),
            gender: faker.gender(),
            profile_photo: faker.url()
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