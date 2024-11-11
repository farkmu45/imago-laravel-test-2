<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFeedbackRequest;
use App\Models\Feedback;

class FeedbackController extends Controller
{
    public function store(StoreFeedbackRequest $request)
    {
        // Validate feedback request, and store it
        $data = $request->validated();
        $feedback = Feedback::create($data);

        // Return created feedback data
        return response()->json($feedback, 201);
    }

    public function index()
    {
        // Get latest feedback
        $feedback = Feedback::latest()->get();

        // Return latest feedback data
        return response()->json($feedback);
    }
}
