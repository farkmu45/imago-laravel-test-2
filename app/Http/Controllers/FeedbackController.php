<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFeedbackRequest;
use App\Models\Feedback;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FeedbackController extends Controller
{
    public function store(StoreFeedbackRequest $request)
    {
        $data = $request->validated();
        $feedback = Feedback::create($data);
        return response()->json($feedback, 201);
    }

    public function index()
    {
        $feedback = Feedback::latest()->get();
        return response()->json($feedback);
    }
}
