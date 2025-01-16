<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Horse;

class HorsesTableSeeder extends Seeder
{
    public function run()
    {
        Horse::create([
            'name' => 'Thunder',
            'age' => 5,
            'breed' => 'Arabian',
            'owner' => 'John Doe',
            'photo_url' => 'https://example.com/thunder.jpg',
        ]);

        Horse::create([
            'name' => 'Lightning',
            'age' => 3,
            'breed' => 'Thoroughbred',
            'owner' => 'Jane Smith',
            'photo_url' => 'https://example.com/lightning.jpg',
        ]);
    }
}
