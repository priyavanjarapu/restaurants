<?php

namespace App\Http\Controllers;

use App\Models\Restaurants;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class RestaurantsController extends Controller
{
    // Get the list of ALL restuarants from the database
    public function index(Request $request)
    {
        $title = Str::lower($request->title);

        $restaurants = Restaurants::query();

        if ($title) {
            $restaurants = $restaurants->where('title', 'LIKE', '%' . $title . '%');
        }

        $data = $restaurants->get();
        foreach ($data as $item) {
            $item->food_items = json_decode($item->food_items);
        }

        $success['data'] = $data;
        $success['message'] = 'Successfully fetched';

        return response($success, 200);
    }

    // Fetch specific restuarant details
    public function fetchRestaurant($id)
    {
        $restaurant = Restaurants::where('id', $id)->get()->first();
        if (!$restaurant) {
            return response(['data' => null, 'message' => 'No Restaurant found with given ID'], 404);
        }

        $restaurant->food_items = json_decode($restaurant->food_items);

        return response(['data' => $restaurant, 'message' => 'Fetched successfully'], 200);
    }

    // Store restuarant details into database
    public function store(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
            'title' => 'required | string',
            'description' => 'required | string',
            'image' => 'required | string',
            'location' => 'required | string',
            'rating' => 'required | integer',
            'food_items' => 'required | json',
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), 400);
        }

        $restaurant = Restaurants::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $request->image,
            'location' => $request->location,
            'rating' => $request->rating,
            'food_items' => $request->food_items
        ]);
        if (!$restaurant) {
            return response('Something went wrong', 500);
        }
        return response($restaurant, 200);
    }

    // Update specific restuarant details in the database
    public function update(Request $request, $id)
    {
        $restaurant = Restaurants::where('id', $id)->get()->first();
        if (!$restaurant) {
            return response(['data' => null, 'message' => 'Restaurant not found'], 404);
        }

        $restaurant->update($request->all());

        return response(['data' => $restaurant, 'message' => 'Updated Successfully'], 200);
    }

    // Delete specific restuarant from the database
    public function delete($id)
    {
        $restaurant = Restaurants::where('id', $id)->get()->first();

        if (!$restaurant) {
            return response(['data' => null, 'message' => 'Restaurant not found'], 404);
        }

        $restaurant->delete();

        return response(['data' => $restaurant, 'message' => 'Restaurant deleted successfully'], 200);
    }

    // Upload image processor API
    public function image(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
            'image' => 'required | image | max: 2048'
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), 400);
        }

        $filepath = '/storage/app/' . $request->file('image')->store('public');

        return response(['data' => $filepath], 200);
    }
}
