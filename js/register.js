var register_form = '\
<div id="register-form">\
    <form>\
        <div class="form-group">\
            <label for="username">Username</label>\
            <input type="name" class="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username">\
            <small id="usernameHelp" class="form-text text-muted"></small>\
    </div>\
    <div class="form-group">\
        <label for="email">Email address</label>\
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">\
        <small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small>\
    </div>\
    <div class="form-group">\
        <label for="password">Password</label>\
        <input type="password" class="form-control" id="password" placeholder="Password">\
    </div>\
    <div class="form-group">\
        <label for="password-rpt">Confirm Password</label>\
        <input type="password-rpt" class="form-control" id="password-rpt" placeholder="Confirm Password">\
    </div>\
    <div class="form-group form-check">\
        <input type="checkbox" class="form-check-input" id="remember">\
        <label class="form-check-label" for="remember">Remember me</label>\
    </div>\
    <button type="submit" class="btn btn-primary">Register</button>\
    </form></div>';

var login_form = '\
<div id="login-form">\
    <form>\
        <div class="form-group">\
            <label for="email">Email address</label>\
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">\
            <small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small>\
        </div>\
        <div class="form-group">\
            <label for="password">Password</label>\
            <input type="password" class="form-control" id="password" placeholder="Password">\
        </div>\
        <div class="form-group form-check">\
            <input type="checkbox" class="form-check-input" id="remember">\
            <label class="form-check-label" for="remember">Remember me</label>\
        </div>\
    <button type="submit" class="btn btn-primary">Login</button>\
    </form>\
    <br>\
    <p>Don\'t have an account yet?</p>\
    <button type="submit" class="btn btn-info">Register</button>\
    </div>';