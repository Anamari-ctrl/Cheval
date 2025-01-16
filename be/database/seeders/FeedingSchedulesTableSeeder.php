<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\FeedingSchedule;

class FeedingSchedulesTableSeeder extends Seeder
{
    public function run()
    {
        FeedingSchedule::create([
            'horse_id' => 1, // Ensure horse with ID 1 exists
            'feed_type' => 'Hay',
            'quantity' => 5,
            'feeding_time' => 'morning',
        ]);
    }
}
