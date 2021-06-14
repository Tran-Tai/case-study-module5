@extends('layouts.admin-layout')
@section('title')
    Staffs Delete
@endsection
@section('body')
<div class="container col-6 my-1 p-1">
    <form action="/staffs/{{$id}}" method="POST">
        @method('DELETE')
        @csrf
        <div class="form-group">
            <label>Bạn có muốn xóa thông tin nhân viên này hay không?</label>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-danger">Xóa</button>
            <a type="button" href="/staffs/{{$id}}" class="btn btn-primary">Bỏ qua</a>
        </div>
    </form>
</div>
@endsection