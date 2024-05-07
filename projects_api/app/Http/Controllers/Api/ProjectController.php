<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $projects = Project::all();
        return response()->json($projects);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validatedData = $request->validate([
            'title' => 'required|string',
            'short_description' => 'required|string',
            'project_background' => 'nullable|string',
            'project_link' => 'nullable|url',
            'project_repo' => 'required|url',
            'cover_img_url' => 'required|url',
            'hero_img_url' => 'required|url',
            'static_preview_1' => 'nullable|string',
            'static_preview_2' => 'nullable|string',
            'static_preview_3' => 'nullable|string'

        ]);

        $project = Project::create($validatedData);

        // $contactMessage->notify(new ContactMessageNotification($contactMessage));
      


        return response()->json(['message' => 'Proyecto almacenado con éxito', 'data' => $project], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $project = Project::findOrFail($id);
        return response()->json($project);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
