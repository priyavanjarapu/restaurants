<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurants extends Model
{
    use HasFactory;

    // These are the fillable columns into the database;
    protected $fillable = [
        'image',
        'title',
        'description',
        'location',
        'rating',
        'food_items'
    ];
}
