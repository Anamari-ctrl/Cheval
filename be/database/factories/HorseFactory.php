<?php
namespace Database\Factories;

use App\Models\Horse;
use Illuminate\Database\Eloquent\Factories\Factory;

class HorseFactory extends Factory
{
    protected $model = Horse::class;

    protected static $photoNames = [
        'horse1.jpg', 'horse2.jpg', 'horse3.jpg', 'horse4.jpg', 'horse5.jpg',
        'horse6.jpg', 'horse7.jpg', 'horse8.jpg', 'horse9.jpg', 'horse10.jpg', 'horse11.jpg',
        'horse12.jpg', 
    ];

    public function definition()
    {
        if (empty(self::$photoNames)) {
            throw new \Exception('No more photos available');
        }

        $randomPhoto = array_splice(self::$photoNames, array_rand(self::$photoNames), 1)[0];

        return [
            'name' => $this->faker->name,
            'age' => $this->faker->numberBetween(1, 11),
            'breed' => $this->faker->word,
            'owner' => $this->faker->name,
            'photo_url' => 'assets/' . $randomPhoto,
        ];
    }
}