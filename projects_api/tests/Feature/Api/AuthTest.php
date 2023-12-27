<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum; 




class AuthTest extends TestCase
{
    use RefreshDatabase;
    /**
     * Should test a new user.
     */

    public function test_user_can_register(): void
    {

        //como register es una ruta protegida creo un usuario
        //que es quien registra el nuevo usuario si no fuera protegida
        //de la 27 a la 31 es innecesario.

        $user = User::factory() ->create([
            'password' => Hash::make('abcdefghi'),
        ]);
    
        Sanctum::actingAs($user,['*']);

        $this ->postJson('api/register',[
            'name' => 'Patricia',
            'email' => 'patricia2023@gmail.com',
            'password' => Hash::make('123456789')
        ]);

        $this -> assertCount(2, User::all());

    }

    /**
     * Should test a user login.
     */

    public function test_user_can_login(): void
    {
        
        $user = User::factory() ->create([
                'password' => Hash::make('abcdefghi'),
        ]);
        
        $response = $this ->postJson('api/login',[
            'email' => $user->email,
            'password' => 'abcdefghi'
        ]);

        $response -> assertStatus(200);
        $response -> assertJsonFragment(['msg' => "User succesfully Logged In"]);

        
    }

    public function test_user_can_logout(): void
    {
        
        $user = User::factory() ->create([
                'password' => Hash::make('abcdefghi'),
        ]);
        
        $response = $this ->postJson('api/login',[
            'email' => $user->email,
            'password' => 'abcdefghi'
        ]);

        // tambien puede ser Auth::user() es lo mismo actuando como usuario depende de la libreria
        Sanctum::actingAs($user,['*']);
        

        $response = $this->postJson('api/logout');
        $response -> assertJsonFragment([
            'msg' => "User succesfully Logged Out"
        ]);

        
    }




}
