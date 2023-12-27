<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;


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

    public function login (Request $request){
        $request -> validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request-> email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
     
        $token = $user->createToken($request->email)->plainTextToken;

        return response() -> json([
            'token' => $token,
            'msg' => "User succesfully Logged In"
        ],200);
    

    }

    public function logout(Request $request){

        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'msg' => "User succesfully Logged Out"
        ]);


    }



    // public function logout(){
    //     //esto esta en la docu de laravel 10.x/sanctum#revokingtokens esta es para revocar el token
    //     //usado para autenticar el current request osea el q se esta usando asociado al usuario
    //     //en el momento del logout(hay tambien para borrar x id o todos los tokens)
    //     $request->user()->currentAccessToken()->delete();
        
    //     return response()->json([
    //         'msg' => "User succesfully Logged Out"
    //     ],200);
        
    // }

    // public function update(){
        
    // }

    // public function show-user-list(){
        
    // }

    // public function show-user-info(){
        
    // }

    // public function delete(){
        
    // }


}
