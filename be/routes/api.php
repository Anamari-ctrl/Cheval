<?php
use App\Http\Controllers\HorseController;
use App\Http\Controllers\FeedingScheduleController;
use App\Http\Controllers\InstructionController;
use Illuminate\Support\Facades\Route;


Route::apiResource('horses', HorseController::class);
Route::apiResource('horses.feeding-schedules', FeedingScheduleController::class)->shallow();
Route::apiResource('horses.instructions', InstructionController::class)->shallow();
