<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class StoreBranchRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255|unique:branches,name',
            'location' => 'required|string|max:255',
            'img' => 'nullable|url|max:2048',
        ];
    }

    public function messages(): array
    {
        return [
			'name.required' => 'Nazwa oddziału jest wymagana.',
			'name.string' => 'Nazwa musi być tekstem.',
			'name.max' => 'Nazwa może mieć maksymalnie 255 znaków.',
			'name.unique' => 'Taki oddział już istnieje.',

			'location.required' => 'Lokalizacja jest wymagana.',
			'location.string' => 'Lokalizacja musi być tekstem.',
			'location.max' => 'Lokalizacja może mieć maksymalnie 255 znaków.',

			'img.url' => 'Obraz musi być poprawnym adresem URL.',
			'img.max' => 'Obraz może mieć maksymalnie 2048 znaków.',
        ];
    }
}
