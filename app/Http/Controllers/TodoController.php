<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;
use Carbon\Carbon;
use App\TodoDetail;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::orderBy('status', 'ASC')->orderBy('created_at', 'DESC')->paginate(5);
        return response()->json(['status' => 'success', 'data' => $todos]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:100',
            'due_date' => 'required|date'
        ]);
        $due_date = Carbon::parse($request->due_date)->format('Y-m-d');
        Todo::create([
            'name' => $request->name,
            'note' => $request->note,
            'due_date' => $due_date,
            'status' => false
        ]);
        return response()->json(['status' => 'success']);
    }

    public function update(Request $request, $id)
    {
        $todo = Todo::find($id);
        $todo->update(['status' => true]);
        return response()->json(['status' => 'success']);
    }

    public function show($id)
    {   
        $todo = Todo::with(['details' => function($q){
            $q->orderBy('status', 'ASC');
        }])->find($id);
        return response()->json(['status' => 'success', 'data'=> $todo]);
    }

    public function destroy($id)
    {
        $todo = Todo::find($id);
        $todo->delete();
        return response()->json(['status' => 'success']);
    }

    public function storeDetail(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:100'
        ]);
        $todo = TodoDetail::create([
            'todo_id' => $request->id,
            'name' => $request->name,
            'status' => false
        ]);
        return response()->json(['status' => 'success']);
    }

    public function updateDetail($id)
    {
        $detail = TodoDetail::find($id);
        $detail->update(['status' => true]);
        return response()->json(['status' => 'success']);
    }
}
