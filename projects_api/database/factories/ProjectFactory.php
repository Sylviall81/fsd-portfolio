<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'title' => fake()->word(),
            'short_description'=> fake()->paragraph() ,
            'project_background' => fake()->paragraph(2),
            'project_link'=> 'https://sylviall81.github.io/myJsNotebook/',
            'project_repo'=> 'https://github.com/Sylviall81/factic',
            'cover_img_url'=> fake()->imageUrl(640, 480, 'animals', true),
            'hero_img_url'=> fake()->imageUrl(1100, 500, 'animals', true),
            'static_preview_1'=> fake()->imageUrl(640, 480, 'animals', true),
            'static_preview_2'=> fake()->imageUrl(640, 480, 'animals', true),
            'static_preview_3'=> fake()->imageUrl(640, 480, 'animals', true)
        ];
    }
}
