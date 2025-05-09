<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class contact_massages extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'email',
        'message text',
        'date',
    ];
}



?>