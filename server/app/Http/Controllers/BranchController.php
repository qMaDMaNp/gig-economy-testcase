<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

use App\Models\Branch;
use App\Http\Requests\StoreBranchRequest;
use App\Http\Resources\BranchResource;


class BranchController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		$branches = Branch::all();

		// // Mock data
		// $branches = [
		// 	[
		// 		'id' => 1,
		// 		'name' => 'Warszawa branch',
		// 		'location' => 'Warszawa',
		// 		'managersCount' => 2,
		// 		'vehiclesCount' => 20,
		// 		'img' => 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQTmMrYC8PemOy6CMBmYtlXarv4UjVUodkoBqC3A9pVKZIWOO4LyyiMUEwis3LWVypYC3j06QjU41bGUBP_yvxiPRZHv_70lBBaJI9MlA'
		// 	],
		// 	[
		// 		'id' => 2,
		// 		'name' => 'Wroclaw branch',
		// 		'location' => 'Wroclaw',
		// 		'managersCount' => 2,
		// 		'vehiclesCount' => 10,
		// 		'img' => 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRVD2XA4ld-A_XLahwrbSekpcXM6yhH0kTgsG98w0SP4dFebWO33qTUisVyACUZv585BAIshtwzqGxAJlC7eGF8iKxL3IXOGH2_4Jefew'
		// 	],
		// ];

		return BranchResource::collection($branches);
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(StoreBranchRequest $request): JsonResponse
	{
		$branch = Branch::create($request->validated());

		return response()->json([
			'message' => 'Branch created successfully',
			'branch' => $branch
		], 201);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(string $id)
	{
		$branch = Branch::findOrFail($id);
		return new BranchResource($branch);
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
	public function destroy($id): JsonResponse
	{
		$branch = Branch::find($id);

		if (!$branch) {
			return response()->json(['message' => 'Branch not found'], 404);
		}

		// Soft delete
		$branch->delete();

		return response()->json(['message' => 'Branch deleted successfully']);
	}
}
