<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProjectController;

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

Route::post('/login',[AuthController::class, 'login']); //Login

//Rutas protegidas
Route::group(['middleware' =>['auth:sanctum']],function(){

    Route::post('/logout',[AuthController::class, 'logout']); 
    Route::post('/register',[AuthController::class, 'register']);
    //Route::post('/new-project',[ProjectController::class, 'store']);
    
});


//Rutas Project

//Index GetAllProjects
// //index (ver todos los proyectos)
Route::get('/projects',[ProjectController::class, 'index']); //index (ver todos los projectos)
//Route::get('/project-detail',[ProjectController::class, 'show']);


//Route::put('/update/id',[AuthController::class, 'update']); //update user
//Route::get('/show-users-list',[AuthController::class, 'show-users-list']); //index (ver todos los users)
//Route::get('/show-user-info/id',[AuthController::class, 'show-user-info']); //ver detalle de usuario
//Route::delete('/show-user-info',[AuthController::class, 'show-user-info']); //ver detalle de usuario



