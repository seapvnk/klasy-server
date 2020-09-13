<?php

use Illuminta\Database\Seeder;

class UserSeed extends Seeder
{
  public function run()
  {
    App\User::create([
      'name' => str_random(10),
      'username' => str_random(20),
      'bio' => str_random(120),
      'type' => 'Estudante',
      'password' => bcrypt('secret')
    ]);
    App\User::create([
      'name' => str_random(10),
      'username' => str_random(20),
      'bio' => str_random(120),
      'type' => 'Professor',
      'password' => bcrypt('secret')
    ]);

  }  
}
