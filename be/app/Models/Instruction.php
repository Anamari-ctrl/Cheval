<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instruction extends Model
{
    use HasFactory;

    protected $fillable = ['horse_id', 'vitamin', 'dose', 'special_instructions'];

    public function horse()
    {
        return $this->belongsTo(Horse::class);
    }
}
