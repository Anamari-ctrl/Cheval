<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Horse extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'age', 'breed', 'owner', 'photo_url'];

    public function feedingSchedules()
    {
        return $this->hasMany(FeedingSchedule::class);
    }
}
