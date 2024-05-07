<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ContactMessageNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct($contactMessage)
    {
        //
        $this->contactMessage = $contactMessage;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Nuevo mensaje de contacto')
            ->line('Un nuevo mensaje de contacto ha sido recibido.')
            ->line('Nombre: ' . $this->contactMessage->name)
            ->line('Correo Electrónico: ' . $this->contactMessage->email)
            ->line('Teléfono: ' . $this->contactMessage->phone)
            ->line('Mensaje: ' . $this->contactMessage->message);
    }
    

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
