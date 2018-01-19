import {userSeeder} from './user.seeder';

async function run() {
    // execute userSeeder;
    await userSeeder();
}

// run all seeder
run()
    .then(result => {
        console.log("All seeders executed successfully");
        process.exit();
    })
    .catch(error => {
        console.log(error);
        process.exit(1);
    });