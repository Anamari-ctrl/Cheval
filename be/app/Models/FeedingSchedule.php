<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FeedingSchedule extends Model
{
    use HasFactory;

    protected $fillable = ['time', 'quantity', 'feed_type', 'medication_name', 'dosage', 'horse_id'];

    public function horse()
    {
        return $this->belongsTo(Horse::class);
    }
}
