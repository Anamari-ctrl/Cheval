<?php

namespace App\Http\Controllers;

use App\Models\FeedingSchedule;
use App\Models\Horse;
use Illuminate\Http\Request;

class FeedingScheduleController extends Controller
{
    public function index(Horse $horse)
    {
        return response()->json($horse->feedingSchedules, 200);
    }

    public function store(Request $request, Horse $horse)
    {
        $validated = $request->validate([
            'time' => 'required',
            'quantity' => 'required|numeric',
            'feed_type' => 'required',
            'medication_name' => 'nullable|string',
            'dosage' => 'nullable|string',
        ]);

        $feedingSchedule = $horse->feedingSchedules()->create($validated);

        return response()->json($feedingSchedule, 201);
    }

    public function show(FeedingSchedule $feedingSchedule)
    {
        return response()->json($feedingSchedule, 200);
    }

    public function update(Request $request, FeedingSchedule $feedingSchedule)
    {
        $validated = $request->validate([
            'time' => 'required',
            'quantity' => 'required|numeric',
            'feed_type' => 'required',
            'medication_name' => 'nullable|string',
            'dosage' => 'nullable|string',
        ]);

        $feedingSchedule->update($validated);

        return response()->json($feedingSchedule, 200);
    }

    public function destroy(FeedingSchedule $feedingSchedule)
    {
        $feedingSchedule->delete();

        return response()->json(null, 204);
    }

    public function getTodaysFeedings(Horse $horse)
    {
        $today = now()->startOfDay();
        $feedings = $horse->feedingSchedules()->whereDate('time', $today)->get();

        return response()->json($feedings, 200);
    }
}
