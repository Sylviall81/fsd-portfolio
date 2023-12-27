<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Auth User
Route::post('/register',[AuthController::class, 'register']);
Route::post('/login',[AuthController::class, 'login']); //Login
//Route::post('/logout',[AuthController::class, 'logout']); 

//Route::put('/update/id',[AuthController::class, 'update']); //update user
//Route::get('/show-users-list',[AuthController::class, 'show-users-list']); //index (ver todos los users)
//Route::get('/show-user-info/id',[AuthController::class, 'show-user-info']); //ver detalle de usuario
//Route::delete('/show-user-info',[AuthController::class, 'show-user-info']); //ver detalle de usuario


