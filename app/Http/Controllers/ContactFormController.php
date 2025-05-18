<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactForm;

class ContactFormController extends Controller
{
    public function index()
    {
        $messages = ContactForm::latest()->get();
        return response()->json(['data' => $messages, 'status' => 'success'], 200);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message_title' => 'required|string',
            'message' => 'required|string'
        ]);

        $message = ContactForm::create($data);
        return response()->json(['status' => 'sent', 'data' => $message], 200);
    }
}