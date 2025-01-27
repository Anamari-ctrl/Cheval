<?php

namespace Database\Factories;

use App\Models\FeedingSchedule;
use Illuminate\Database\Eloquent\Factories\Factory;

class FeedingScheduleFactory extends Factory
{
    protected $model = FeedingSchedule::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'horse_id' => \App\Models\Horse::inRandomOrder()->value('id'),
            'feeding_time' => $this->faker->randomElement(['Morning', 'Afternoon', 'Evening']),
            'feed_type' => $this->faker->randomElement(['Hay', 'Oats', 'Grain', 'Pellets']),
            'quantity' => $this->faker->randomFloat(2, 1, 10), // Quantity between 1kg and 10kg
            'instructions' => $this->faker->sentence(8), // Random feeding instructions
        ];
    }

}
