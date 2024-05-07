<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class ContactMessage extends Model
{
    use HasFactory;
    use Notifiable;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'message'

    ];

    protected $hidden = [
        'created_at'
    ];

    public function routeNotificationForMail($notification)
    {
        // Definir el canal de notificación para el administrador
        return config('mail.admin_email');
    }



}
