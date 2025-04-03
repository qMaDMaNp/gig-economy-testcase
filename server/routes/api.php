<?php

use Illuminate\Support\Facades\Route;

// Middlewares
use App\Http\Middleware\CorsMiddleware;

// Controllers
use App\Http\Controllers\BranchController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\VehicleController;

Route::middleware([CorsMiddleware::class])->group(function () {
    Route::prefix('branches')->group(function () {
        Route::get('/', [BranchController::class, 'index']);
        Route::get('/{id}', [BranchController::class, 'show']);

        Route::post('/', [BranchController::class, 'store']);

        Route::delete('/{id}', [BranchController::class, 'destroy']);
    });

    Route::prefix('managers')->group(function () {
        Route::get('/', [ManagerController::class, 'index']);
        Route::get('/{id}', [ManagerController::class, 'show']);
        

        Route::post('/', [ManagerController::class, 'store']);
    });

    Route::prefix('vehicles')->group(function () {
        Route::get('/', [VehicleController::class, 'index']);
        Route::get('/{id}', [VehicleController::class, 'show']);

        Route::post('/', [VehicleController::class, 'store']);
    });
});