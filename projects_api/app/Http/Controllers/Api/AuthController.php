<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class AuthController extends Controller
{
    /** 
     * User registration.
    */

    public function register (Request $request){

        //validaciones
        $request -> validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        //crear usuario y almacenar en DB--> instanciar clase User:
        $user = new User();

        $user ->name = $request->name;
        $user ->email = $request->email;
        $user ->password = $request->password;
        $user ->save(); 
        
        //respuesta
        return response() ->json([
            'user' => $user,
            'msg' => 'User succesfully registered'
        ], 201);

    }

    public function login (){

        

    }

    // public function update(){
        
    // }

    // public function show-user-list(){
        
    // }

    // public function show-user-info(){
        
    // }

    // public function delete(){
        
    // }


}
