<?php

namespace App\Http\Controllers;

use App\Models\FeedingSchedule;
use App\Models\Horse;
use Illuminate\Http\Request;

class FeedingScheduleController extends Controller
{
    public function index(Horse $horse)
    {
        return $horse->feedingSchedules;
    }

    public function store(Request $request, Horse $horse)
    {
        $validated = $request->validate([
            'feed_type' => 'required|string',
            'quantity' => 'required|integer',
            'feeding_time' => 'required|string',
        ]);

        $feedingSchedule = $horse->feedingSchedules()->create($validated);

        return $feedingSchedule;
    }

    public function show(FeedingSchedule $feedingSchedule)
    {
        return $feedingSchedule;
    }

    public function update(Request $request, FeedingSchedule $feedingSchedule)
    {
        $validated = $request->validate([
            'feed_type' => 'required|string',
            'quantity' => 'required|integer',
            'feeding_time' => 'required|string',
        ]);

        $feedingSchedule->update($validated);

        return $feedingSchedule;
    }

    public function destroy(FeedingSchedule $feedingSchedule)
    {
        $feedingSchedule->delete();

        return response()->noContent();
    }
}
