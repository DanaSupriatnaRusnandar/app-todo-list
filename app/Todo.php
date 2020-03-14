<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $guarded = [];

    public function details()
    {
        return $this->hasMany(TodoDetail::class);
    }
}
