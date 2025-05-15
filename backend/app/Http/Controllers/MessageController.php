<?php
namespace App\Http\Controllers;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
     public function store(Request $request)
    {
        $request->validate([
            'sender' => 'required|string|max:255',
            'receiver' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        $message = Message::create([
            'sender' => $request->sender,
            'receiver' => $request->receiver,
            'message' => $request->message,
        ]);

        return response()->json(['status' => 'sent', 'data' => $message], 201);
    }
}
