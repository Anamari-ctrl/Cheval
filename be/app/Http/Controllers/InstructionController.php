<?php

namespace App\Http\Controllers;

use App\Models\Instruction;
use App\Models\Horse;
use Illuminate\Http\Request;

class InstructionController extends Controller
{
    public function index(Horse $horse)
    {
        return $horse->instructions;
    }

    public function store(Request $request, Horse $horse)
    {
        $validated = $request->validate([
            'vitamin' => 'required|string',
            'dose' => 'required|integer',
            'special_instructions' => 'nullable|string',
        ]);

        $instruction = $horse->instructions()->create($validated);

        return $instruction;
    }

    public function show(Instruction $instruction)
    {
        return $instruction; 
    }

    public function update(Request $request, Instruction $instruction)
    {
        $validated = $request->validate([
            'vitamin' => 'required|string',
            'dose' => 'required|integer',
            'special_instructions' => 'nullable|string',
        ]);

        $instruction->update($validated);

        return $instruction;
    }

    public function destroy(Instruction $instruction)
    {
        $instruction->delete();

        return response()->noContent();
    }
}
