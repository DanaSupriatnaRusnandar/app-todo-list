<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="png/jpg" href="{{url('adminlte/dist/img/images.jfif')}}">
    <title> Todo List</title>
    <style>
        h2 {
            text-align: center;
        font-family: Georgia, 'Times New Roman', Times, serif;
        }
    </style>
</head>
<body>
    <div class="container mt-5" id="dw">
        <h2> Todo List</h2><hr>
        <dw-app></dw-app>
    </div>

<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>