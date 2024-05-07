<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'short_description',
        'project_background',
        'project_link',
        'project_repo',
        'cover_img_url',
        'hero_img_url',
        'static_preview_1',
        'static_preview_2',
        'static_preview_3'

    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];


}
