<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('short_description');
            $table->string('project_background');
            $table->string('project_link');
            $table->string('project_repo');
            $table->string('cover_img_url');
            $table->string('hero_img_url');
            $table->string('static_preview_1');
            $table->string('static_preview_2');
            $table->string('static_preview_3');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
