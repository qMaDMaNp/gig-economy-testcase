<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Branch;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $branches = [
			[
				'name' => 'Warszawa branch',
				'location' => 'Warszawa',
				'img' => 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQTmMrYC8PemOy6CMBmYtlXarv4UjVUodkoBqC3A9pVKZIWOO4LyyiMUEwis3LWVypYC3j06QjU41bGUBP_yvxiPRZHv_70lBBaJI9MlA'
			],
			[
				'name' => 'Wroclaw branch',
				'location' => 'Wroclaw',
				'img' => 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRVD2XA4ld-A_XLahwrbSekpcXM6yhH0kTgsG98w0SP4dFebWO33qTUisVyACUZv585BAIshtwzqGxAJlC7eGF8iKxL3IXOGH2_4Jefew'
			],
		];

        foreach ($branches as $branch) {
            Branch::create($branch);
        }
    }
}
