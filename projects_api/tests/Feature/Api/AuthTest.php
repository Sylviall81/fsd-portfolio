<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Hash;




class AuthTest extends TestCase
{
    use RefreshDatabase;
    /**
     * Should test a new user.
     */

    public function test_user_can_register(): void
    {
        $this ->postJson('api/register',[
            'name' => 'Patricia',
            'email' => 'patricia2023@gmail.com',
            'password' => Hash::make('123456789')
        ]);

        $this -> assertCount(1, User::all());

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



}
