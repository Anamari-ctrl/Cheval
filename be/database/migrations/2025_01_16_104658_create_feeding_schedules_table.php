<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('feeding_schedules', function (Blueprint $table) {
            $table->id(); 
            $table->foreignId('horse_id')->constrained()->onDelete('cascade'); 
            $table->string('feed_type'); 
            $table->integer('quantity');
            $table->string('feeding_time');
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feeding_schedules');
    }
};
