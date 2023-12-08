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
     * Should create a new user.
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
}
