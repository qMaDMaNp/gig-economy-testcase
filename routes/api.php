<?php

use App\Http\Middleware\CorsMiddleware;
use Illuminate\Support\Facades\Route;

Route::middleware([CorsMiddleware::class])->group(function () {
    Route::get('/', function () {
        return 'oyyy leleka';
    });
});