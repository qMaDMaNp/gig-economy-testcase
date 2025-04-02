<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $branches = [
            [
                'id' => 1,
                'name' => 'Warszawa branch',
                'location' => 'Warszawa',
                'managersCount' => 2,
                'vehiclesCount' => 20,
                'img' => 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQTmMrYC8PemOy6CMBmYtlXarv4UjVUodkoBqC3A9pVKZIWOO4LyyiMUEwis3LWVypYC3j06QjU41bGUBP_yvxiPRZHv_70lBBaJI9MlA'
            ],
            [
                'id' => 2,
                'name' => 'Wroclaw branch',
                'location' => 'Wroclaw',
                'managersCount' => 2,
                'vehiclesCount' => 10,
                'img' => 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRVD2XA4ld-A_XLahwrbSekpcXM6yhH0kTgsG98w0SP4dFebWO33qTUisVyACUZv585BAIshtwzqGxAJlC7eGF8iKxL3IXOGH2_4Jefew'
            ],
        ];

        return response()->json($branches);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
