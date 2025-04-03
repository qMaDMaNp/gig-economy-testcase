<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BranchCreateTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_create_a_branch()
    {
        // Simulated branch data
        $branchData = [
            'name' => 'Wroclaw branch',
            'location' => 'Wroclaw',
            'img' => 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRVD2XA4ld-A_XLahwrbSekpcXM6yhH0kTgsG98w0SP4dFebWO33qTUisVyACUZv585BAIshtwzqGxAJlC7eGF8iKxL3IXOGH2_4Jefew'
        ];

        // Send a POST request to create a branch
        $response = $this->postJson('/api/branches', $branchData);

        // Check the response status is 201 (Created)
        $response->assertStatus(201);

        // Check if the branch exists in the database
        $this->assertDatabaseHas('branches', [
            'name' => 'Wroclaw branch',
            'location' => 'Wroclaw',
            'img' => 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRVD2XA4ld-A_XLahwrbSekpcXM6yhH0kTgsG98w0SP4dFebWO33qTUisVyACUZv585BAIshtwzqGxAJlC7eGF8iKxL3IXOGH2_4Jefew'
        ]);
    }

    /** @test */
    public function it_fails_validation_for_missing_fields()
    {
        // Send an empty request
        $response = $this->postJson('/api/branches', []);

        // Expect validation error (422 Unprocessable Entity)
        $response->assertStatus(422)
            ->assertJsonStructure([
                'message',
                'errors' => [
                    'name',
                    'location'
                ]
            ]);
    }
}
