<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Instruction;

class InstructionsTableSeeder extends Seeder
{
    public function run()
    {
        Instruction::create([
            'horse_id' => 1, 
            'vitamin' => 'Vitamin C',
            'dose' => 500,
            'special_instructions' => 'Administer after feeding',
        ]);
    }
}
