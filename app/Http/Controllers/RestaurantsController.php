<?php

namespace App\Http\Controllers;

use App\Models\Restaurants;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RestaurantsController extends Controller
{
    // Get the list of ALL restuarants from the database
    public function index(Request $request)
    {
        $restuarants = Restaurants::all();

        return response($restuarants, 200);
    }

    // Fetch specific restuarant details
    public function fetchRestaurant($id)
    {
    }

    // Store restuarant details into database
    public function store(Request $request)
    {
        $data = $request -> all();
        $validator = Validator::make($data, [
            'title' => 'required | string',
            'description' => 'required | string',
            'image' => 'required | string',
            'location' => 'required | string',
            'rating' => 'required | integer',
            'food_items' => 'required | json',
        ]);

        if ($validator -> fails()) {
            return response($validator -> errors(), 400);
        }

        $restaurant = Restaurants::create([
            'title' => $request -> title,
            'description' => $request -> description,
            'image' => $request -> image,
            'location' => $request -> location,
            'rating' => $request -> rating,
            'food_items' => $request -> food_items
        ]);
        if (!$restaurant) {
            return response('Something went wrong', 500);
        }
        return response($restaurant, 200);
    }

    // Update specific restuarant details in the database
    public function update(Request $request, $id)
    {
    }

    // Delete specific restuarant from the database
    public function delete($id)
    {
    }

    // Upload image processor API
    public function image(Request $request) {
        $data = $request -> all();
        $validator = Validator::make($data, [
            'image' => 'required | image | max: 2048'
        ]);

        if ($validator -> fails()) {
            return response($validator -> errors(), 400);
        }

        $filepath = '/storage/app/'.$request->file('image')->store('public');

        return response(['data' => $filepath], 200);
    }
}
