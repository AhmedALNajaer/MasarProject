<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use  App\Models\contact_massages;
class contact_massages_controller extends Controller
{
    public function index(){
    $massages=contact_massages::all();
    return response()->json(['data'=>$massages, 'message'=>'All Messages'])->setStatusCode(200);
}


    public function store(Request $request){
        $validmassages=$request->validate([
        'name'=>'required|string',
        'email'=>'required|string',
        'message-text'=>'string',
        'date',
        ]);
        $contact=contact_massages::create($validmassages);
            return response()->json(['data'=>$contact, 'message'=>'Created Messages Successfully'])->setStatusCode(201);
    }
    public function update(Request $request,string $id){
        $massages=contact_massages::find($id);
        $is_updated=$massages->update([
        'name'=>$request->input('name'),
        'email'=>$request->input('email'),
        'message text'=>$request->input('message text'),
        'date'=>$request->input('date'),
        ]);
        return response()->json(['data'=>$massages, 'message'=>'Updated Messages Successfully'])->setStatusCode(200);
    }
        public function destroy(string $id){
            $massages=contact_massages::find($id);
            $is_deleted=$massages->delete();
            return response()->json(['data'=>$is_deleted, 'message'=>'Delete Messages Successfully'])->setStatusCode(200);
        }
    
}
