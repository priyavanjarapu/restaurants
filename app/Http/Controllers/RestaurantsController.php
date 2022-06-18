<?php

namespace App\Http\Controllers;

use App\Models\Restaurants;
use Illuminate\Http\Request;

class RestaurantsController extends Controller
{
    // Get the list of ALL restuarants from the database
    public function index(Request $request)
    {
        $restuarants = Restaurants::all();

        return response($restuarants, 200);
    }

    // Fetch specific restuarant details
    public function fetchResturant($id)
    {
    }

    // Store restuarant details into database
    public function store(Request $request)
    {
    }

    // Update specific restuarant details in the database
    public function update(Request $request, $id)
    {
    }

    // Delete specific restuarant from the database
    public function delete($id)
    {
    }
}
