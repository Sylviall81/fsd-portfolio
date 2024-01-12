<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ContactMessage;
use App\Notifications\ContactMessageNotification;

class ContactMessageController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //

        $validatedData = $request->validate([
            'name' => 'required|string',
            'phone' => 'nullable|string',
            'email' => 'required|email',
            'message' => 'required|string'
        ]);

        $contactMessage = ContactMessage::create($validatedData);

        // $contactMessage->notify(new ContactMessageNotification($contactMessage));
      


        return response()->json(['message' => 'Mensaje de contacto almacenado con éxito', 'data' => $contactMessage], 201);
    }


}

