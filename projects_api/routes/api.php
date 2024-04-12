<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\ContactMessageController;

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


//Rutas protegidas
Route::group(['middleware' =>['auth:sanctum']],function(){
    Route::post('/logout',[AuthController::class, 'logout']); 
    Route::post('/register',[AuthController::class, 'register']);
    //Route::post('/add-project',[ProjectController::class, 'store']);
    
});


//Auth User

Route::post('/login',[AuthController::class, 'login']); //Login

//proyectos del portfolio
Route::get('/projects',[ProjectController::class, 'index']); //index (ver todos los projectos)
Route::get('/projects/{id}',[ProjectController::class, 'show']);//ver detalle de proyecto

//primero sin auth ¿?
Route::post('/admin-panel',[ProjectController::class, 'store']);//guardar mensaje de contacto


//mensajes de contacto
Route::post('/contact-me',[ContactMessageController::class, 'store']);//guardar mensaje de contacto

/**ver los mesajes de contacto, iria luego en middleware (admin panel)**/
Route::get('/messages',[ContactMessageController::class, 'index']);




//Route::put('/update/id',[AuthController::class, 'update']); //update user
//Route::get('/show-users-list',[AuthController::class, 'show-users-list']); //index (ver todos los users)
//Route::get('/show-user-info/id',[AuthController::class, 'show-user-info']); //ver detalle de usuario
//Route::delete('/borrar-user-info',[AuthController::class, 'delete-user-info¿?']); //borrar info de usuario



