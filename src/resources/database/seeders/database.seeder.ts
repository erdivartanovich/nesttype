import {userSeeder} from './user.seeder';

async function run() {
    // execute userSeeder;
    await userSeeder();
}

// run all seeder
run()
    .then(result => process.exit())
    .catch(error => process.exit(1));