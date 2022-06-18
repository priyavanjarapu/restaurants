<?php

use App\Http\Controllers\RestaurantsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Defining API route for restuarant
Route::group(['prefix' => 'restuarants'], function () {
    Route::get('', [RestaurantsController::class, 'index']);
    Route::get('/{id}', [RestaurantsController::class, 'fetchResturant']);
    Route::post('', [RestaurantsController::class, 'store']);
    Route::post('/update/{id}', [RestaurantsController::class, 'update']);
    Route::post('/delete/{id}', [RestaurantsController::class, 'delete']);
});
