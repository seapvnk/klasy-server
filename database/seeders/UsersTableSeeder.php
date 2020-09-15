<?php

namespace Database\Seeders;

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        User::create([
            'name' => "Klasy",
            'username' => "Klasy",
            'bio' => "Escola online",
            'type' => "Administrador",
            'password' => bcrypt('secret'),
        ]);

        for ($i = 0; $i < 10; $i++) {
            User::create([
                'name' => $faker->name,
                'username' => $faker->userName,
                'bio' => $faker->sentence,
                'type' => "Professor",
                'password' => bcrypt('secret'),
            ]);
        }
        
        for ($i = 0; $i < 50; $i++) {
            User::create([
                'name' => $faker->name,
                'username' => $faker->userName,
                'bio' => $faker->sentence,
                'type' => "Estudante",
                'password' => bcrypt('secret'),
            ]);
        }
    }
}
