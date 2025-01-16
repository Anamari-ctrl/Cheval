<?php

namespace App\Http\Controllers;

use App\Models\Horse;
use Illuminate\Http\Request;

class HorseController extends Controller
{
    public function index()
    {
        return Horse::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'age' => 'required|integer',
            'breed' => 'required|string',
            'owner' => 'required|string',
            'photo_url' => 'nullable|url',
        ]);

        return Horse::create($validated);
    }

    public function show(Horse $horse)
    {
        return $horse;
    }

    public function update(Request $request, Horse $horse)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'age' => 'required|integer',
            'breed' => 'required|string',
            'owner' => 'required|string',
            'photo_url' => 'nullable|url',
        ]);

        $horse->update($validated);

        return $horse;
    }

    public function destroy(Horse $horse)
    {
        $horse->delete();

        return response()->noContent();
    }
}
