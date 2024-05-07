<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Project;

class ProjectTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_user_no_auth_can_see_all_projects(): void
    {
         $this->withExceptionHandling();//nos tira errores de lo q realmente esta pasando

         Project::factory()->create();//si se pone solo create crea 1 x defecto si quiero mas debo poner el num ()

         $response = $this->getJson('/api/projects');

         $response-> assertStatus(200)
         ->assertJsonCount(1);

    }
}
