<?php
namespace Database\Factories;

use App\Models\Horse;
use Illuminate\Database\Eloquent\Factories\Factory;

class HorseFactory extends Factory
{
    protected $model = Horse::class;

    public function definition()
    {
        // Path to the directory containing horse photos
        $photoDirectory = '/home/sbr/Documents/PROJEKT_VMESNIKI/Cheval/fe/public';
        $photos = glob($photoDirectory . '/*.jpg'); // Get all .jpg files in the directory
        $randomPhoto = basename($this->faker->randomElement($photos)); // Select a random photo

        return [
            'name' => $this->faker->name,
            'age' => $this->faker->numberBetween(1, 10),
            'breed' => $this->faker->word,
            'owner' => $this->faker->name,
            'photo_url' => 'assets/' . $randomPhoto, // Adjust the path as needed
        ];
    }
}