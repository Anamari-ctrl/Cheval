<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FeedingSchedule extends Model
{
    use HasFactory;

    protected $fillable = ['horse_id', 'feed_type', 'quantity', 'feeding_time'];

    public function horse()
    {
        return $this->belongsTo(Horse::class);
    }
}
