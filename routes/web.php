<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'api'], function()
{
  Route::get('/', function (){
    return response()->json(['message' => 'Klasy API',
                             'status' => 'Connected']);
  });

  Route::resource('users', 'UsersController');
  Route::resource('keys', 'KeysController');
});


Route::get('/', function () {
    return redirect('api');
});
