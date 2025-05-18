<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactFormController;

use App\Models\ContactForm;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/contactfrom', [ContactFormController::class, 'store']);
Route::get('/contactfrom', [ContactFormController::class, 'index']);
